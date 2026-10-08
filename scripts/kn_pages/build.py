#!/usr/bin/env python3
"""Assemble a KN page: original markup/CSS/JS + extra markup + 5 skins + photo variables + skin switcher.

usage: build.py <page> [--out FILE]
"""
import re, json, base64, sys, os, importlib, html as H
HERE = os.path.dirname(os.path.abspath(__file__))
sys.path.insert(0, HERE)

SKIN_JS = r"""
(function(){
  var root=document.documentElement, bar=document.querySelector('.skinbar'); if(!bar) return;
  var ids=[].map.call(bar.querySelectorAll('button[data-skin]'),function(b){return b.dataset.skin;});
  function paint(){ window.dispatchEvent(new Event('resize')); }
  function set(id,persist){
    if(ids.indexOf(id)<0) id=ids[0];
    root.setAttribute('data-skin',id);
    [].forEach.call(bar.querySelectorAll('button[data-skin]'),function(b){b.setAttribute('aria-pressed',b.dataset.skin===id?'true':'false');});
    var nm=bar.querySelector('.skinbar-name'); var cur=bar.querySelector('button[data-skin="'+id+'"]'); if(nm&&cur) nm.textContent=cur.getAttribute('data-name');
    if(persist){try{localStorage.setItem('kn-skin-'+root.dataset.page,id);}catch(e){}}
    setTimeout(paint,30);
  }
  var h=(location.hash||'').replace('#',''), start=null;
  if(ids.indexOf(h)>=0) start=h;
  if(!start){try{start=localStorage.getItem('kn-skin-'+root.dataset.page);}catch(e){}}
  set(start||'s1',false);
  bar.addEventListener('click',function(e){var b=e.target.closest('button[data-skin]'); if(b) set(b.dataset.skin,true);});
  // title click: cycle to the next design (orig -> s1 -> ... -> s5 -> orig order = bar order)
  var T=document.querySelector('.masthead')||document.querySelector('h1.mast')||document.querySelector('.mast h1');
  function next(){var cur=root.getAttribute('data-skin'),i=ids.indexOf(cur); set(ids[(i+1)%ids.length],true);}
  if(T){
    T.setAttribute('role','button'); T.setAttribute('tabindex','0'); T.setAttribute('title','クリックでデザイン切替 / Click to switch design'); T.style.cursor='pointer';
    T.addEventListener('click',function(e){ if(e.target.closest('a')) return; next(); });
    T.addEventListener('keydown',function(e){ if(e.key==='Enter'||e.key===' '){e.preventDefault(); next();} });
  }
  document.addEventListener('keydown',function(e){
    if(e.target&&/INPUT|TEXTAREA|SELECT/.test(e.target.tagName)) return;
    var n=parseInt(e.key,10); if(n>=0&&n<=5&&!e.metaKey&&!e.ctrlKey&&!e.altKey){set(n===0?'orig':'s'+n,true);}
  });
})();
"""

SKINBAR_CSS = r"""
/* ---- skin switcher (neutral, identical in every skin) ---- */
.skinbar{position:fixed;left:50%;transform:translateX(-50%);bottom:calc(14px + env(safe-area-inset-bottom,0px));z-index:200;display:flex;align-items:center;gap:4px;max-width:calc(100vw - 24px);
  padding:6px 8px;border-radius:999px;background:rgba(18,18,20,.88);color:#f3f1ea;backdrop-filter:blur(10px);-webkit-backdrop-filter:blur(10px);box-shadow:0 8px 30px rgba(0,0,0,.35),0 0 0 1px rgba(255,255,255,.12) inset;font:500 11px/1 -apple-system,BlinkMacSystemFont,'Helvetica Neue',sans-serif}
.skinbar-l{padding:0 8px 0 6px;letter-spacing:.18em;opacity:.6;font-size:9.5px}
.skinbar button{appearance:none;border:0;background:transparent;color:inherit;font:inherit;padding:8px 11px;border-radius:999px;cursor:pointer;white-space:nowrap;min-width:34px}
.skinbar button[aria-pressed="true"]{background:#f3f1ea;color:#121214}
.skinbar button:focus-visible{outline:2px solid #fff;outline-offset:1px}
.skinbar-name{padding:0 10px 0 8px;opacity:.85;white-space:nowrap;max-width:15em;overflow:hidden;text-overflow:ellipsis}
.x-spacer{height:84px}
@media (max-width:640px){.skinbar-l,.skinbar-name{display:none}.skinbar button{padding:9px 10px}}
html[data-skin="orig"] .x-new{display:none !important}
html:not([data-skin="orig"]) .theme-btn{display:none !important}
.im{display:block;background-size:cover;background-position:50% 50%;background-repeat:no-repeat}
.gfx{position:relative;pointer-events:none}
.gfx>svg{display:none;width:100%;height:100%;overflow:visible}
"""


def gfx_show_css(page_skins):
    return ''.join(f'html[data-skin="{s}"] .gfx>svg.{s}{{display:block}}\n' for s in page_skins)


