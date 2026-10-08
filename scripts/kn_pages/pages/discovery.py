import os, json, html
import gfx
from build import slot, photo_fig
HERE = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))

TITLE = 'Atelier Discovery'
ORIG_NAME = '原版 · ラボ速報'
SKINS = [('s1', 'コンソール', 'Console'), ('s2', 'サーモン紙の経済紙', 'Salmon Financial'), ('s3', '全地球カタログ', 'Whole Earth'), ('s4', '作戦ボード', 'Ops Board'), ('s5', 'やわらかノート', 'Soft Notes')]
FONTS = ['family=DotGothic16', 'family=IBM+Plex+Mono:wght@400;500;700', 'family=Playfair+Display:ital,wght@0,700;0,900;1,700', 'family=IBM+Plex+Sans+JP:wght@400;500;700',
         'family=Abril+Fatface', 'family=Zen+Maru+Gothic:wght@400;500;700;900', 'family=Courier+Prime:wght@400;700', 'family=Saira+Stencil+One', 'family=Barlow+Condensed:wght@500;600;700']

hero = slot('hero', {'s1': gfx.radar('s1'), 's2': gfx.laurel('s2'), 's3': gfx.contour('s3', 4, 400, 300, 12), 's4': gfx.radar('s4'), 's5': gfx.stars('s5', 30, 8, 400, 200)})
def div():
    return slot('div', {'s1': gfx.radar('s1'), 's2': gfx.key('s2'), 's3': gfx.contour('s3', 6, 300, 120, 7), 's4': gfx.radar('s4'), 's5': gfx.lamp('s5')}, 'x-div')

strip = ('<div class="x-strip x-new">' +
         photo_fig('d_tokyo', 'Street — 街を観測する', 'x-s1', '50% 50%', '東京のネオン街') +
         photo_fig('d_scope', 'Scope — 遠くを見る', 'x-s2', '50% 50%', '夜の天文台') +
         photo_fig('d_desk', 'Desk — 書き留める', 'x-s3', '50% 50%', 'ノートとペンのある机') + '</div>')
bandmarket = '<div class="x-new x-bandwrap">' + photo_fig('d_market', 'Market — 市場を歩く', 'x-band', '50% 50%', '蚤の市の露店') + '</div>'
bandtype = '<div class="x-new x-bandwrap">' + photo_fig('d_typewriter', 'Dispatch — 速報を打つ', 'x-band', '50% 50%', 'タイプライター') + '</div>'
gallery = ('<section class="x-gallery x-new" id="plates"><div class="x-gh"><span class="mono">Field photographs</span><h2>Field <i>Photographs</i></h2></div><div class="x-gg">' +
           photo_fig('d_tokyo', 'Street', 'g1', '50% 50%', '東京のネオン街') +
           photo_fig('d_scope', 'Scope', 'g2', '50% 50%', '天文台') +
           photo_fig('d_desk', 'Desk', 'g3', '50% 50%', '机') +
           photo_fig('d_market', 'Market', 'g4', '50% 50%', '蚤の市') +
           photo_fig('d_typewriter', 'Typewriter', 'g5', '50% 50%', 'タイプライター') +
           photo_fig('d_stove', 'Camp stove', 'g6', '50% 50%', 'キャンプ用コンロ') +
           '</div><ul class="x-credits credits" id="xcred"></ul></section>')
CREDITS = {k: (n, k) for k, n in [('d_tokyo', 'Street'), ('d_scope', 'Scope'), ('d_desk', 'Desk'), ('d_market', 'Market'), ('d_typewriter', 'Typewriter'), ('d_stove', 'Camp stove')]}

INSERTS = [
    ('after', '</header>', hero + strip),
    ('before', '<section id="horizon"', ''),
    ('before', '<section id="market"', bandmarket + div()),
    ('before', '<section id="desks"', div()),
    ('before', '<section id="rules"', bandtype + div()),
    ('before', '<footer class="foot"', gallery),
]
REPLACES = []
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
    _p = f'{HERE}/skins/discovery_{_s}.css'
    if os.path.exists(_p): SKIN_CSS += open(_p, encoding='utf8').read() + '\n'
