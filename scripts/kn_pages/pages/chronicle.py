import os, json
import gfx
from build import slot, photo_fig
HERE = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))

TITLE = 'Heritage Chronicle'
ORIG_NAME = '原版 · 黄金の写本'
SKINS = [('s1', '台帳', 'Ledger'), ('s2', '設計図', 'Blueprint'), ('s3', '号外', 'Gazette'), ('s4', '巻物', 'Scroll'), ('s5', '熾火', 'Embers')]
FONTS = ['family=Klee+One:wght@400;600', 'family=Courier+Prime:wght@400;700', 'family=Zen+Kaku+Gothic+New:wght@400;500;700;900',
         'family=UnifrakturCook:wght@700', 'family=Zen+Old+Mincho:wght@400;700;900', 'family=Zen+Antique:wght@400',
         'family=Fraunces:ital,opsz,wght@0,9..144,300;0,9..144,600;0,9..144,800;1,9..144,300', 'family=Special+Elite']

hero = slot('hero', {
    's1': gfx.book('s1'), 's2': gfx.compass('s2'), 's3': gfx.stamp('EXTRA', 'No. 1', 's3'), 's4': gfx.hanko('記', 's4'), 's5': gfx.flame('s5')})
div = lambda: slot('div', {
    's1': gfx.key('s1'), 's2': gfx.compass('s2'), 's3': gfx.laurel('s3'), 's4': gfx.hourglass('s4'), 's5': gfx.flame('s5')}, 'x-div')

strip = ('<div class="x-strip x-new">' +
         photo_fig('c_fire', 'Fire — 熾す', 'x-s1', '50% 60%', '夜の焚き火の炎') +
         photo_fig('c_seal', 'Seal — 封じる', 'x-s2', '50% 50%', '赤い封蝋') +
         photo_fig('c_compass', 'Bearing — 定める', 'x-s3', '50% 50%', '真鍮のコンパス') + '</div>')

band = ('<div class="x-new x-bandwrap">' +
        photo_fig('c_map', 'Map of Japan, 1855 — 道標としての地図', 'x-band', '50% 30%', '1855年の日本地図') + '</div>')

reflect = ('<div class="x-new x-duo">' +
           photo_fig('c_hourglass', 'Time — 砂が落ちるまで', 'x-tall', '50% 50%', '砂時計') +
           photo_fig('c_desk', 'Desk — 書き留める', 'x-tall', '50% 50%', '万年筆とノートのある机') + '</div>')

gallery = ('<section class="x-gallery x-new" id="plates"><div class="x-gh"><span class="mono">Plates</span><h2>図版 · The Archive, Seen</h2></div><div class="x-gg">' +
           photo_fig('c_library', 'Shelves — 蔵書', 'g1', '50% 40%', '図書館の書架') +
           photo_fig('c_stove', 'Hearth — 囲炉裏', 'g2', '50% 50%', '山小屋の薪ストーブ') +
           photo_fig('c_fire', 'Embers — 熾火', 'g3', '50% 50%', '焚き火') +
           photo_fig('c_hourglass', 'Hours — 時間', 'g4', '50% 50%', '砂時計') +
           photo_fig('c_desk', 'Notes — 記録', 'g5', '50% 50%', '机の上のノート') +
           photo_fig('c_compass', 'Compass — 方位', 'g6', '50% 50%', '真鍮のコンパス') +
           '</div><ul class="x-credits" id="xcred"></ul></section>')

CREDITS = {
    'c_fire': ('Fire', 'c_fire'), 'c_seal': ('Seal', 'c_seal'), 'c_compass': ('Compass', 'c_compass'), 'c_map': ('Map', 'c_map'),
    'c_hourglass': ('Hourglass', 'c_hourglass'), 'c_desk': ('Desk', 'c_desk'), 'c_library': ('Shelves', 'c_library'), 'c_stove': ('Hearth', 'c_stove')}

INSERTS = [
    ('after', '</header>', hero + strip),
    ('before', '<section id="milestones"', div() + ''),
    ('after', '<span class="sub mono">節目の記録 · 2026.07 — 2026.10</span></div></div>', band),
    ('before', '<section id="review"', div()),
    ('before', '<section id="decisions"', div()),
    ('before', '<section id="reflection"', div()),
    ('after', '<span class="sub mono">判断は正しかったか</span></div></div>', reflect),
    ('before', '<footer class="colophon"', gallery),
]
REPLACES = []

EXTRA_JS = r"""
(function(){
  // credits for the extra photographs (shown in the new skins only)
  var C=%s, ul=document.getElementById('xcred'); if(!ul) return;
  Object.keys(C).forEach(function(k){var c=C[k]; var li=document.createElement('li'); li.innerHTML='<span>'+c.n+'</span>“<a href="'+c.u+'" target="_blank" rel="noopener">'+c.t+'</a>” by '+c.a+' · '+c.l; ul.appendChild(li);});
})();
"""


def _credit_js():
    meta = json.load(open(f'{HERE}/photos.json'))
    import html
    d = {}
    for k, (n, _) in CREDITS.items():
        if k in meta:
            m = meta[k]
            t = m['title'].replace('File:', '').rsplit('.', 1)[0]
            d[k] = dict(n=n, u=m['page'], t=html.escape(t[:70]), a=html.escape(m['artist'].strip()[:40]), l=m['lic'])
    return json.dumps(d, ensure_ascii=False)


def _build_js():
    return EXTRA_JS % _credit_js()


EXTRA_JS_FN = _build_js
SKIN_CSS = ''
for _s in ('s1', 's2', 's3', 's4', 's5'):
    _p = f'{HERE}/skins/chronicle_{_s}.css'
    if os.path.exists(_p):
        SKIN_CSS += open(_p, encoding='utf8').read() + '\n'
EXTRA_JS = _build_js()
