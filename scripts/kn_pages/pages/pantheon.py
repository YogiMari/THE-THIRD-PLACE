import os, json, html
import gfx
from build import slot, photo_fig
HERE = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))

TITLE = 'Cultural Pantheon'
ORIG_NAME = '原版 · クチュール'
SKINS = [('s1', '大理石の神殿', 'Marble Museum'), ('s2', '白い壁', 'White Cube'), ('s3', '工房', 'Workshop'), ('s4', '昭和ポスター', 'Shōwa Pop'), ('s5', '夜市のネオン', 'Neon Night')]
FONTS = ['family=Cinzel:wght@400;600;800', 'family=Zen+Old+Mincho:wght@400;700;900', 'family=Schibsted+Grotesk:wght@400;500;700;900', 'family=Noto+Sans+JP:wght@400;500;700;900',
         'family=Special+Elite', 'family=Alfa+Slab+One', 'family=Dela+Gothic+One', 'family=Zen+Maru+Gothic:wght@400;500;700;900', 'family=Zen+Dots', 'family=M+PLUS+1p:wght@400;500;700;900']

hero = slot('hero', {'s1': gfx.laurel('s1'), 's2': gfx.key('s2'), 's3': gfx.hammer('s3'), 's4': gfx.sunburst('s4'), 's5': gfx.lamp('s5')})
def div():
    return slot('div', {'s1': gfx.column('s1'), 's2': gfx.key('s2'), 's3': gfx.hammer('s3'), 's4': gfx.sunburst('s4', 16), 's5': gfx.lamp('s5')}, 'x-div')

strip = ('<div class="x-strip x-new">' +
         photo_fig('p_columns', 'Order — 柱', 'x-s1', '50% 50%', 'ゼウス神殿の列柱') +
         photo_fig('p_forge', 'Forge — 鍛える', 'x-s2', '50% 50%', '鍛冶場') +
         photo_fig('p_tools', 'Tools — 道具', 'x-s3', '50% 50%', '工房の壁に掛かる古い道具') + '</div>')
band = '<div class="x-new x-bandwrap">' + photo_fig('p_columns2', 'Colonnade — 親和性の柱廊', 'x-band', '50% 40%', 'ディディマ、アポロン神殿の列柱') + '</div>'
gallery = ('<section class="x-gallery x-new" id="plates"><div class="x-gh"><span class="lbl">Plates</span><h2>Plates <i>&amp;</i> Studies</h2></div><div class="x-gg">' +
           photo_fig('p_glass', 'Light, through glass — ステンドグラスの灯', 'g1', '50% 50%', 'ステンドグラスのランプ') +
           photo_fig('p_tokyo', 'Neon — 夜の街', 'g2', '50% 50%', '東京のネオン街') +
           photo_fig('p_chawan', 'Raku — 楽茶碗', 'g3', '50% 50%', '楽焼の茶碗') +
           photo_fig('p_washi', 'Washi — 和紙', 'g4', '50% 50%', '和紙') +
           photo_fig('p_tools', 'Tools — 壁の道具', 'g5', '50% 50%', '工房の道具') +
           photo_fig('p_columns', 'Order — 神殿の柱', 'g6', '50% 50%', '神殿の柱') +
           '</div><ul class="x-credits" id="xcred"></ul></section>')
CREDITS = {k: (n, k) for k, n in [('p_columns', 'Order'), ('p_columns2', 'Colonnade'), ('p_forge', 'Forge'), ('p_tools', 'Tools'), ('p_glass', 'Glass'), ('p_tokyo', 'Neon'), ('p_chawan', 'Raku'), ('p_washi', 'Washi')]}

INSERTS = [
    ('after', '</header>', hero + strip),
    ('before', '<section id="beginning"', ''),
    ('after', '</p>\n  </div>\n  <div class="temple">', ''),
    ('before', '<section id="creators"', div()),
    ('before', '<section id="community"', div()),
    ('before', '<section id="lineage"', div()),
    ('before', '<section id="inout"', div()),
    ('before', '<footer class="noir bleed"', '<div class="wrap">' + gallery + '</div>'),
]
REPLACES = [('<div class="temple">', band + '<div class="temple">')]

EXTRA_JS = r"""
(function(){
  var C=%s, ul=document.getElementById('xcred'); if(!ul) return;
  Object.keys(C).forEach(function(k){var c=C[k]; var li=document.createElement('li'); li.innerHTML='<span>'+c.n+'</span>“<a href="'+c.u+'" target="_blank" rel="noopener">'+c.t+'</a>” by '+c.a+' · '+c.l; ul.appendChild(li);});
})();
"""
def _credit_js():
    meta = json.load(open(f'{HERE}/photos.json')); d = {}
    for k, (n, _) in CREDITS.items():
        if k in meta:
            m = meta[k]; t = m['title'].replace('File:', '').rsplit('.', 1)[0]
            d[k] = dict(n=n, u=m['page'], t=html.escape(t[:70]), a=html.escape(m['artist'].strip()[:40]), l=m['lic'])
    return json.dumps(d, ensure_ascii=False)
EXTRA_JS = EXTRA_JS % _credit_js()
SKIN_CSS = ''
for _s in ('s1', 's2', 's3', 's4', 's5'):
    _p = f'{HERE}/skins/pantheon_{_s}.css'
    if os.path.exists(_p): SKIN_CSS += open(_p, encoding='utf8').read() + '\n'
