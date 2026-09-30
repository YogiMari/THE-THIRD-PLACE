#!/usr/bin/env python3

"""
THE THIRD PLACE — Field Atlas Navigator generator

Builds the Field Atlas Navigator page (a single self-contained HTML file):
a 3D map of Kanto centred on Koiwa, with each field's road route, photo,
10-axis analysis and early check-in record.

    MD-002 Field Atlas Landscape Framework   -> fields, scores, early check-in
                                                (parsed by field_atlas_radar.py)
    scripts/data/field_atlas_navigator/
        japan_prefectures.json   -> prefecture outlines (lon/lat, simplified)
        locations.json           -> each field's position (lon/lat)
        routes.json              -> road route from Koiwa (lon/lat path, km, via)
        images.json              -> each field's photo source (page, image URL)
        images/                  -> each field's photo (600 px JPEG, committed)

Scores always come from MD-002. The data files only hold geography and photo
sources, keyed by field name. Refresh them with field_atlas_navigator_fetch.py.

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


def build(md002: Path, template: Path = TEMPLATE) -> tuple[str, list[str]]:
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
