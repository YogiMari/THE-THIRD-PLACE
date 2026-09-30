# Field Atlas Navigator — design and rebuild notes

Field Atlas Navigator is a single-page viewer for MD-002 Field Atlas. It shows a 3D map of Kanto centred on Koiwa. Selecting a field draws its road route from Koiwa, its photo, its 10-axis analysis and its early check-in record. This file records how the page is designed and built, so it can be regenerated or rebuilt later.

- Published at: https://claude.ai/artifact/HtkBNByrze3ttmUzEEEvDm
- Template: `scripts/templates/field_atlas_navigator.html`
- Generator: `scripts/field_atlas_navigator.py` (standard library only)
- Data fetcher: `scripts/field_atlas_navigator_fetch.py` (network; Pillow for photos)
- Scores: always read from MD-002. These data files hold only geography and photo sources.

## Rebuild

```
python3 scripts/field_atlas_navigator_fetch.py images        # photos → images/ (not committed)
python3 scripts/field_atlas_navigator.py \
    --md002 MD/MD-002_Field_Atlas_Landscape_Framework.md \
    --out field-atlas-navigator.html
```

Publish `field-atlas-navigator.html` to the Artifact URL above. From another chat, pass that URL so the same page is updated.

When MD-002 gains a field:

1. `python3 scripts/field_atlas_navigator_fetch.py geocode --md002 MD/MD-002_Field_Atlas_Landscape_Framework.md` places it at its municipality. For a more exact point, set `query` in `locations.json` to the street address, delete `lonlat`, and run it again.
2. `python3 scripts/field_atlas_navigator_fetch.py routes` adds its road route.
3. Add its photo source to `images.json` (`page` = the page shown as credit, `image` = the image file URL), then run `images`.

The generator prints a warning for every field that lacks a location, route or photo. The page still builds; that field shows no line or "NO IMAGE".

## Data files

