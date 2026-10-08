#!/usr/bin/env python3

"""
THE THIRD PLACE — Field Atlas Nocturne data fetcher

Refreshes the geography and photos that field_atlas_nocturne.py embeds.
Needs network access. Photos need Pillow (pip install pillow).

    images    download every field's photo from images.json into images/
              (600 px wide JPEG). The photos are committed, so run this
              only for a new field or to refresh them, then commit images/
    geocode   add a position for every MD-002 field missing from
              locations.json, using the GSI address search with the
              field's municipality (edit "query" to a street address and
              delete "lonlat" to re-geocode one field more precisely)
    routes    compute the road route from Koiwa for every field missing
              from routes.json, using the public OSRM server
              (OpenStreetMap data); --all recomputes every route. The
              Reference Benchmark Site ("benchmark": true) gets no route
    elevation for every location missing from elevation.json, the ground
              height at its point from the GSI elevation API (DEM)
    terrain   a coarse ground-height grid (0.02 degrees, 20 m steps) of the
              map area from the GSI DEM tiles (dem_png, zoom 8), written to
              terrain.json; the pages draw shading and contour lines from it
    surroundings
              for every field missing from surroundings.json (--all: every
              field), the nearest expressway IC, convenience store,
              supermarket, bathhouse / onsen and hospital in OpenStreetMap
              (Overpass API), with the driving distance and time from OSRM

Usage:
    python3 scripts/field_atlas_fetch.py images
    python3 scripts/field_atlas_fetch.py geocode --md002 MD/MD-002_Field_Atlas_Landscape_Framework.md
    python3 scripts/field_atlas_fetch.py routes [--all]
    python3 scripts/field_atlas_fetch.py elevation
    python3 scripts/field_atlas_fetch.py terrain
    python3 scripts/field_atlas_fetch.py surroundings [--all]
"""

import argparse
import base64
import io
import math
import json
import time
import urllib.parse
import urllib.request
from pathlib import Path

from field_atlas_nocturne import DATA_DIR, LAT0, LON0, image_path, load
import field_atlas_radar

UA = "Mozilla/5.0 (THE THIRD PLACE Field Atlas Nocturne)"


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
        # the Reference Benchmark Site is shown as a point only (no route)
        if loc.get("benchmark") or (name in routes and not args.all):
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


def cmd_elevation(_args) -> None:
    locations = load("locations.json")
    path = DATA_DIR / "elevation.json"
    elev = json.loads(path.read_text(encoding="utf-8")) if path.exists() else {}
    for name, loc in {"小岩（起点）": {"lonlat": [LON0, LAT0]}, **locations}.items():
        if name in elev:
            continue
        lon, lat = loc["lonlat"]
        res = json.loads(get(f"https://cyberjapandata2.gsi.go.jp/general/dem/scripts/getelevation.php?lon={lon}&lat={lat}&outtype=JSON"))
        if not isinstance(res.get("elevation"), (int, float)):
            print(f"NOT FOUND {name}")
            continue
        elev[name] = {"m": round(res["elevation"]), "src": res.get("hsrc", "")}
        print(f"ok {name}: {elev[name]['m']} m")
        time.sleep(0.3)
    save("elevation.json", elev)


# Terrain grid for the contour lines and shading: GSI DEM PNG tiles (RGB = (R*65536+G*256+B)*0.01 m;
# 2^23 = no data, which is the sea). The area covers the whole map the pages draw.
TERRAIN_BOX = (136.5, 34.0, 142.0, 38.5)  # lon min, lat min, lon max, lat max
TERRAIN_STEP = 0.02  # degrees per cell (about 1.8 km)
TERRAIN_UNIT = 20  # metres per step of the stored byte
TERRAIN_Z = 8