def convert_css(css: str) -> str:
    """Old stylesheet -> works with span.im photos."""
    def fix(m):
        sel = m.group(1)
        sel2 = re.sub(r'(?<![\w.#-])img(?![\w-])', '.im', sel)
        return sel2 + '{'
    css = re.sub(r'([^{}@]+?)\{', lambda m: fix(m) if not m.group(1).strip().startswith('@') else m.group(0), css)
    return css


def b64(path):
    if not os.path.exists(path):
        print('WARN missing photo', path)
        import io
        from PIL import Image
        buf=io.BytesIO(); Image.new('RGB',(8,8),(120,120,120)).save(buf,'JPEG'); return 'data:image/jpeg;base64,'+base64.b64encode(buf.getvalue()).decode()
    return 'data:image/jpeg;base64,' + base64.b64encode(open(path, 'rb').read()).decode()


def slot(name, svgs, extra_cls=''):
    """svgs: {skin_id: svg_string}; each svg gets the skin class."""
    inner = ''
    for sk, svg in svgs.items():
        inner += svg.replace('<svg class="', f'<svg class="{sk} ', 1) if '<svg class="' in svg else svg
    return f'<div class="gfx gfx-{name} x-new {extra_cls}" aria-hidden="true">{inner}</div>'


def photo_fig(key, caption, cls='', pos='50% 50%', alt=''):
    return (f'<figure class="x-ph {cls}"><span class="im" role="img" aria-label="{H.escape(alt or caption)}" data-img="{key}" style="background-position:{pos}"></span>'
            f'<figcaption><span>{caption}</span></figcaption></figure>')


def main(page, out=None):
    cfg = importlib.import_module('pages.' + page)
    old_body = open(f'{HERE}/old/{page}.body.html', encoding='utf8').read()
    old_css = open(f'{HERE}/old/{page}.css', encoding='utf8').read()
    old_js = open(f'{HERE}/old/{page}.js', encoding='utf8').read()
    old_imgs = json.load(open(f'{HERE}/old/{page}.imgs.json'))
    old_fonts = open(f'{HERE}/old/{page}.fonts').read()
    photos_meta = json.load(open(f'{HERE}/photos.json'))

    body = old_body
    for mode, anchor, frag in cfg.INSERTS:
        i = body.find(anchor)
        if i < 0:
            print('WARN anchor not found:', anchor[:50]); continue
        if mode == 'after':
            i += len(anchor)
        body = body[:i] + frag + body[i:]
    for a, b in getattr(cfg, 'REPLACES', []):
        if a not in body: print('WARN replace not found:', a[:50])
        body = body.replace(a, b, 1)

    # photo variables
    keys = sorted(set(re.findall(r'data-img="([^"]+)"', body)))
    var_css = ':root{' + ''.join(
        f'--im-{k}:url("{old_imgs[k] if k in old_imgs else b64(f"{HERE}/photos/{k}.jpg")}");' for k in keys) + '}\n'
    var_css += ''.join(f'.im[data-img="{k}"]{{background-image:var(--im-{k})}}\n' for k in keys)

    fams = old_fonts.split('?', 1)[1].split('&')
    fams = [f for f in fams if f.startswith('family=')]
    for f in cfg.FONTS:
        if not any(f.split(':')[0] == g.split(':')[0] for g in fams): fams.append(f)
    fonts_url = 'https://fonts.googleapis.com/css2?' + '&'.join(fams) + '&display=swap'

    skins = [('orig', cfg.ORIG_NAME, 'Original')] + cfg.SKINS
    bar = ('<nav class="skinbar" aria-label="デザインを切り替える"><span class="skinbar-l">DESIGN</span>' +
           ''.join(f'<button type="button" data-skin="{sid}" data-name="{H.escape(jp)} · {H.escape(en)}" aria-pressed="false" title="{H.escape(jp)}">{"Original" if sid=="orig" else sid[1:]}</button>' for sid, jp, en in skins) +
           '<span class="skinbar-name"></span></nav><div class="x-spacer x-new" aria-hidden="true"></div>')

    css = var_css + convert_css(old_css) + '\n' + SKINBAR_CSS + gfx_show_css([s[0] for s in skins]) + cfg.SKIN_CSS
    page_html = f'''<meta charset="utf-8"><title>{cfg.TITLE}</title>
<link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link rel="stylesheet" href="{fonts_url}">
<style>
{css}
</style>
<script>document.documentElement.setAttribute('data-page','{page}');document.documentElement.setAttribute('data-skin','s1');</script>
{body}
{bar}
<script>
{old_js}
{getattr(cfg,'EXTRA_JS','')}
{SKIN_JS}
</script>
'''
    out = out or f'{HERE}/out/{page}.html'
    os.makedirs(os.path.dirname(out), exist_ok=True)
    open(out, 'w', encoding='utf8').write(page_html)
    print(page, len(page_html) // 1024, 'KB', 'photos', len(keys), 'fonts_url', len(fonts_url))
    return out


if __name__ == '__main__':
    main(sys.argv[1], sys.argv[3] if len(sys.argv) > 3 else None)
