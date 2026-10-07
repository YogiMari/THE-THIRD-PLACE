#!/usr/bin/env python3

"""
THE THIRD PLACE — Field Atlas consistency check

Checks that the Field Atlas pages can be rebuilt from the repository without
notation drift between documents and data files:

    MD-002   every field has its Sub-Score row (summing to its Atlas
             Resonance), its Early Check-in row and its Site Record row,
             and no row names a field missing from the Database
    DB-001   every Field Log row names an MD-002 field, and every gear ID
             in its Configuration exists in MD-004
    data     locations, routes, photos, elevation and surroundings exist for
             every field, and no data key is left over from an old name
             (surroundings gaps are reported but do not fail the check);
             climate.json names only MD-002 fields and defines every station
             it uses, with 12 values (first dekad of each month) and JMA sources
    pages    the Nocturne, Aubade and Radar generators build without warnings, the
             Nocturne and Aubade templates each take the shared script once, and
             no placeholder is left in any page

Exits 1 and lists every problem when anything is out of step. Runs in CI.

Usage:
    python3 scripts/field_atlas_check.py
"""

import io
import re
import sys
from contextlib import redirect_stdout
from pathlib import Path

HERE = Path(__file__).parent
sys.path.insert(0, str(HERE))
import field_atlas_nocturne as nav  # noqa: E402
import field_atlas_radar as radar  # noqa: E402

ROOT = HERE.parent
MD002 = ROOT / "MD" / "MD-002_Field_Atlas_Landscape_Framework.md"
TEMPLATES = [nav.TEMPLATE, HERE / "templates" / "field_atlas_aubade.html"]


def main() -> None:
    problems = []

    # MD-002 (field_atlas_radar.build stops on a missing row or a wrong sum)
    try:
        with redirect_stdout(io.StringIO()):
            data, _ = radar.build(MD002)
    except SystemExit as e:
        print(f"FAIL MD-002: {e}")
        sys.exit(1)
    names = {d["name"] for d in data}
    text = MD002.read_text(encoding="utf-8")
    sub = {c[0].replace(radar.UNVISITED_SUFFIX, "").strip()
           for c in radar.table_rows(radar.section(text, "## Sub-Score Table", "##"))[1:]}
    early = {c[0] for c in radar.table_rows(radar.section(text, "## Early Check-in Record", "##"))[1:]}
    site = nav.parse_site_record(MD002)
    for label, keys in (("Sub-Score Table", sub), ("Early Check-in Record", early), ("Site Record", set(site))):
        for n in sorted(keys - names):
            problems.append(f"MD-002 {label}: not in the Field Atlas Database: {n}")
        for n in sorted(names - keys):
            problems.append(f"MD-002 {label}: missing: {n}")

    # DB-001 Field Log and the gear it names
    warn = []
    log = nav.parse_field_log(nav.DB001, names, warn)
    problems += [f"DB-001 {w}" for w in warn]
    ids = {g for rows in log.values() for e in rows for g in nav.GEAR_ID.findall(e["config"])}
    for g in sorted(ids - set(nav.parse_gear(nav.MD004, ids))):
        problems.append(f"DB-001 Field Log: gear ID not in MD-004: {g}")

    # data files keyed by field name
    locations = nav.load("locations.json")
    bench = {k for k, v in locations.items() if v.get("benchmark")}
    for file in ("locations.json", "routes.json", "images.json", "elevation.json", "surroundings.json"):
        keys = set(nav.load(file)) - bench - {"小岩（起点）"}
        for n in sorted(names - keys):
            problems.append(f"{file}: missing: {n}")
        for n in sorted(keys - names):
            problems.append(f"{file}: no such MD-002 field (renamed?): {n}")
    # climate.json: the JMA normal of the daily lowest temperature, per station, and the field each station stands for
    clim = nav.load("climate.json") if (nav.DATA_DIR / "climate.json").exists() else {}
    stations = clim.get("stations", {})
    for f, key in sorted(clim.get("fields", {}).items()):
        if f not in names:
            problems.append(f"climate.json: no such MD-002 field (renamed?): {f}")
        if key not in stations:
            problems.append(f"climate.json: station not defined: {key} (for {f})")
    for key, st in sorted(stations.items()):
        tmin = st.get("tmin_normal", [])
        if len(tmin) != 12 or not all(isinstance(v, (int, float)) for v in tmin):
            problems.append(f"climate.json: {key}: tmin_normal must be 12 numbers (first dekad, January to December)")
        for k in ("prefecture", "elev_m", "period"):
            if k not in st:
                problems.append(f"climate.json: {key}: missing {k}")
        for k in ("normals", "elevation"):
            if not st.get("sources", {}).get(k, {}).get("url", "").startswith("https://www.jma.go.jp/") \
                    and not st.get("sources", {}).get(k, {}).get("url", "").startswith("https://www.data.jma.go.jp/"):
                problems.append(f"climate.json: {key}: sources.{k}.url must be a JMA page")
    for n, rows in sorted(log.items()):
        if any(e["status"] == "Planned" for e in rows) and n not in clim.get("fields", {}):
            print(f"note — no cold guide for the planned camp at {n} (add it to climate.json)")
    for d in data:
        if not nav.image_path(d["name"]).exists():
            problems.append(f"images/: missing photo: {d['name']}")
    for b in nav.parse_benchmark(MD002):
        if b["name"] not in bench:
            problems.append(f"locations.json: Reference Benchmark Site not marked benchmark: {b['name']}")

    # the pages themselves
    if not nav.SHARED_JS.exists():
        problems.append(f"{nav.SHARED_JS.name}: missing (the script shared by the Nocturne and Aubade templates)")
    for t in TEMPLATES:
        marks = t.read_text(encoding="utf-8").count("/*__SHARED_JS__*/")
        if marks != 1:
            problems.append(f"{t.name}: expected one /*__SHARED_JS__*/ marker, found {marks}")
    for t in TEMPLATES:
        html, warnings = nav.build(MD002, t)
        problems += [f"{t.name}: {w}" for w in warnings]
        left = re.findall(r"/\*__[A-Z_]+__\*/|__MD002_VERSION__|__GENERATED__", html)
        if left:
            problems.append(f"{t.name}: placeholders left: {sorted(set(left))}")
    html, warnings, _, _ = radar.render(MD002)
    problems += [f"field_atlas_radar.html: {w}" for w in warnings]
    left = re.findall(r"/\*__[A-Z_]+__\*/|__MD002_VERSION__|__GENERATED__", html)
    if left:
        problems.append(f"field_atlas_radar.html: placeholders left: {sorted(set(left))}")

    # surroundings come from OpenStreetMap and are best-effort reference data: report, do not fail
    notes = [p for p in problems if "surroundings" in p]
    problems = [p for p in problems if "surroundings" not in p]
    if notes:
        print(f"note — {len(notes)} surroundings gap(s) (fetch with field_atlas_fetch.py surroundings):")
        for n in notes:
            print("  -", n)
    if problems:
        print(f"FAIL — {len(problems)} problem(s):")
        for p in problems:
            print("  -", p)
        sys.exit(1)
    print(f"PASS — Field Atlas: {len(data)} fields, MD-002 / DB-001 / MD-004 / data files / pages in step.")


if __name__ == "__main__":
    main()
