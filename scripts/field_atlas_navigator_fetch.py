#!/usr/bin/env python3

"""
THE THIRD PLACE — Field Atlas Navigator data fetcher

Refreshes the geography and photos that field_atlas_navigator.py embeds.
Needs network access. Photos need Pillow (pip install pillow).

    images    download each field's photo from images.json into images/
              (600 px wide JPEG; the folder is not committed)
    geocode   add a position for every MD-002 field missing from
              locations.json, using the GSI address search with the
              field's municipality (edit "query" to a street address and
              delete "lonlat" to re-geocode one field more precisely)
    routes    compute the road route from Koiwa for every field missing
              from routes.json, using the public OSRM server
              (OpenStreetMap data); --all recomputes every route

Usage:
    python3 scripts/field_atlas_navigator_fetch.py images
    python3 scripts/field_atlas_navigator_fetch.py geocode --md002 MD/MD-002_Field_Atlas_Landscape_Framework.md
    python3 scripts/field_atlas_navigator_fetch.py routes [--all]
"""

import argparse
import io
import json
import time
import urllib.parse
import urllib.request
from pathlib import Path

from field_atlas_navigator import DATA_DIR, LAT0, LON0, image_path, load
import field_atlas_radar

UA = "Mozilla/5.0 (THE THIRD PLACE Field Atlas Navigator)"


def get(url: str, timeout: int = 40) -> bytes:
    req = urllib.request.Request(url, headers={"User-Agent": UA})
    for attempt in range(4):
        try:
            with urllib.request.urlopen(req, timeout=timeout) as r:
                return r.read()
        except Exception:
            if attempt == 3:
                raise
            time.sleep(2 ** (attempt + 1))
    raise RuntimeError(url)


def save(name: str, obj, compact: bool = False) -> None:
    text = json.dumps(obj, ensure_ascii=False, separators=(",", ":")) if compact else json.dumps(obj, ensure_ascii=False, indent=1)
    (DATA_DIR / name).write_text(text, encoding="utf-8")


def cmd_images(_args) -> None:
    from PIL import Image

    (DATA_DIR / "images").mkdir(exist_ok=True)
    for name, src in load("images.json").items():
        try:
            im = Image.open(io.BytesIO(get(src["image"]))).convert("RGB")
        except Exception as e:
            print(f"FAILED {name}: {e}")
            continue
        im.thumbnail((600, 600))
        im.save(image_path(name), "JPEG", quality=70, optimize=True, progressive=True)
        print(f"ok {name}")


def geocode(query: str):
    url = "https://msearch.gsi.go.jp/address-search/AddressSearch?q=" + urllib.parse.quote(query)
    hits = json.loads(get(url, 20))
    return hits[0]["geometry"]["coordinates"] if hits else None


def cmd_geocode(args) -> None:
    data, _ = field_atlas_radar.build(args.md002)
    locations = load("locations.json")
    for d in data:
        loc = locations.get(d["name"], {"source": "municipality", "query": d["pref"].split("・")[0]})
        if loc.get("lonlat"):
            continue
        ll = geocode(loc["query"])
        if not ll:
            print(f"NOT FOUND {d['name']}: {loc['query']}")
            continue
        loc["lonlat"] = [round(ll[0], 6), round(ll[1], 6)]
        locations[d["name"]] = loc
        print(f"ok {d['name']}: {loc['query']}")
        time.sleep(0.2)
    save("locations.json", locations)


def cmd_routes(args) -> None:
    locations = load("locations.json")
    routes = load("routes.json")
    for name, loc in locations.items():
        if name in routes and not args.all:
            continue
        lon, lat = loc["lonlat"]
        url = (f"https://router.project-osrm.org/route/v1/driving/{LON0},{LAT0};{lon},{lat}"
               "?overview=full&geometries=geojson&steps=true")
        res = json.loads(get(url))
        if res.get("code") != "Ok":
            print(f"FAILED {name}")
            continue
        rt = res["routes"][0]
        coords = rt["geometry"]["coordinates"]
        # keep every point that moves more than ~130 m, which is enough at map scale
        path, last = [], None
        for x, y in coords:
            if last is None or abs(x - last[0]) + abs(y - last[1]) > 0.0012:
                path.append([round(x, 5), round(y, 5)])
                last = (x, y)
        if path[-1] != [round(coords[-1][0], 5), round(coords[-1][1], 5)]:
            path.append([round(coords[-1][0], 5), round(coords[-1][1], 5)])
        acc, order = {}, []
        for s in rt["legs"][0]["steps"]:
            n = (s.get("name") or s.get("ref") or "").split(";")[0]
            if not n:
                continue
            if n not in acc:
                acc[n] = 0
                order.append(n)
            acc[n] += s["distance"]
        via = [n for n in order if acc[n] >= max(4000, rt["distance"] * 0.06)][:5]
        routes[name] = {"km": round(rt["distance"] / 1000), "via": via, "path": path}
        print(f"ok {name}: {routes[name]['km']} km via {' / '.join(via)}")
        time.sleep(1.1)  # the public OSRM server asks for at most one request per second
    save("routes.json", routes, compact=True)


def main() -> None:
    parser = argparse.ArgumentParser(description=__doc__.split("\n\n")[1])
    sub = parser.add_subparsers(dest="cmd", required=True)
    sub.add_parser("images")
    g = sub.add_parser("geocode")
    g.add_argument("--md002", required=True, type=Path)
    r = sub.add_parser("routes")
    r.add_argument("--all", action="store_true")
    args = parser.parse_args()
    {"images": cmd_images, "geocode": cmd_geocode, "routes": cmd_routes}[args.cmd](args)


if __name__ == "__main__":
    main()
