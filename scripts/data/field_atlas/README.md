# Field Atlas Nocturne — design and rebuild notes

Field Atlas Nocturne is a single-page viewer for MD-002 Field Atlas. It has five editions that share this data folder: the dark Nocturne (below), the light Field Atlas Aubade (see [Field Atlas Aubade](#field-atlas-aubade)), and the three later skins [Cartograph, Contour and Gloaming](#field-atlas-cartograph-contour-and-gloaming). All five carry the same [Atlas tools](#atlas-tools). It shows a 3D map of Kanto centred on Koiwa. Selecting a field draws its road route from Koiwa, its photo, its 10-axis analysis and its early check-in record. This file records how the page is designed and built, so it can be regenerated or rebuilt later.

- Published at: https://claude.ai/artifact/HtkBNByrze3ttmUzEEEvDm
- Template: `scripts/templates/field_atlas_nocturne.html`
- Generator: `scripts/field_atlas_nocturne.py` (standard library only)
- Shared script: `scripts/templates/field_atlas_shared.js` (the part of the page script the Nocturne and Aubade have in common; see [Shared script](#shared-script))
- Data fetcher: `scripts/field_atlas_fetch.py` (network; Pillow for photos)
- Scores: always read from MD-002. These data files hold only geography and photos.

## What the page shows

Both editions show the same information. Each item comes from the source named here; nothing is typed into the templates.

| Item | Source |
|---|---|
| Rank, name, prefecture, travel time, visited status, Identity (tag and text), Atlas Resonance | MD-002 §Field Atlas Database |
| Ground surface icons (🪨 Gravel, ⛰️ Rock, 🌱 Grass, 🌲 Forest (林間, OP-010 Ver.3.1), 🟫 Soil, 🧱 Brick Chips), shown only where the Database row has them | MD-002 §Field Atlas Database, meaning from OP-010 Part C §Display Rules |
| 10-axis scores, lineage subtotals (Site, Infrastructure, Stay, Identity, Relation; /20 each), all-field averages | MD-002 §Sub-Score Table (grouping from OP-010 Part C §Evaluation Framework) |
| What each axis is scored from (fact, judgement, calculation, partner), Distance formula 12 − 2 × hours, early check-in tier points 10 / 8 / 6 / 2, Partner shown as provisional | OP-010 Part C and MD-002 §Calibration Record (the page carries these fixed texts) |
| Early check-in category, detail and source | MD-002 §Early Check-in Record |
| Next camp and camp records (date, status, configuration, weather, went well, issues) | DB-001 Project Ledger §Field Log (the Field name before its bracket must match MD-002) |
| View 10 benchmark site (浩庵キャンプ場: tag, text, note), shown as a separate marker, not ranked, no route | MD-002 §Reference Benchmark Site; position in `locations.json` |
| Ground, site area, parking and their sources | MD-002 §Site Record |
| Brand and product of the gear IDs named in a Field Log row (e.g. SHL-001 → The Arth 幕男) | MD-004 Equipment Registry |
| Elevation and the rough temperature difference from Koiwa (0.6 ℃ per 100 m of height difference) | `elevation.json` (GSI DEM) |
| Cold guide (COLD): the JMA normal (1991-2020) of the daily lowest temperature in the first dekad (上旬, 1st-10th) of the month of the planned camp (taken as the first half of the month), at the nearest AMeDAS station, and the same value moved by the height difference between the station and the field (0.6 ℃ per 100 m, a rough guide, labelled as such). Shown only for a field that has an entry in `climate.json` and a Planned camp; the Nocturne and Aubade also put it in the info bubble | `climate.json` (JMA 過去の気象データ 平年値; station height from the JMA 地域気象観測所一覧), field height from `elevation.json` |
| Sunrise, sunset and moon age (on the planned camp date, otherwise today in JST) | computed in the page (NOAA approximation, sea-level horizon; moon age at 21:00 JST) |
| Nearest expressway IC, convenience store, supermarket, bathhouse / onsen and hospital, with driving distance and time | `surroundings.json` (OpenStreetMap via Overpass; OSRM) |
| Position, road route, photo | this folder |

The index can be sorted by Resonance, Field 8 or travel time, and filtered by visited / unvisited and by one ground surface. Filtered-out pins leave the map (the selected and compared fields stay). The next camp gets a card at the top of the index, a NEXT tag, a ripple ring and a countdown label on the map (days counted in JST from the viewer's clock).

A field can be opened directly with `#f=<rank>` at the end of the page URL (rank = MD-002 Database order); the page updates the hash on every selection, and "リンクをコピー" on the Destination / TARGET card copies the published URL with it. Whether claude.ai passes the hash through to the page has not been checked.

Field Atlas Radar (`scripts/field_atlas_radar.py`, https://claude.ai/artifact/WjHqjyXoKLRxfTvxTsDaov) shows the same field information without the map and photos: it calls `field_atlas_nocturne.extras()`, which builds the Field Log, benchmark, Site Record, elevation, surroundings, gear names, cold guide and positions for all three pages (placeholder `/*__EXTRA__*/{}`).

When DB-001 §Field Log, MD-002 or MD-004 changes, rebuild and republish all six pages (Nocturne, Aubade, Cartograph, Contour, Gloaming, Radar).

`python3 scripts/field_atlas_check.py` checks MD-002, DB-001, MD-004, the data files (including that `terrain.json` is a whole grid) and all the generators against each other, and runs in CI (`.github/workflows/third-place-sync.yml`). Run it after renaming a field or editing the Field Log.

## Shared script

The Nocturne and Aubade templates repeated the same script (the three later skins take it too). What is identical now lives in `scripts/templates/field_atlas_shared.js`, and `field_atlas_nocturne.build()` inserts it at the `/*__SHARED_JS__*/` marker inside each template's `<script>` (so it runs in the page's own closure). It holds the ground / lineage / average tables, Field Log and next-camp lookups, Site Record, elevation, sunrise / sunset / moon, surroundings, cold guide, gear names, the `#f=<rank>` deep link and link copy, the info bubble (`bubbleHTML` / `showBubble` / `placeBubble`), `tapTo`, and the function declarations the two editions have word for word (index rows, sort, cards' helpers, camera framing, projection, picking, crosshair).

What stays in each template: CSS, staging and motion (boot, camera flight, effects), the dive / focus code that differs, the data constants (`ROUTES` is the same name in both) and `PAGE_URL`. When a change applies to both editions, make it in the shared file; when only one edition needs it, keep it in that template. `field_atlas_check.py` fails if a template does not have exactly one marker (it checks all five map templates). Field Atlas Radar is a separate light page and does not use the shared file.

## Rebuild

```
python3 scripts/field_atlas_nocturne.py \
    --md002 MD/MD-002_Field_Atlas_Landscape_Framework.md \
    --out field-atlas-nocturne.html
```

Publish `field-atlas-nocturne.html` to the Artifact URL above. From another chat, pass that URL so the same page is updated.

When MD-002 gains a field:

1. `python3 scripts/field_atlas_fetch.py geocode --md002 MD/MD-002_Field_Atlas_Landscape_Framework.md` places it at its municipality. For a more exact point, set `query` in `locations.json` to the street address, delete `lonlat`, and run it again.
2. `python3 scripts/field_atlas_fetch.py routes` adds its road route.
3. Add its photo source to `images.json` (`page` = the page shown as credit, `image` = the image file URL), then run `images` and commit `images/`.
4. `python3 scripts/field_atlas_fetch.py elevation` and `surroundings` add its elevation and surroundings.
5. Add its row to MD-002 §Site Record.
6. Run `python3 scripts/field_atlas_check.py`, then rebuild and republish all five map editions (Nocturne, Aubade, Cartograph, Contour, Gloaming).

The generator prints a warning for every field that lacks a location, route or photo. The page still builds; that field shows no line or "NO IMAGE".

## Data files

| File | Content | Source |
|---|---|---|
| `japan_prefectures.json` | 47 prefecture outlines, lon/lat. Simplified to 0.006° within about 3° of Koiwa and 0.02° elsewhere; small islands dropped. | [dataofjapan/land](https://github.com/dataofjapan/land) `japan.geojson` (based on 国土数値情報 行政区域データ) |
| `locations.json` | Position of each field, keyed by MD-002 field name. `source` is `address` (street address, GSI hit at lot level), `map` (the facility's own point on Yahoo!地図, used where GSI resolves the address only to its 大字) or `municipality` (municipal representative point). `query` is the address. The entry with `"benchmark": true` is MD-002's Reference Benchmark Site (浩庵キャンプ場, 山梨県南巨摩郡身延町中ノ倉2926 per kouan-motosuko.com; GSI gives only 中ノ倉, so the Yahoo!地図 point is used). It gets no route. | 国土地理院 住所検索 API (msearch.gsi.go.jp); Yahoo!地図 place pages for `map`. Addresses came from each field's official or booking site. |
| `routes.json` | Fastest driving route from Koiwa Station area: `path` (lon/lat), `km`, `via` (main roads in order of travel). | OSRM public server (router.project-osrm.org) on OpenStreetMap data © OpenStreetMap contributors, ODbL |
| `elevation.json` | Ground height (m) at each point in `locations.json`, plus `小岩（起点）`. `src` is the DEM used. | 国土地理院 標高API (cyberjapandata2.gsi.go.jp/general/dem) |
| `climate.json` | `stations`: per station, `prefecture`, `amedas_no`, `elev_m` (height of the station), `tmin_normal` (the normal of the daily lowest temperature in the first dekad 上旬, January to December, ℃), `period` and `sources` (page and checked date). `fields`: MD-002 field name → station, for the field of the next camp. Filled by hand (no fetch command). To add a field: open the JMA 過去の気象データ検索 → 平年値（旬ごとの値）of the nearest AMeDAS station, copy the 日最低気温 of 上旬 for 1月〜12月, take the station's 海面上の高さ from the 地域気象観測所一覧, and add the station and the field. A field without an entry shows no cold guide (the check prints a note when a planned camp has none). | 気象庁 過去の気象データ検索 [平年値（旬ごとの値）](https://www.data.jma.go.jp/stats/etrn/view/nml_amd_10d.php?prec_no=49&block_no=0438) and [地域気象観測所一覧](https://www.jma.go.jp/jma/kishou/know/amedas/ame_master.pdf) (令和8年3月24日現在). Now: 山中 (山梨県, 49256, 992 m) for moss camp field, checked 2026-10-02 |
| `terrain.json` | Ground-height grid of the whole map area (lon 136.5-142.0, lat 34.0-38.5): `step` 0.02° per cell (about 1.8 km), `nx` x `ny` cells, north to south, one byte each, base64 in `data`: 0 = sea / no data, otherwise `1 + height / unit_m` (`unit_m` = 20). Each cell is the mean of 9 samples of the GSI DEM tile, so peaks are flattened (Fuji's cell reads 3,300 m, not 3,776 m). The pages draw hill shading and contour lines (every 200 m, heavier every 1,000 m) from it; it is a map aid, not a surveyed height. Made by `field_atlas_fetch.py terrain` (needs Pillow and network). | 国土地理院 標高タイル（DEM PNG, `cyberjapandata.gsi.go.jp/xyz/dem_png`, zoom 8） |
| `surroundings.json` | Per field, for `ic`, `conv`, `super`, `bath`, `hosp`: `name`, driving `km` and `min`, `osm` id, `onsen` when tagged `bath:type=onsen`. Candidates are the three nearest by straight line within a small radius (widened once if none), and the one with the shortest drive is kept. Missing tags mean missing results, so treat it as a reference. | OpenStreetMap © OpenStreetMap contributors, ODbL, via Overpass API (maps.mail.ru mirror); OSRM table service |
| `images.json` | Photo source per field: `page` (credit link) and `image` (the file). Mostly each site's og:image; logos and flyers were swapped for a photo from the same site by hand. | Official sites and booking sites (nap-camp.com, hinata, etc.) |
| `images/` | Each field's photo, 600 px JPEG, named by a hash of the field name. Committed (MARI様のご判断, 2026-09-30) so the pages rebuild without network access. The photos belong to the sites credited in `images.json`. | Created by `fetch images` |

Names and positions corrected by hand (MD-002 Ver.4.3, 2026-09-30):

- オートキャンプFUJICHU: MD-002 listed 富士河口湖町; the field is at 富士吉田市新屋724番1 (nap-camp.com). MD-002 now lists 山梨県富士吉田市.
- 大原上布施オートキャンプ場 (formerly listed as 大原布施オートキャンプ場): いすみ市上布施593 (nap-camp.com). MD-002 now uses the official name.
- RECAMPおだわら (formerly listed as 小田原フォレストキャンプ場, a name no facility uses): 小田原市いこいの森, run by Recamp, 久野4294-1 (recamp.co.jp, nap-camp.com). Identified by MD-002's note on its 80 m² 林間オートサイト. MD-002 now uses the operator's heading, like RECAMP館山 and RECAMPしょうなん.

The data files are keyed by the MD-002 name, and each photo file is named by a hash of it. When a field is renamed in MD-002, rename its key in `locations.json`, `routes.json` and `images.json` and rename its file in `images/` (`git mv`), or the generator warns that the field has no location, route or photo.

On the same day the five fields that used their municipality point were moved to their facility (routes recomputed):

| Field | Address | Checked on | Point |
|---|---|---|---|
| RECAMP 富士スピードウェイ | 静岡県駿東郡小山町中日向694 富士スピードウェイ内 | recamp.co.jp (official) | GSI, lot 694 |
| ぼくらのミナノベース | 埼玉県秩父郡皆野町三沢540 | nap-camp.com | Yahoo!地図 place page (GSI gives only 三沢) |
| Hillbilly Camping | 茨城県東茨城郡茨城町中石崎178-1 | ibaraki-camp.jp (いばらきキャンプ) | Yahoo!地図 place page (GSI gives only 中石崎) |
| CREST northKaruizawa | 群馬県吾妻郡長野原町応桑1544-139 | campcrest.jp (official) | GSI, lot 1544 |
| 富士高原トマトフィールド | 静岡県富士宮市人穴756-2 | camp-spot.hinata.me | GSI, lot 756 |

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
- Left: FIELD INDEX (NEXT CAMP card with a T− countdown and a sweeping amber scan line; sort RESONANCE / FIELD 8 / TRAVEL; filter ALL / 訪問済 / 未訪問 and ground icons; rows with rank, name, score, mini bar, early check-in dot, hours, ground icons, NEXT tag, VS button). Right: ANALYSIS (Resonance / Field 8 / Distance with AVG or the Distance formula underneath, radar with rotating sweep, segmented axis bars grouped by lineage with subtotals and an average tick, Partner dimmed as provisional, early check-in LEDs with the four-tier scale, FIELD LOG from DB-001 with gear names from MD-004, SITE (ground, area, parking, elevation and temperature difference), SKY (sunrise, sunset, moon age), COLD (the JMA normal of the lowest temperature for the planned camp's month, and the same moved by the height difference; only for a field in `climate.json` with a Planned camp), SURROUNDINGS (IC, convenience store, supermarket, onsen, hospital with km and minutes), compare select, axis definitions table, method notes). Bottom: TARGET and VS cards (photo with ground in the photo HUD, tag, name, TRAVEL / ROAD / DIRECT / BRG, VIA, description, NEXT CAMP line, credit, リンクをコピー). The photo HUD shows coordinates and elevation.
- Map legend (top left of the free area): visited, unvisited, next camp (amber), benchmark (a small dim lilac wireframe on a short stem, quieter than the next camp), distance rings. The benchmark label is a small "◇ VIEW 10" tag: the name shows on hover, the MD-002 text opens on click.
- Map furniture: extruded prefectures (field prefectures brighter), 0.5° graticule labelled on whole degrees, 50/100/150/200 km rings around Koiwa, all 52 routes drawn faintly as a road network, light pillars for fields (height from Atlas Resonance; unvisited = wireframe head, dim flicker).
- Below 900 px the instruments stack under the map in the order: cards, analysis, index.

### Motion

1. Boot: a mono log types MD-002 version, field count, axes, geodata, imagery, field log, benchmark and home coordinates. Click skips it.
2. Map print: a scan bar sweeps north to south and reveals each prefecture as it passes. Then the pillars rise in rank order and the camera eases into the Kanto oblique view: Niigata, Nagano and Shizuoka on the left and bottom, Fukushima down to Chiba on the top and right.
3. Lock-on: corner brackets shrink and rotate onto the target, "LOCK" blinks, and crosshair lines with lat/lon tags follow the target.
4. Selecting a field (dive). Five flights, chosen at random and never the same one twice in a row (`FLIGHTS` in the template; `dive(slot, kind)` forces one): `warp` (below), `spiral` (climb while turning, corkscrew down), `road` (the road is drawn first under a wide view, then the camera drops in), `crane` (start low over Koiwa looking down the road, rise and sweep, drop in), `jump` (a quick jump with a large field-of-view kick). All end on the same pull-out that frames Koiwa and the whole road. The `warp` flight:
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

- Picking a pin is done in screen space (`pickAll` / `pick` / `pickTap` in `field_atlas_shared.js`): the pin whose head or stem is nearest the pointer within 22 px (34 px for a finger) wins, a tie within 3 px goes to the pin nearer the camera. The earlier invisible hit columns were taller than the pins and covered the pins behind them, so a neighbour in front kept winning. Heads that sit within a few pixels of each other in the Kanto view cannot be told apart by position: tapping the same spot again (within 3 s, 6 px) moves on to the next pin under it. Zooming in separates them.
- Mouse: drag = pan (the point under the cursor stays under it), right-drag or Shift+drag = rotate, wheel = zoom toward the cursor, click a pillar = select, ← → = next or previous field.
- Touch (Touch Events, with browser zoom blocked on the map): one finger = pan, two fingers = pinch zoom around their midpoint and twist to rotate, tap = select.
- Zoom buttons + / − / KANTO (KANTO returns to the oblique Kanto view).
- The last selection, comparison, sort order and filters are kept in the viewer's browser (`localStorage` key `fa-nav1`).

## Field Atlas Aubade

Field Atlas Aubade is the light edition. It shows the same data with the same map, routes, analysis and interaction, restyled after the light theme of the Claude app: ivory paper, ink-black type, a clay accent, and a porcelain relief map in afternoon light. Its effects are as showy as the Nocturne's, but softer.

- Published at: https://claude.ai/artifact/GmW1EhhdcDLNaG7GcuMAZH
- Template: `scripts/templates/field_atlas_aubade.html`
- Generator: `scripts/field_atlas_aubade.py` (calls `field_atlas_nocturne.build()` with the Aubade template, so the data files and placeholders are shared)

```
python3 scripts/field_atlas_aubade.py \
    --md002 MD/MD-002_Field_Atlas_Landscape_Framework.md \
    --out field-atlas-aubade.html
```

Publish `field-atlas-aubade.html` to the Artifact URL above. The template keeps the Nocturne's placeholders (`/*__DATA__*/[]`, `/*__JAPAN__*/[]`, `/*__GEO__*/{}`, `/*__LL__*/{}`, `/*__IMG__*/{}`, `/*__IMGSRC__*/{}`, `/*__ROUTES__*/{}`, `/*__EXTRA__*/{}` (Field Log per rank, benchmark site, Site Record, elevation, surroundings, gear names), `__MD002_VERSION__`, `__GENERATED__`). Change one of them in both templates at once.

### Tokens

One light theme on purpose (`color-scheme: light`).

| Token | Value | Use |
|---|---|---|
| `--paper` / `--paper2` | `#FAF9F5` / `#F3F1EA` | page / map ground and segmented controls |
| `--sheet` | white at 82 %, 16 px backdrop blur | floating panels (radius 18 px, soft shadow) |
| `--ink` / `--ink-2` / `--ink-soft` / `--ink-faint` | `#141413` / `#3D3D3A` / `#73726C` / `#A6A399` | text, from headings to captions |
| `--a` / `--a-deep` | `#D97757` / `#B5532F` | selected field (Destination), route A, primary accent |
| `--b` / `--b-soft` | `#4F82B5` / `#6A9BCC` | comparison field (Compare), route B |
| `--ok` / `--neutral` / `--warn` / `--alert` | `#6B8E4E` / `#8E8B80` / `#C8952C` / `#BF4D43` | early check-in 早い / 可 / 条件付き / 不可 (pills) |

Fonts (Google Fonts): Newsreader (display serif, italics for labels and small headings, large numbers), Zen Old Mincho (field names), Hanken Grotesk (uppercase UI labels), Zen Kaku Gothic New (Japanese body text).

3D colours: sea `#E7EAE8`, land top `#FBFAF6` (field prefectures `#FFF3EA`), land sides `#DCCDB6`, outlines `#B9B3A4` (field prefectures clay), fog and clear colour `#F1EEE6`, hemisphere light plus a warm key light from the north-west and a cool fill. Visited fields are clay pillars with a glossy sphere head; unvisited fields are grey with a wireframe head.

### Layout

Same frame and content as the Nocturne: header bar (logo, Oblique / Top view, cursor, view altitude, field count, JST clock), Field Index on the left (Next camp card with a days-to-go figure and a light sheen, sort Resonance / Field 8 / 近い順, filter 全件 / 訪問済 / 未訪問 and ground icons), Analysis on the right (lineage headings in italic serif with /20 subtotals, average ticks, Partner bar hatched as provisional, early check-in tier scale, Field Log, then SITE / SKY / COLD / SURROUNDINGS, axis definitions), Destination and Compare cards docked at the bottom. Cards show TRAVEL / ROAD / DIRECT / BRG and a VIA line of main roads. A small hint pill under the header lists the gestures; the legend sits below it on the left and the + / − / Kanto zoom buttons on the right. The next camp has a clay pill label and a slow clay ripple; the benchmark is a small matte sand-coloured gem on a short stem, kept quieter than the next camp; its label is a small "◇ View 10" tag that shows the name on hover and opens to its MD-002 text on tap. Below 900 px the sheets stack under the map (cards, analysis, index).

### Motion

1. Intro veil: a clay sunburst draws its 24 rays and turns, "Field Atlas *Aubade*" rises letter by letter out of a blur, the source lines (MD-002 version, fields, axes, geodata, roads, imagery, field log, benchmark, home) appear one by one, then the veil lifts like a curtain. Click skips it.
2. Map print: a soft band of warm light sweeps north to south and lays each prefecture down. Pillars rise in rank order. Clay pollen drifts through the air above the map (fades in top view). A warm spotlight follows the pointer.
3. Reticle: a dotted ring turns while a sunburst blooms from a spin, two ripples ping outward and an italic "Destination" / "Compare" tag fades up. Dotted clay crosshairs with lat/lon tags follow the destination.
4. Selecting a field. Four flights, chosen at random and never the same one twice in a row (`CHASES` in the template; `focus(kind)` forces one): `chase` (below), `overview` (a wide tilted view of the whole road, drifting in, then a swing down onto the field), `rail` (low behind the head of the road, looking where it points, then a climb up and around the field), `orbit` (circle the middle of the road while it is drawn, then spiral in). The `chase` flight:
   - the camera rises over Koiwa, turned partway toward the direction of travel (900 ms);
   - it follows the head of the road as the route draws, descending from high to low (1.9–3.9 s, longer for longer routes), with radial clay speed lines around the frame;
   - on arrival: a white-to-clay bloom of light, a slight thud of the map, a burst ring and the reticle lock;
   - it swoops down and orbits onto the field (2.4 s). "Oblique" returns to Kanto; "Top view" flattens the map and frames Koiwa, the destination and the comparison.
   - Choosing a comparison frames home, destination and comparison in relief.
5. Photo: develops from a sepia blur through an expanding circle, a light sheen crosses it, then it zooms slowly (Ken Burns).
6. Description: characters settle one by one from a warm blur into ink. Card sheets rise in on each selection. Radar and bars grow axis by axis and the numbers count up with them.
7. `prefers-reduced-motion` turns off the intro, the chase and all loops.

### Interaction

- Mouse (Pointer Events): drag = pan (the point under the cursor stays under it), right-drag or Shift / Alt + drag = rotate and tilt, wheel = zoom toward the cursor, click a pillar = select, ← → = next or previous field.
- Touch: one finger = pan, two fingers = pinch zoom around their midpoint and twist to rotate, tap = select. The map has `touch-action: none`, so on phones the page scrolls from the sheets, not the map.
- Zoom buttons + / − / Kanto.
- When a selection flight lands, an info bubble opens on the destination pin (both editions): photo, rank and score, name, tag, next camp, travel and road, ground, early check-in, site area, elevation and temperature difference, nearest onsen. It follows the pin, sits above it, below it or beside it inside the uncovered part of the map, hides the TARGET label while open, and closes with ×, Esc or a new selection. Aubade: a white sheet that pops up with a clay top edge and a folded tail. Nocturne: a HUD panel revealed in steps with a scan line and a glowing leader line.
- Tapping or clicking the NEXT CAMP label on the map, or the legend's 次のキャンプ line, selects that field and replays the flight if it is already selected. The label reacts on pointer-up (iOS may not turn a tap on an overlay into a click) and has a hit area 12 px larger than it looks (both editions).
- On phones the analysis panel, the index list and the card text move only up and down (`touch-action: pan-y`, no sideways overflow), in both editions.
- The last selection, comparison, sort order and filters are kept in the viewer's browser (`localStorage` key `fa-nav1`).

## Atlas tools

The tools live in `scripts/templates/field_atlas_shared.js` (section "Atlas tools"), so every map edition has them. A template only supplies colours: CSS variables `--fa-*` (the tools panel and the sections it adds), `Object.assign(FA.theme, {...})` (3D overlays, and how far light and sky follow the time and season) and three one-line hooks (`faStart()` after `initGL()`, `faRefresh()` at the end of `startRadar()`, `faFrame(now, lift)` at the end of `frame()`). Nothing is typed in: each tool computes from data already on the page, and nothing is fetched at run time.

| Tool | Where | What it does and where it comes from |
|---|---|---|
| Time of day and season | the ◐ button under the + / − / Kanto buttons opens the Atlas tools panel (on phones the panel sits under the map, always open) | Two sliders (time of day in 15-minute steps, month) and quick buttons. The sun's height and direction at Koiwa for the 15th of the chosen month come from the NOAA equations below; they set the colour of the sky, fog and sea, the light's direction, colour and strength, a screen tint at dawn and dusk, and the tint of the ground by month (snow-grey, young green, deep green, russet and so on; `SEAS_C`). It is purely visual. It is not weather and not the real colour of any place. "標準に戻す" returns to the edition's own look, which is the default; the choice is kept in this browser (`localStorage` key `fa-tools1`) |
| 今日の一手 | top of the Analysis panel | One field by fixed rules, first match wins: (1) the DB-001 Field Log has a Planned camp within 14 days: that field; (2) among fields not visited in MD-002 and not on the viewer's trail, with a travel time of 2 hours or less (Distance axis 8 or more) and early check-in 早い or 可: the highest Resonance (ties: shorter travel, then rank); (3) the same without the travel and early check-in conditions; (4) the highest Resonance not on the trail. The one-line reason is built from those fields, plus today's sunset at the field (computed). It uses only MD-002 scores, early check-in, DB-001 and positions. Season fit and weather are not in the data, so they are not used. Unvisited scores are the provisional research values, and the reason says so |
| Visited trail (足跡) | Analysis panel, "TRAIL" | The viewer presses "この場所を訪問済みにする" for the selected field. The marks are kept in this browser only (`localStorage` key `fa-trail1`, written inside try/catch; the page works without it), drawn on the map as a line through the marked fields in the order they were marked, with numbers, and listed with the straight-line length of each leg. It is a personal memo, separate from MD-002's visited status, and no visit is invented. "1つ戻す" and "全部消す" edit the list |
| Terrain | Atlas tools panel: 等高線 (contour lines) and 陰影 (hill shading) | Drawn from `terrain.json` (above) on the map surface. Contour lines every 200 m (marching squares on the grid); shading is a standard hillshade (light from the north-west at 45°, relief exaggerated 5 times). Each skin sets the colours; Cartograph and Contour turn both on by default |
| Sun band | Analysis panel, "SUN BAND" | Sunrise, sunset, solar noon and height, day length and civil twilight for the selected field (and the comparison field) on a chosen date (default: the planned camp's date, otherwise today in JST), drawn as a 24-hour bar. Computed from latitude, longitude and date with the NOAA Solar Calculator equations (J. Meeus, Astronomical Algorithms; NOAA GML, gml.noaa.gov/grad/solcalc/calcdetails.html; solar zenith 90.833° for sunrise and sunset, 96° for civil twilight). Checked against an independent implementation (the `astral` library) for five places and dates: within one minute. Sea-level horizon; mountains and weather are not considered |
| Route comparison | Analysis panel, "ROUTE" | With a destination and a comparison field selected: the great-circle (haversine, R = 6,371 km) distance A to B, the initial bearing both ways, and Koiwa to each. Labelled STRAIGHT-LINE on the panel and on the dashed line drawn between the two fields. It never shows a road distance or a drive time between A and B (OSRM routes exist only from Koiwa, and the ROAD and TRAVEL figures on the cards are those) |

Weather is not shown anywhere: a static page cannot fetch a forecast without faking one. The only climate figures are the existing JMA normals for the next camp (the COLD section).

Rebuild the terrain grid with `python3 scripts/field_atlas_fetch.py terrain` (about 15 tiles).

## Field Atlas Cartograph, Contour and Gloaming

Three skins of the same page, each with its own template and generator (`field_atlas_cartograph.py`, `field_atlas_contour.py`, `field_atlas_gloaming.py`; each calls `field_atlas_nocturne.build()` like the Aubade). They share the Aubade's layout, content, interaction and camera engine, so a change to behaviour belongs in the shared script. What differs is the look. Each has all nine selection flights: the Aubade's four (`chase`, `overview`, `rail`, `orbit`) and five written for the same engine after the Nocturne's (`warp`, `spiral`, `road`, `crane`, `jump`; the Nocturne has its own five, the Aubade its four). Chosen at random, never the same twice in a row; `focus(kind)` forces one.

Each template keeps its colours as CSS variables in `:root` (the Aubade's rules, with every hard-coded colour turned into a token) and as the `TH` constant in the script (3D colours); the rest of its look is the block of rules at the end of its `<style>`.

| Edition | Published at | Look | Fonts (Google Fonts) | 3D ground and sky |
|---|---|---|---|---|
| Cartograph | https://claude.ai/artifact/AARvJwMoR9oPvzhDHcEMcE | Aged paper and sepia ink; a ruled neatline round the map, double-ruled cartouches, small-caps headings, compass-rose logo, sepia photos; brick-red accent `#9B3B22`, Prussian blue `#2F5D73` for the comparison | IM Fell English, IM Fell English SC, Shippori Mincho B1 | parchment sea, cream land, sepia outlines; hypsometric tint, contour lines and shading on by default |
| Contour | https://claude.ai/artifact/8dDcGc8bXqHsxNYSPFvPFu | A monochrome survey sheet; graphite ground and white lines, square flat instruments, mono data, fine grid overlay, greyscale photos; white is the only accent | Barlow Condensed, JetBrains Mono, IBM Plex Sans JP | near-black sea, charcoal land, white contour lines and relief on by default |
| Gloaming | https://claude.ai/artifact/MT32pmYNSv4DoAgKDf8LBG | Dusk over the Kanto plain; a violet-to-ember sky gradient, frosted violet glass, neon pink `#FF4FA3` (destination) and teal `#22E4D2` (comparison), additive glow | Syne, Outfit, M PLUS Rounded 1c | violet land and sea under a dusk-coloured fog, glowing pins and roads |

The generated pages name the edition in the title bar as "Field Atlas Cartograph" (and likewise).

```
python3 scripts/field_atlas_cartograph.py --md002 MD/MD-002_Field_Atlas_Landscape_Framework.md --out field-atlas-cartograph.html
python3 scripts/field_atlas_contour.py    --md002 MD/MD-002_Field_Atlas_Landscape_Framework.md --out field-atlas-contour.html
python3 scripts/field_atlas_gloaming.py   --md002 MD/MD-002_Field_Atlas_Landscape_Framework.md --out field-atlas-gloaming.html
```

Each template carries `const PAGE_URL` (used by "リンクをコピー") set to the edition's artifact URL.