def cmd_terrain(_args) -> None:
    from PIL import Image

    z, n = TERRAIN_Z, 2 ** TERRAIN_Z
    lon0, lat0, lon1, lat1 = TERRAIN_BOX
    fx = lambda lon: (lon + 180) / 360 * n
    fy = lambda lat: (1 - math.log(math.tan(math.radians(lat)) + 1 / math.cos(math.radians(lat))) / math.pi) / 2 * n
    tiles = {}
    for tx in range(int(fx(lon0)), int(fx(lon1)) + 1):
        for ty in range(int(fy(lat1)), int(fy(lat0)) + 1):
            try:
                im = Image.open(io.BytesIO(get(f"https://cyberjapandata.gsi.go.jp/xyz/dem_png/{z}/{tx}/{ty}.png"))).convert("RGB")
                tiles[(tx, ty)] = im.load()
                print(f"ok tile {z}/{tx}/{ty}")
            except Exception as e:
                print(f"no tile {z}/{tx}/{ty}: {e}")
    nx, ny = round((lon1 - lon0) / TERRAIN_STEP), round((lat1 - lat0) / TERRAIN_STEP)

    def height(lon, lat):
        px, py = fx(lon) * 256, fy(lat) * 256
        t = tiles.get((int(px // 256), int(py // 256)))
        if t is None:
            return None
        r, g, b = t[int(px) % 256, int(py) % 256]
        v = r * 65536 + g * 256 + b
        return None if v >= 2 ** 23 else v * 0.01

    out = bytearray()
    for j in range(ny):  # north to south
        for i in range(nx):
            hs = []
            for dj in (0.2, 0.5, 0.8):
                for di in (0.2, 0.5, 0.8):
                    h = height(lon0 + (i + di) * TERRAIN_STEP, lat1 - (j + dj) * TERRAIN_STEP)
                    if h is not None:
                        hs.append(h)
            # a cell is land when most of its samples are; 0 = sea / no data, else 1 + height / 20 m
            out.append(0 if len(hs) < 5 else min(255, 1 + round(max(sum(hs) / len(hs), 0) / TERRAIN_UNIT)))
    save("terrain.json", {
        "lon0": lon0, "lat1": lat1, "step": TERRAIN_STEP, "nx": nx, "ny": ny, "unit_m": TERRAIN_UNIT,
        "src": "国土地理院 標高タイル（DEM PNG）zoom 8 を0.02度のセルに平均",
        "url": "https://maps.gsi.go.jp/development/ichiran.html",
        "data": base64.b64encode(bytes(out)).decode(),
    }, compact=True)
    land = sum(1 for v in out if v)
    print(f"terrain.json: {nx} x {ny} cells, {land} land, max {(max(out) - 1) * TERRAIN_UNIT} m")


# OP-010 Part C §Place, Surrounding Value: expressway access, shops, onsen, hospital
# selector and search radii (m): a small radius first, widened only when nothing is found
POI = {
    "ic": ('nwr["highway"="motorway_junction"]', (15000, 40000)),
    "conv": ('nwr["shop"="convenience"]', (5000, 20000)),
    "super": ('nwr["shop"="supermarket"]', (8000, 25000)),
    "bath": ('nwr["amenity"="public_bath"]', (10000, 30000)),
    "hosp": ('nwr["amenity"="hospital"]', (10000, 40000)),
}
OVERPASS = ["https://maps.mail.ru/osm/tools/overpass/api/interpreter", "https://overpass-api.de/api/interpreter",
            "https://overpass.kumi.systems/api/interpreter"]


def overpass(query: str) -> list:
    data = urllib.parse.urlencode({"data": query}).encode()
    # public mirrors are often busy (504); retry the first one, then try the others
    for attempt in range(10):
        url = OVERPASS[0] if attempt < 7 else OVERPASS[attempt - 6] if attempt - 6 < len(OVERPASS) else OVERPASS[0]
        try:
            req = urllib.request.Request(url, data=data, headers={"User-Agent": UA})
            with urllib.request.urlopen(req, timeout=120) as r:
                return json.loads(r.read())["elements"]
        except Exception:
            time.sleep(min(20, 3 * (attempt + 1)))
    raise RuntimeError("Overpass unavailable")


def km(lon1, lat1, lon2, lat2) -> float:
    import math
    p = math.pi / 180
    a = (math.sin((lat2 - lat1) * p / 2) ** 2
         + math.cos(lat1 * p) * math.cos(lat2 * p) * math.sin((lon2 - lon1) * p / 2) ** 2)
    return 2 * 6371 * math.asin(math.sqrt(a))


def cmd_surroundings(args) -> None:
    locations = load("locations.json")
    path = DATA_DIR / "surroundings.json"
    out = json.loads(path.read_text(encoding="utf-8")) if path.exists() else {}
    for name, loc in locations.items():
        if loc.get("benchmark") or (name in out and not args.all):
            continue
        lon, lat = loc["lonlat"]
        cands = {k: [] for k in POI}
        elements = []
        for step in (0, 1):
            todo = [k for k in POI if not cands[k]]
            if not todo:
                break
            q = "[out:json][timeout:90];(" + "".join(
                f'{POI[k][0]}(around:{POI[k][1][step]},{lat},{lon});' for k in todo) + ");out center tags;"
            elements = overpass(q)
            for e in elements:
                t = e.get("tags", {})
                c = e.get("center") or {"lon": e.get("lon"), "lat": e.get("lat")}
                if c["lon"] is None:
                    continue
                k = ("ic" if t.get("highway") == "motorway_junction" else
                     "conv" if t.get("shop") == "convenience" else
                     "super" if t.get("shop") == "supermarket" else
                     "bath" if t.get("amenity") == "public_bath" else "hosp")
                label = t.get("name") or t.get("brand") or ""
                if k == "ic" and not label:
                    continue
                if k not in todo or any(x["osm"] == f"{e['type']}/{e['id']}" for x in cands[k]):
                    continue
                cands[k].append({"name": label, "lon": c["lon"], "lat": c["lat"], "osm": f"{e['type']}/{e['id']}",
                                 "line": km(lon, lat, c["lon"], c["lat"]), "onsen": t.get("bath:type") == "onsen"})
        # the three nearest in a straight line per kind, then the shortest drive among them
        dest = []
        for k, lst in cands.items():
            for c in sorted(lst, key=lambda c: c["line"])[:3]:
                dest.append((k, c))
        res = {}
        if dest:
            coords = f"{lon},{lat};" + ";".join(f"{c['lon']},{c['lat']}" for _, c in dest)
            t = json.loads(get(f"https://router.project-osrm.org/table/v1/driving/{coords}?sources=0&annotations=duration,distance"))
            for i, (k, c) in enumerate(dest, 1):
                d, s = t["distances"][0][i], t["durations"][0][i]
                if d is None:
                    continue
                if k not in res or s < res[k]["min"] * 60:
                    res[k] = {"name": c["name"], "km": round(d / 1000, 1), "min": round(s / 60), "osm": c["osm"],
                              **({"onsen": True} if c["onsen"] else {})}
            for k in res:
                res[k]["min"] = round(res[k]["min"])
        out[name] = res
        print(f"ok {name}: " + " / ".join(f"{k} {v['name'] or '-'} {v['km']}km" for k, v in res.items()))
        save("surroundings.json", out)
        time.sleep(1.5)
    save("surroundings.json", out)


def main() -> None:
    parser = argparse.ArgumentParser(description=__doc__.split("\n\n")[1])
    sub = parser.add_subparsers(dest="cmd", required=True)
    sub.add_parser("images")
    g = sub.add_parser("geocode")
    g.add_argument("--md002", required=True, type=Path)
    r = sub.add_parser("routes")
    r.add_argument("--all", action="store_true")
    sub.add_parser("elevation")
    sub.add_parser("terrain")
    su = sub.add_parser("surroundings")
    su.add_argument("--all", action="store_true")
    args = parser.parse_args()
    {"images": cmd_images, "geocode": cmd_geocode, "routes": cmd_routes,
     "elevation": cmd_elevation, "terrain": cmd_terrain, "surroundings": cmd_surroundings}[args.cmd](args)


if __name__ == "__main__":
    main()
