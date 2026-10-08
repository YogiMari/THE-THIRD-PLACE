import os, json, html
import gfx
from build import slot, photo_fig
HERE = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))

TITLE = 'Beyond Journey'
ORIG_NAME = '原版 · 夜の森'
SKINS = [('s1', 'スクラップブック', 'Scrapbook'), ('s2', 'リソ印刷', 'Riso Zine'), ('s3', '北欧の静けさ', 'Nordic Quiet'), ('s4', 'エアメール', 'Airmail'), ('s5', '夜のメッセンジャー', 'Night Messenger')]
FONTS = ['family=Yomogi', 'family=Zen+Maru+Gothic:wght@400;500;700;900', 'family=Courier+Prime:wght@400;700', 'family=Dela+Gothic+One', 'family=Jost:ital,wght@0,200;0,300;0,400;0,500;1,300',
         'family=Noto+Sans+JP:wght@300;400;500;700', 'family=Playfair+Display:ital,wght@0,400;0,700;1,400;1,700', 'family=Zen+Old+Mincho:wght@400;700;900', 'family=Special+Elite',
         'family=M+PLUS+Rounded+1c:wght@400;500;700;800', 'family=IBM+Plex+Mono:wght@400;500']

hero = slot('hero', {'s1': gfx.compass('s1'), 's2': gfx.sunburst('s2', 18), 's3': gfx.lantern('s3'), 's4': gfx.stamp('BEYOND', 'AIR MAIL', 's4'), 's5': gfx.stars('s5', 70, 3, 400, 120)})
def div():
    return slot('div', {'s1': gfx.tent('s1'), 's2': gfx.sunburst('s2', 14), 's3': gfx.lantern('s3'), 's4': gfx.plane_route('s4'), 's5': gfx.tent('s5')}, 'x-div')
ridge = slot('ridge', {'s1': gfx.pines('s1', 18, 7, 800, 90), 's2': gfx.wave('s2'), 's3': gfx.mountains('s3', 3, 5, 800, 120), 's4': gfx.wave('s4'), 's5': gfx.pines('s5', 24, 2, 800, 110)})

strip = ('<div class="x-strip x-new">' +
         photo_fig('j_hut', 'Hut — 山小屋の夕暮れ', 'x-s1', '50% 60%', '山小屋と夕暮れの山') +
         photo_fig('j_tent', 'Tent — 星の下で', 'x-s2', '50% 50%', '星空の下のテント') +
         photo_fig('j_mist', 'Mist — 朝もやの森', 'x-s3', '50% 50%', '朝もやの森') + '</div>')
bandpath = '<div class="x-new x-bandwrap">' + photo_fig('j_cedar', 'The path — 杉並木の道', 'x-band', '50% 50%', '日光の杉並木の道') + '</div>'
bandstar = '<div class="x-new x-bandwrap">' + photo_fig('j_stars', 'Under a trillion stars — 満天の星', 'x-band', '50% 45%', '天の川の下のキャンプ') + '</div>'
gallery = ('<section class="x-gallery x-new" id="plates"><div class="x-gh"><span class="mono">Postcards</span><h2>Postcards <i>from</i> the Road</h2></div><div class="x-gg">' +
           photo_fig('j_fuji', 'Dusk — 河口湖の夕景', 'g1', '50% 50%', '河口湖と富士山') +
           photo_fig('j_suitcase', 'Luggage — 旅の鞄', 'g2', '50% 50%', '古いスーツケース') +
           photo_fig('j_airmail', 'Airmail — 航空便', 'g3', '50% 50%', '航空郵便の封筒') +
           photo_fig('j_hut', 'Hut — 山小屋', 'g4', '50% 50%', '山小屋') +
           photo_fig('j_mist', 'Mist — 朝もや', 'g5', '50% 50%', '朝もやの森') +
           photo_fig('j_tent', 'Tent — 野営', 'g6', '50% 50%', 'テント') +
           '</div><ul class="x-credits credits" id="xcred"></ul></section>')
CREDITS = {k: (n, k) for k, n in [('j_hut', 'Hut'), ('j_tent', 'Tent'), ('j_mist', 'Mist'), ('j_cedar', 'Path'), ('j_stars', 'Stars'), ('j_fuji', 'Dusk'), ('j_suitcase', 'Luggage'), ('j_airmail', 'Airmail')]}

INSERTS = [
    ('after', '</nav>', hero + strip + ridge),
    ('before', '<section id="f1"', div()),
    ('before', '<section id="f2"', div()),
    ('before', '<section id="board"', bandpath + div()),
    ('before', '<section id="table"', div()),
    ('before', '<section id="notes"', bandstar + div()),
    ('before', '<footer class="desk"', gallery),
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
    _p = f'{HERE}/skins/journey_{_s}.css'
    if os.path.exists(_p): SKIN_CSS += open(_p, encoding='utf8').read() + '\n'
