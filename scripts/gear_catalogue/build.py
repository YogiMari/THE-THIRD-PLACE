"""Build the gear catalogue page (a single HTML file) from the ledgers.

Run from the repository root:
    python3 scripts/gear_catalogue/build.py [--out DIR] [--img DIR] [--date "3 October 2026"]

1. parse_ledger.py   MD-004 + MD-003 (Status = Owned)  ->  <out>/owned.json
2. template.html + owned.json + photos.json + ledger versions  ->  <out>/index.html (publish) and <out>/preview.html (local viewing)
3. consistency check: every owned object has a photo entry and an image file in <img>

The page holds no data of its own; everything comes from the ledgers (SSOT) and photos.json
(image credits and crop positions). Images are not stored in the repository.
"""
import argparse, datetime, json, os, re, shutil, subprocess, sys

HERE = os.path.dirname(os.path.abspath(__file__))
ap = argparse.ArgumentParser()
ap.add_argument('--out', default='site')
ap.add_argument('--img', default=None, help='image directory (default: <out>/img)')
ap.add_argument('--date', default=None, help='label shown as "Registry as of"; default: today')
a = ap.parse_args()
out = a.out; img = a.img or os.path.join(out, 'img')
os.makedirs(out, exist_ok=True)

def version(path):
    m = re.search(r'^\*\*Version\*\*:\s*([\d.]+)', open(path, encoding='utf-8').read(), re.M)
    if not m: sys.exit(f'Version not found in {path}')
    return m.group(1)

owned_path = os.path.join(out, 'owned.json')
subprocess.run([sys.executable, os.path.join(HERE, 'parse_ledger.py'), owned_path], check=True)
owned = json.load(open(owned_path, encoding='utf-8'))
photos = json.load(open(os.path.join(HERE, 'photos.json'), encoding='utf-8'))

today = datetime.date.today()
meta = dict(date=a.date or f'{today.day} {today.strftime("%B %Y")}',
            md004=version('MD/MD-004_Equipment_Registry_Object_Reference.md'),
            md003=version('MD/MD-003_Galley_Fare.md'))

s = open(os.path.join(HERE, 'template.html'), encoding='utf-8').read()
for key, val in (('/*DATA*/[]', json.dumps(owned, ensure_ascii=False, separators=(',', ':'))),
                 ('/*PHOTOS*/{}', json.dumps(photos, ensure_ascii=False)),
                 ('/*META*/{}', json.dumps(meta, ensure_ascii=False))):
    assert key in s, f'placeholder {key} missing in template'
    s = s.replace(key, val)
html = os.path.join(out, 'index.html')          # the page as published (the Artifact service adds the document skeleton)
open(html, 'w', encoding='utf-8').write(s)
preview = os.path.join(out, 'preview.html')      # same page with doctype / charset / viewport, for local viewing only
open(preview, 'w', encoding='utf-8').write('<!doctype html><html lang="ja"><head><meta charset="utf-8">'
    '<meta name="viewport" content="width=device-width, initial-scale=1"></head><body>' + s + '</body></html>')

# consistency check
ids = [r['id'] for r in owned]
no_entry = [i for i in ids if i not in photos]
stale = [i for i in photos if i not in ids]
no_file = [i for i in ids if i in photos and not os.path.exists(os.path.join(img, os.path.basename(photos[i]['f'])))]
print(f"built {html} + preview.html  ({len(s)//1024} KB)  ledger MD-004 v{meta['md004']} / MD-003 v{meta['md003']}")
print(f"objects {len(ids)}  photo entries {len(photos)}  missing image files {len(no_file)}")
if no_entry: print('NEW objects without a photo entry (add to photos.json, add image):', ', '.join(no_entry))
if stale: print('photo entries for objects no longer Owned (remove from photos.json and the image folder):', ', '.join(stale))
if no_file: print('image file not found in', img, ':', ', '.join(no_file))
sys.exit(1 if (no_entry or stale or no_file) else 0)
