#!/usr/bin/env python3

"""
THE THIRD PLACE — Field Atlas Navigator generator

Builds the Field Atlas Navigator page (a single self-contained HTML file):
a 3D map of Kanto centred on Koiwa, with each field's road route, photo,
10-axis analysis and early check-in record.

    MD-002 Field Atlas Landscape Framework   -> fields, scores, early check-in,
                                                ground surface (parsed by
                                                field_atlas_radar.py) and the
                                                Reference Benchmark Site
    DB-001 Project Ledger §Field Log         -> planned and done camps per field
    scripts/data/field_atlas_navigator/
        japan_prefectures.json   -> prefecture outlines (lon/lat, simplified)
        locations.json           -> each field's position (lon/lat), and the
                                    benchmark site's ("benchmark": true)
        routes.json              -> road route from Koiwa (lon/lat path, km, via)
        images.json              -> each field's photo source (page, image URL)
        images/                  -> each field's photo (600 px JPEG, committed)

Scores always come from MD-002 and camp records from DB-001. The data files
only hold geography and photo sources, keyed by field name. Refresh them with field_atlas_navigator_fetch.py.

Usage:
    python3 scripts/field_atlas_navigator.py \
        --md002 MD/MD-002_Field_Atlas_Landscape_Framework.md \
        --out field-atlas-navigator.html
"""

import argparse
import base64
import datetime
import hashlib
import json
import math
import re
import sys
from pathlib import Path

sys.path.insert(0, str(Path(__file__).parent))
import field_atlas_radar  # noqa: E402  (MD-002 parser shared with the radar)

HERE = Path(__file__).parent
TEMPLATE = HERE / "templates" / "field_atlas_navigator.html"
DATA_DIR = HERE / "data" / "field_atlas_navigator"
DB001 = HERE.parent / "DB" / "DB-001_Project_Ledger.md"

# Koiwa (home base). The map is projected around this point:
# x = east, z = south, 1 unit = 0.1° of latitude (about 11.1 km).
LON0, LAT0 = 139.8827, 35.7331
KX = math.cos(math.radians(LAT0)) * 10
KZ = 10
JITTER = 0.32  # spreads fields that share one geocoded point


def project(lon: float, lat: float) -> list[float]:
    return [round((lon - LON0) * KX, 3), round(-(lat - LAT0) * KZ, 3)]


def image_path(name: str) -> Path:
    return DATA_DIR / "images" / (hashlib.sha1(name.encode("utf-8")).hexdigest()[:12] + ".jpg")


def clean_via(names: list[str]) -> list[str]:
    out = []
    for n in names:
        n = re.sub(r"（?[左右]ルート）?", "", n).strip()
        if n and n not in out:
            out.append(n)
    return out[:4]


def load(name: str):
    return json.loads((DATA_DIR / name).read_text(encoding="utf-8"))


def parse_benchmark(md002: Path) -> list[dict]:
    """MD-002 §Reference Benchmark Site: name, note in brackets, tag, text."""
    text = md002.read_text(encoding="utf-8")
    block = field_atlas_radar.section(text, "# Reference Benchmark Site", "#")
    out = []
    for cells in field_atlas_radar.table_rows(block)[1:]:
        m = re.match(r"^(.*?)（(.+)）$", cells[0].strip())
        tag, _, note = " | ".join(cells[1:]).replace("**", "").partition("<br>")
        out.append({"name": (m.group(1) if m else cells[0]).strip(), "info": m.group(2) if m else "",
                    "tag": tag.strip(), "note": note.strip()})
    return out


def parse_field_log(db001: Path, names: set[str], warnings: list[str]) -> dict[str, list[dict]]:
    """DB-001 §Field Log rows, keyed by the MD-002 field name."""
    if not db001.exists():
        warnings.append(f"no DB-001 (Field Log skipped): {db001}")
        return {}
    block = field_atlas_radar.section(db001.read_text(encoding="utf-8"), "# Field Log", "#")
    rows = field_atlas_radar.table_rows(block)
    head, log = rows[0], {}
    for cells in rows[1:]:
        row = dict(zip(head, cells))
        name = re.sub(r"（[^（）]*）$", "", row.get("Field", "")).strip()
        if name in ("", "—"):
            continue
        if name not in names:
            warnings.append(f"Field Log: not an MD-002 field: {name}")
            continue
        log.setdefault(name, []).append({
            "date": row.get("Date", ""), "status": row.get("Status", ""),
            "weather": row.get("Weather / Temp", ""), "config": row.get("Configuration", ""),
            "well": row.get("Went Well", ""), "issues": row.get("Issues", ""),
        })
    return log


