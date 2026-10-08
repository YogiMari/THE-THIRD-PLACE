#!/usr/bin/env python3
"""Restore the un-redesigned base of a KN page from its published Artifact.

OP-008 §28 keeps the text of KN-001〜004 out of the repository, so this folder
does not carry the pages' own markup, scripts or embedded photographs.  They
live only in the published Artifact.  This script takes the full HTML of that
Artifact (saved by the Artifact tool's `read`) and writes the pieces build.py
needs into  old/  and  photos/  — both are git-ignored working folders:

    old/<page>.body.html   the page markup with every  .x-new  element removed
    old/<page>.css         the original stylesheet (photo variables and the
                           skin switcher / skins stripped)
    old/<page>.js          the original script (EXTRA_JS and SKIN_JS stripped)
    old/<page>.fonts       the Google Fonts URL
    old/<page>.imgs.json   the original embedded photographs (data URIs)
    photos/<key>.jpg       the added photographs listed in photos.json

Usage:
    python3 scripts/kn_pages/restore_old.py <page> <artifact.html>
    python3 scripts/kn_pages/build.py <page>        # -> out/<page>.html

<page> is chronicle | pantheon | journey | discovery.
"""
import base64
import importlib
import json
import re
import sys
from pathlib import Path

HERE = Path(__file__).resolve().parent
sys.path.insert(0, str(HERE))

TAG = re.compile(r'<(/?)([A-Za-z][\w:-]*)((?:[^>"\']|"[^"]*"|\'[^\']*\')*?)(/?)>')
VOID = {'img', 'br', 'hr', 'meta', 'link', 'input', 'source', 'wbr', 'col', 'area', 'base', 'embed', 'track'}


def strip_x_new(html: str) -> str:
    """Remove every element whose class list contains x-new (balanced tags)."""
    out, pos, stack, skip_depth = [], 0, [], None
    for m in TAG.finditer(html):
        closing, name, attrs, selfclose = m.group(1) == '/', m.group(2).lower(), m.group(3), m.group(4) == '/'
        if not closing:
            cls = re.search(r'\bclass="([^"]*)"', attrs)
            is_new = bool(cls and 'x-new' in cls.group(1).split())
            if skip_depth is None and is_new:
                out.append(html[pos:m.start()])
                skip_depth = len(stack)
                if name in VOID or selfclose:
                    pos, skip_depth = m.end(), None
                    continue
                stack.append(name)
                pos = m.end()
                continue
            if name in VOID or selfclose:
                continue
            stack.append(name)
        else:
            if stack and stack[-1] == name:
                stack.pop()
            if skip_depth is not None and len(stack) == skip_depth:
                skip_depth = None
                pos = m.end()
    out.append(html[pos:])
    return ''.join(out)


def main(page: str, src: str):
    s = Path(src).read_text(encoding='utf8')
    cfg = importlib.import_module('pages.' + page)
    import build
    meta = json.load(open(HERE / 'photos.json'))

    start = s.index('fonts.googleapis.com/css2')
    fonts = re.search(r'<link rel="stylesheet" href="(https://fonts.googleapis.com[^"]+)"', s[start - 80:]).group(1)
    m = re.compile(r'<style>\n(.*?)\n</style>\n<script>document\.documentElement\.setAttribute\(\'data-page\'.*?</script>\n', re.S).search(s, start)
    css_all, body_start = m.group(1), m.end()
    body_end = s.index('\n<nav class="skinbar"', body_start)
    body = strip_x_new(s[body_start:body_end])
    # pantheon's gallery sits in a plain  .wrap  whose only child is x-new: drop the empty shell
    body = body.replace('<div class="wrap"></div><footer', '<footer')

    lines = css_all.split('\n')
    i = 0
    while i < len(lines) and (lines[i].startswith(':root{--im-') or lines[i].startswith('.im[data-img=')):
        i += 1
    var_block, rest = lines[0], '\n'.join(lines[i:])
    css = rest[:rest.index('\n\n/* ---- skin switcher')]

    imgs = dict(re.findall(r'--im-([\w-]+):url\("(data:image/[^"]+)"\)', var_block))
    old_imgs = {k: v for k, v in imgs.items() if k not in meta}
    (HERE / 'photos').mkdir(exist_ok=True)
    for k, v in imgs.items():
        if k in meta:
            (HERE / 'photos' / f'{k}.jpg').write_bytes(base64.b64decode(v.split(',', 1)[1]))

    # build.py writes  <script>{old_js}\n{EXTRA_JS}\n{SKIN_JS}\n</script>  (old_js starts with its own newline)
    script = re.findall(r'<script>(.*?)</script>', s[body_end:], re.S)[-1]
    js = script[1:script.rindex(cfg.EXTRA_JS) - 1]

    (HERE / 'old').mkdir(exist_ok=True)
    (HERE / 'old' / f'{page}.body.html').write_text(body, encoding='utf8')
    (HERE / 'old' / f'{page}.css').write_text(css, encoding='utf8')
    (HERE / 'old' / f'{page}.js').write_text(js, encoding='utf8')
    (HERE / 'old' / f'{page}.fonts').write_text(fonts, encoding='utf8')
    (HERE / 'old' / f'{page}.imgs.json').write_text(json.dumps(old_imgs), encoding='utf8')
    print(page, 'body', len(body), 'css', len(css), 'js', len(js), 'old photos', len(old_imgs),
          'added photos', sum(1 for k in imgs if k in meta))


if __name__ == '__main__':
    if len(sys.argv) != 3:
        sys.exit(__doc__)
    main(sys.argv[1], sys.argv[2])