| File | Content | Source |
|---|---|---|
| `japan_prefectures.json` | 47 prefecture outlines, lon/lat. Simplified to 0.006° within about 3° of Koiwa and 0.02° elsewhere; small islands dropped. | [dataofjapan/land](https://github.com/dataofjapan/land) `japan.geojson` (based on 国土数値情報 行政区域データ) |
| `locations.json` | Position of each field, keyed by MD-002 field name. `source` is `address` (street address) or `municipality` (municipal representative point). | 国土地理院 住所検索 API (msearch.gsi.go.jp). Addresses came from each field's official or booking site. |
| `routes.json` | Fastest driving route from Koiwa Station area: `path` (lon/lat), `km`, `via` (main roads in order of travel). | OSRM public server (router.project-osrm.org) on OpenStreetMap data © OpenStreetMap contributors, ODbL |
| `images.json` | Photo source per field: `page` (credit link) and `image` (the file). Mostly each site's og:image; logos and flyers were swapped for a photo from the same site by hand. | Official sites and booking sites (nap-camp.com, hinata, etc.) |
| `images/` | Downloaded photos, 600 px JPEG. **Not committed**: the photos belong to the sites. | Created by `fetch images` |

Positions that were checked by hand and are worth re-checking:

- オートキャンプFUJICHU: the official site gives 富士吉田市新屋724-1. MD-002 lists 富士河口湖町. The map uses the official address.
- 大原布施オートキャンプ場: the search found 大原上布施オートキャンプ場 (いすみ市上布施). It was treated as the same field.
- 小田原フォレストキャンプ場: matched to 小田原市いこいの森 (RECAMPおだわら, 久野4294-1), because MD-002's note cites its 80 m² 林間オートサイト on nap-camp.
- Five fields use their municipality point: RECAMP 富士スピードウェイ, ぼくらのミナノベース, Hillbilly Camping, CREST northKaruizawa, 富士高原トマトフィールド.

## Design

The look is a cinematic tactical display, like the computer screens in a Hollywood science-fiction film. It uses one dark theme on purpose.

### Tokens

| Token | Value | Use |
|---|---|---|
| `--void` | `#010409` | page and map background |
| `--a` | `#3FF0FF` | selected field (TARGET), route A, primary accent |
| `--b` | `#FFA24A` | comparison field (VS), route B |
| `--ice` | `#D9FCFF` | headings, Koiwa marker |
| `--ok` / `--neutral` / `--warn` / `--alert` | `#6CFFB0` / `#9CC3CF` / `#FFD166` / `#FF4D5E` | early check-in 早い / 可 / 条件付き / 不可 |
| `--line` `--line2` `--line3` | cyan at 16 / 34 / 70 % | hairlines, rulers, corner brackets |

Fonts: Michroma (wide display labels), Saira Condensed 200–500 (large numbers), IBM Plex Mono (data and telemetry), Zen Kaku Gothic New (Japanese text).

### Layout

- Full-bleed WebGL map (three.js r128 from cdnjs). The panels float over it as thin-line instruments with corner brackets and tick rulers.
- Top strip: logo, OBLIQUE / TOP VIEW, telemetry (cursor lat/lon, view altitude, field count, JST clock).
- Left: FIELD INDEX (rank, name, score, mini bar, VS button). Right: ANALYSIS (Resonance / Field 8 / Distance, radar with rotating sweep, segmented axis bars, early check-in LEDs, compare select, method notes). Bottom: TARGET and VS cards (photo, tag, name, TRAVEL / ROAD / BRG, VIA, description, credit).
- Map furniture: extruded prefectures (field prefectures brighter), 0.5° graticule labelled on whole degrees, 50/100/150/200 km rings around Koiwa, all 49 routes drawn faintly as a road network, light pillars for fields (height from Atlas Resonance; unvisited = wireframe head, dim flicker).
- Below 900 px the instruments stack under the map in the order: cards, analysis, index.

### Motion

1. Boot: a mono log types MD-002 version, field count, axes, geodata, imagery and home coordinates. Click skips it.
2. Map print: a scan bar sweeps north to south and reveals each prefecture as it passes. Then the pillars rise in rank order and the camera eases into the Kanto oblique view: Niigata, Nagano and Shizuoka on the left and bottom, Fukushima down to Chiba on the top and right.
3. Lock-on: corner brackets shrink and rotate onto the target, "LOCK" blinks, and crosshair lines with lat/lon tags follow the target.
4. Selecting a field (dive):
   - the camera pulls back (360 ms);
   - it warp-dives onto the target with a field-of-view kick and radial streaks (1150 ms, expo in-out);
   - on impact: flash, screen shake, three shock rings, and a "TARGET ACQUIRED" title card (the VS field shows "COMPARISON LOCKED");
   - it glides low past the pillar (900 ms);
   - it pulls out to a top view framing Koiwa and the whole road route, while the map flattens and the route draws from Koiwa;
   - on arrival a burst ring plays, then light pulses keep running along the road.
5. Photo acquisition: mosaic steps (3 → 72 px blocks), a scan line, then an RGB-split glitch into the sharp image.
6. Description: glyph scramble that resolves left to right. Metric digits spin for 380 ms, then the radar and bars grow axis by axis from 0.
7. `prefers-reduced-motion` turns off the boot, the dive and all loops. Everything appears at rest.

### Interaction

- Mouse: drag = pan (the point under the cursor stays under it), right-drag or Shift+drag = rotate, wheel = zoom toward the cursor, click a pillar = select, ← → = next or previous field.
- Touch (Touch Events, with browser zoom blocked on the map): one finger = pan, two fingers = pinch zoom around their midpoint and twist to rotate, tap = select.
- Zoom buttons + / − / KANTO (KANTO returns to the oblique Kanto view).
- The last selection, comparison and sort order are kept in the viewer's browser (`localStorage` key `fa-nav1`).