def build(md002: Path, template: Path = TEMPLATE, db001: Path = DB001) -> tuple[str, list[str]]:
    data, version = field_atlas_radar.build(md002)
    locations = load("locations.json")
    routes = load("routes.json")
    images = load("images.json")
    japan = load("japan_prefectures.json")
    warnings = []

    geo, lonlat, route_out, img, img_src = {}, {}, {}, {}, {}
    groups: dict[tuple, list[int]] = {}
    for d in data:
        loc = locations.get(d["name"])
        if not loc:
            warnings.append(f"no location: {d['name']}")
            continue
        groups.setdefault(tuple(loc["lonlat"]), []).append(d["rank"])
        lonlat[d["rank"]] = loc["lonlat"]
    for (lon, lat), ranks in groups.items():
        x, z = project(lon, lat)
        for i, r in enumerate(ranks):
            a = i / len(ranks) * 2 * math.pi
            o = JITTER if len(ranks) > 1 else 0
            geo[r] = [round(x + math.cos(a) * o, 3), round(z + math.sin(a) * o, 3)]

    for d in data:
        name, r = d["name"], d["rank"]
        rt = routes.get(name)
        if rt:
            route_out[r] = {
                "p": [project(lon, lat) for lon, lat in rt["path"]],
                "km": rt["km"],
                "via": clean_via(rt["via"]),
            }
        else:
            warnings.append(f"no route: {name}")
        src = images.get(name)
        if src:
            img_src[r] = src["page"]
        f = image_path(name)
        if f.exists():
            img[r] = "data:image/jpeg;base64," + base64.b64encode(f.read_bytes()).decode()
        else:
            warnings.append(f"no photo (run the fetch script): {name}")

    field_log = parse_field_log(db001, {d["name"] for d in data}, warnings)
    bench = []
    for b in parse_benchmark(md002):
        loc = locations.get(b["name"])
        if not loc:
            warnings.append(f"no location for benchmark: {b['name']}")
            continue
        bench.append({**b, "ll": loc["lonlat"], "p": project(*loc["lonlat"])})
    extra = {
        "log": {d["rank"]: field_log[d["name"]] for d in data if d["name"] in field_log},
        "bench": bench,
    }

    jp = [
        {"n": p["name"], "r": [[v for lon, lat in ring for v in project(lon, lat)] for ring in p["rings"]]}
        for p in japan
    ]

    def js(o):
        return json.dumps(o, ensure_ascii=False, separators=(",", ":"))

    html = (
        template.read_text(encoding="utf-8")
        .replace("/*__DATA__*/[]", js(data))
        .replace("/*__JAPAN__*/[]", js(jp))
        .replace("/*__GEO__*/{}", js(geo))
        .replace("/*__LL__*/{}", js(lonlat))
        .replace("/*__IMG__*/{}", js(img))
        .replace("/*__IMGSRC__*/{}", js(img_src))
        .replace("/*__ROUTES__*/{}", js(route_out))
        .replace("/*__EXTRA__*/{}", js(extra))
        .replace("__MD002_VERSION__", version)
        .replace("__GENERATED__", datetime.date.today().isoformat())
    )
    return html, warnings


def main() -> None:
    parser = argparse.ArgumentParser(description=__doc__.split("\n\n")[1])
    parser.add_argument("--md002", required=True, type=Path)
    parser.add_argument("--out", required=True, type=Path)
    args = parser.parse_args()

    html, warnings = build(args.md002)
    args.out.write_text(html, encoding="utf-8")
    for w in warnings:
        print("warning:", w, file=sys.stderr)
    print(f"Field Atlas Navigator -> {args.out} ({len(html) // 1024} KB)")


if __name__ == "__main__":
    main()
