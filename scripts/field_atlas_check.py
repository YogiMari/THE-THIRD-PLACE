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
             (surroundings gaps are reported but do not fail the check)
    pages    the Navigator, Ivory and Radar generators build without warnings

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
import field_atlas_navigator as nav  # noqa: E402
import field_atlas_radar as radar  # noqa: E402

ROOT = HERE.parent
MD002 = ROOT / "MD" / "MD-002_Field_Atlas_Landscape_Framework.md"
TEMPLATES = [nav.TEMPLATE, HERE / "templates" / "field_atlas_ivory.html"]


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
    for d in data:
        if not nav.image_path(d["name"]).exists():
            problems.append(f"images/: missing photo: {d['name']}")
    for b in nav.parse_benchmark(MD002):
        if b["name"] not in bench:
            problems.append(f"locations.json: Reference Benchmark Site not marked benchmark: {b['name']}")

    # the pages themselves
    for t in TEMPLATES:
        html, warnings = nav.build(MD002, t)
        problems += [f"{t.name}: {w}" for w in warnings]
        left = re.findall(r"/\*__[A-Z]+__\*/|__MD002_VERSION__|__GENERATED__", html)
        if left:
            problems.append(f"{t.name}: placeholders left: {sorted(set(left))}")
    html, warnings, _, _ = radar.render(MD002)
    problems += [f"field_atlas_radar.html: {w}" for w in warnings]
    left = re.findall(r"/\*__[A-Z]+__\*/|__MD002_VERSION__|__GENERATED__", html)
    if left:
        problems.append(f"field_atlas_radar.html: placeholders left: {sorted(set(left))}")

    # surroundings come from OpenStreetMap and are best-effort reference data: report, do not fail
    notes = [p for p in problems if "surroundings" in p]
    problems = [p for p in problems if "surroundings" not in p]
    if notes:
        print(f"note — {len(notes)} surroundings gap(s) (fetch with field_atlas_navigator_fetch.py surroundings):")
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
