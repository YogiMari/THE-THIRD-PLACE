"""SVG graphics for the KN page skins. Everything draws with currentColor / CSS variables so a skin can recolour it."""
import math, random, urllib.parse


def uri(svg: str) -> str:
    """SVG text -> CSS url() data URI."""
    svg = svg.strip().replace('"', "'")
    return 'url("data:image/svg+xml,' + urllib.parse.quote(svg, safe="/:=' ,;()#%") + '")'


def wrap(inner, vb="0 0 100 100", cls="", extra=""):
    return f'<svg class="{cls}" viewBox="{vb}" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false" {extra}>{inner}</svg>'


# ---------- icons / illustrations (stroke based, currentColor) ----------
def flame(cls=""):
    return wrap('<path d="M50 6 C58 24 78 34 78 60 C78 80 64 94 50 94 C36 94 22 80 22 60 C22 46 30 40 34 30 C38 40 42 42 44 40 C46 28 44 16 50 6 Z" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linejoin="round"/>'
                '<path d="M50 52 C56 62 64 66 64 76 C64 85 58 90 50 90 C42 90 36 85 36 76 C36 68 44 62 50 52 Z" fill="currentColor" opacity=".85"/>', cls=cls)


def compass(cls=""):
    pts = ''.join(f'<line x1="50" y1="6" x2="50" y2="{12 if i % 3 else 16}" transform="rotate({i*10} 50 50)" stroke="currentColor" stroke-width="{1.6 if i%9==0 else .8}"/>' for i in range(36))
    return wrap('<circle cx="50" cy="50" r="44" fill="none" stroke="currentColor" stroke-width="1.2"/><circle cx="50" cy="50" r="30" fill="none" stroke="currentColor" stroke-width=".7"/>' + pts +
                '<path d="M50 14 L57 50 L50 86 L43 50 Z" fill="none" stroke="currentColor" stroke-width="1.4"/><path d="M14 50 L50 43 L86 50 L50 57 Z" fill="none" stroke="currentColor" stroke-width="1"/>'
                '<path d="M50 14 L57 50 L43 50 Z" fill="currentColor"/><circle cx="50" cy="50" r="2.6" fill="currentColor"/>', cls=cls)


def hourglass(cls=""):
    return wrap('<path d="M26 10 H74 M26 90 H74 M30 10 C30 36 50 42 50 50 C50 58 30 64 30 90 M70 10 C70 36 50 42 50 50 C50 58 70 64 70 90" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"/>'
                '<path d="M38 80 H62 L50 66 Z" fill="currentColor"/><path d="M50 50 L50 66" stroke="currentColor" stroke-width="1"/><path d="M40 20 H60 L50 38 Z" fill="currentColor" opacity=".35"/>', cls=cls)


def laurel(cls=""):
    leaves = ''
    for side in (-1, 1):
        for i in range(9):
            t = i / 8
            x = 50 + side * (34 - 26 * (1 - t) ** 1.6 - 0)
            y = 88 - 70 * t
            ang = side * (20 + 55 * t) - 10 * side
            leaves += f'<ellipse cx="{x:.1f}" cy="{y:.1f}" rx="3.2" ry="8" transform="rotate({ang:.0f} {x:.1f} {y:.1f})" fill="currentColor" opacity="{.9-.4*t:.2f}"/>'
    return wrap(leaves + '<path d="M50 92 C20 80 14 40 28 12 M50 92 C80 80 86 40 72 12" fill="none" stroke="currentColor" stroke-width="1.2"/>', cls=cls)


def column(cls="", fl=7):
    flutes = ''.join(f'<line x1="{26+i*(48/(fl-1)):.1f}" y1="22" x2="{26+i*(48/(fl-1)):.1f}" y2="86" stroke="currentColor" stroke-width=".8" opacity=".6"/>' for i in range(fl))
    return wrap('<rect x="14" y="8" width="72" height="6" fill="currentColor"/><rect x="20" y="14" width="60" height="6" fill="none" stroke="currentColor" stroke-width="1.4"/>'
                '<path d="M26 20 H74 L70 86 H30 Z" fill="none" stroke="currentColor" stroke-width="1.6"/>' + flutes +
                '<rect x="22" y="86" width="56" height="4" fill="none" stroke="currentColor" stroke-width="1.4"/><rect x="14" y="90" width="72" height="5" fill="currentColor"/>', vb="0 0 100 100", cls=cls)


def mountains(cls="", layers=4, seed=3, w=800, h=200):
    rnd = random.Random(seed)
    out = ''
    for L in range(layers):
        base = h * (0.35 + 0.16 * L)
        amp = h * (0.34 - 0.05 * L)
        pts = [(0, h)]
        x = 0
        while x <= w:
            y = base - amp * (0.5 + 0.5 * math.sin(x / (90 - L * 12) + L * 1.7 + rnd.random() * .15)) * (0.6 + .4 * rnd.random())
            pts.append((x, y)); x += 14
        pts.append((w, h))
        d = 'M' + ' L'.join(f'{px:.0f} {py:.0f}' for px, py in pts) + ' Z'
        out += f'<path d="{d}" fill="currentColor" opacity="{.18 + .2 * L:.2f}"/>'
    return wrap(out, vb=f"0 0 {w} {h}", cls=cls, extra='preserveAspectRatio="none"')


def pines(cls="", n=14, seed=5, w=800, h=120):
    rnd = random.Random(seed)
    out = ''
    for i in range(n):
        x = (i + rnd.random() * .8) * w / n
        th = h * (0.55 + rnd.random() * .45); wd = th * (.16 + rnd.random() * .06)
        d = f'M{x-wd:.0f} {h} '
        for t in range(4):
            y = h - th * (t + 1) / 4; ww = wd * (1 - t / 4.6)
            d += f'L{x-ww*.55:.0f} {y+th*.08:.0f} L{x-ww:.0f} {y+th*.12:.0f} '
        d += f'L{x:.0f} {h-th:.0f} '
        for t in range(3, -1, -1):
            y = h - th * (t + 1) / 4; ww = wd * (1 - t / 4.6)
            d += f'L{x+ww:.0f} {y+th*.12:.0f} L{x+ww*.55:.0f} {y+th*.08:.0f} '
        d += f'L{x+wd:.0f} {h} Z'
        out += f'<path d="{d}" fill="currentColor"/>'
    return wrap(out, vb=f"0 0 {w} {h}", cls=cls, extra='preserveAspectRatio="none"')


def tent(cls=""):
    return wrap('<path d="M6 88 L50 14 L94 88 Z" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linejoin="round"/><path d="M50 14 L38 88 M50 14 L62 88" stroke="currentColor" stroke-width="1.4" fill="none"/>'
                '<path d="M42 88 L50 56 L58 88 Z" fill="currentColor" opacity=".8"/><path d="M0 92 H100" stroke="currentColor" stroke-width="1.4"/>', cls=cls)


def lantern(cls=""):
    return wrap('<path d="M50 4 V14 M38 14 H62 M40 14 C32 24 30 36 30 50 C30 66 34 78 40 86 H60 C66 78 70 66 70 50 C70 36 68 24 60 14 Z" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linejoin="round"/>'
                '<rect x="38" y="86" width="24" height="8" fill="none" stroke="currentColor" stroke-width="2"/><path d="M50 40 C56 48 58 56 50 66 C42 56 44 48 50 40 Z" fill="currentColor"/>', cls=cls)


def stars(cls="", n=60, seed=9, w=800, h=200):
    rnd = random.Random(seed)
    out = ''.join(f'<circle cx="{rnd.random()*w:.0f}" cy="{rnd.random()*h:.0f}" r="{.5+rnd.random()*1.4:.1f}" fill="currentColor" opacity="{.25+rnd.random()*.7:.2f}"/>' for _ in range(n))
    return wrap(out, vb=f"0 0 {w} {h}", cls=cls, extra='preserveAspectRatio="none"')


def plane_route(cls=""):
    return wrap('<path d="M4 70 C 30 70, 40 20, 70 30 S 130 50, 196 14" fill="none" stroke="currentColor" stroke-width="1.6" stroke-dasharray="3 5"/>'
                '<circle cx="4" cy="70" r="3.4" fill="currentColor"/><path d="M196 14 l-10 -3 l-3 4 l6 1 l-3 6 l4 1 l5 -6 l5 1 z" fill="currentColor"/>', vb="0 0 200 90", cls=cls)


def stamp(text="PLACE", sub="MMXXVI", cls=""):
    return wrap('<circle cx="50" cy="50" r="44" fill="none" stroke="currentColor" stroke-width="2.4"/><circle cx="50" cy="50" r="36" fill="none" stroke="currentColor" stroke-width="1" stroke-dasharray="2 3"/>'
                f'<text x="50" y="52" text-anchor="middle" font-family="serif" font-weight="700" font-size="15" fill="currentColor" letter-spacing="1.5">{text}</text>'
                f'<text x="50" y="68" text-anchor="middle" font-family="monospace" font-size="7" fill="currentColor" letter-spacing="1.5">{sub}</text>'
                '<path d="M20 36 H80 M20 74 H80" stroke="currentColor" stroke-width="1"/>', cls=cls)


def hanko(ch="記", cls=""):
    return wrap('<rect x="6" y="6" width="88" height="88" rx="6" fill="currentColor"/>'
                f'<text x="50" y="72" text-anchor="middle" font-family="serif" font-weight="900" font-size="64" fill="var(--hanko-ink,#fff)">{ch}</text>', cls=cls)


def radar(cls=""):
    rings = ''.join(f'<circle cx="50" cy="50" r="{r}" fill="none" stroke="currentColor" stroke-width=".6" opacity=".7"/>' for r in (12, 24, 36, 47))
    return wrap(rings + '<path d="M50 3 V97 M3 50 H97" stroke="currentColor" stroke-width=".5" opacity=".6"/><path d="M50 50 L84 22 A44 44 0 0 1 94 50 Z" fill="currentColor" opacity=".25"/>'
                '<path d="M50 50 L84 22" stroke="currentColor" stroke-width="1.2"/><circle cx="68" cy="34" r="2" fill="currentColor"/><circle cx="36" cy="64" r="1.6" fill="currentColor"/><circle cx="62" cy="70" r="1.6" fill="currentColor"/>', cls=cls)


def contour(cls="", seed=2, w=400, h=300, rings=11):
    rnd = random.Random(seed)
    cx, cy = w * .55, h * .5
    ph = [rnd.random() * 6.28 for _ in range(4)]
    out = ''
    for i in range(1, rings + 1):
        r0 = i * min(w, h) * .042
        d = ''
        for k in range(0, 73):
            a = k / 72 * 6.2832
            r = r0 * (1 + .22 * math.sin(a * 2 + ph[0] + i * .15) + .12 * math.sin(a * 3 + ph[1]) + .07 * math.sin(a * 5 + ph[2] + i * .2))
            x = cx + math.cos(a) * r * 1.45; y = cy + math.sin(a) * r
            d += ('M' if k == 0 else 'L') + f'{x:.1f} {y:.1f} '
        out += f'<path d="{d}Z" fill="none" stroke="currentColor" stroke-width="{1.1 if i%5==0 else .6}" opacity="{.9 if i%5==0 else .55}"/>'
    return wrap(out, vb=f"0 0 {w} {h}", cls=cls, extra='preserveAspectRatio="xMidYMid slice"')


def sunburst(cls="", rays=24):
    out = ''
    for i in range(rays):
        a0 = i * 360 / rays; a1 = a0 + 180 / rays
        x0 = 50 + 60 * math.cos(math.radians(a0)); y0 = 50 + 60 * math.sin(math.radians(a0))
        x1 = 50 + 60 * math.cos(math.radians(a1)); y1 = 50 + 60 * math.sin(math.radians(a1))
        out += f'<path d="M50 50 L{x0:.1f} {y0:.1f} L{x1:.1f} {y1:.1f} Z" fill="currentColor"/>'
    return wrap(out, cls=cls)


def ticket(cls=""):
    return wrap('<path d="M4 10 H96 V38 A6 6 0 0 0 96 50 V90 H4 V50 A6 6 0 0 0 4 38 Z" fill="none" stroke="currentColor" stroke-width="2"/><path d="M68 10 V90" stroke="currentColor" stroke-width="1.2" stroke-dasharray="3 3"/>'
                '<path d="M14 30 H56 M14 44 H48 M14 58 H52" stroke="currentColor" stroke-width="2"/><path d="M76 24 V76" stroke="currentColor" stroke-width="6" stroke-dasharray="1 2 3 1"/>', cls=cls)


def book(cls=""):
    return wrap('<path d="M8 20 C26 14 40 16 50 24 C60 16 74 14 92 20 V82 C74 76 60 78 50 86 C40 78 26 76 8 82 Z" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linejoin="round"/><path d="M50 24 V86" stroke="currentColor" stroke-width="1.6"/>'
                '<path d="M16 34 C26 31 34 32 42 36 M16 46 C26 43 34 44 42 48 M58 36 C66 32 74 31 84 34 M58 48 C66 44 74 43 84 46" stroke="currentColor" stroke-width="1" fill="none"/>', cls=cls)


def key(cls=""):
    return wrap('<circle cx="28" cy="50" r="16" fill="none" stroke="currentColor" stroke-width="3"/><circle cx="28" cy="50" r="5" fill="currentColor"/><path d="M44 50 H92 M78 50 V66 M88 50 V62" stroke="currentColor" stroke-width="3" fill="none" stroke-linecap="round"/>', cls=cls)


def hammer(cls=""):
    return wrap('<path d="M20 70 L62 28" stroke="currentColor" stroke-width="5" stroke-linecap="round"/><path d="M52 14 L84 30 L76 44 L44 28 Z" fill="currentColor"/><path d="M30 86 H78" stroke="currentColor" stroke-width="3"/>', cls=cls)


def lamp(cls=""):
    return wrap('<path d="M50 4 V30" stroke="currentColor" stroke-width="2"/><path d="M26 56 C26 40 36 30 50 30 C64 30 74 40 74 56 Z" fill="none" stroke="currentColor" stroke-width="2.4"/>'
                '<path d="M34 66 L28 94 M66 66 L72 94 M50 62 V94" stroke="currentColor" stroke-width="1" opacity=".5"/><circle cx="50" cy="60" r="5" fill="currentColor"/>', cls=cls)


def incense(cls=""):
    return wrap('<path d="M30 90 H70 L66 76 H34 Z" fill="none" stroke="currentColor" stroke-width="2.2"/><path d="M50 76 V40" stroke="currentColor" stroke-width="2.4"/><circle cx="50" cy="38" r="2.4" fill="currentColor"/>'
                '<path d="M50 34 C42 26 58 20 50 10 C46 6 54 4 52 2" fill="none" stroke="currentColor" stroke-width="1.4"/>', cls=cls)


def chest(cls=""):
    return wrap('<rect x="10" y="34" width="80" height="52" rx="3" fill="none" stroke="currentColor" stroke-width="2.2"/><path d="M10 52 H90 M42 52 V62 H58 V52" fill="none" stroke="currentColor" stroke-width="1.8"/><path d="M14 34 C14 20 86 20 86 34" fill="none" stroke="currentColor" stroke-width="2.2"/>', cls=cls)


def table(cls=""):
    return wrap('<path d="M10 40 H90 M16 40 L10 90 M84 40 L90 90 M30 40 V70 M70 40 V70" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linecap="round"/><path d="M6 40 H94" stroke="currentColor" stroke-width="5" stroke-linecap="round"/>', cls=cls)


def wave(cls="", w=800, h=40, amp=10, n=14):
    d = f'M0 {h/2} '
    for i in range(n):
        x0 = i * w / n; x1 = (i + 1) * w / n
        d += f'Q{(x0+x1)/2:.0f} {h/2 + (amp if i%2==0 else -amp)} {x1:.0f} {h/2} '
    return wrap(f'<path d="{d}" fill="none" stroke="currentColor" stroke-width="1.6"/>', vb=f"0 0 {w} {h}", cls=cls, extra='preserveAspectRatio="none"')


# ---------- CSS pattern tiles (data URIs, use currentColor-free explicit colours) ----------
def pat_asanoha(col="#C8402A", op=.18, s=40):
    h = s * .866
    lines = ''
    # asanoha: hexagon with 6 spokes + triangulation
    cx, cy = s / 2, h
    pts = [(cx + s / 2 * math.cos(math.radians(60 * k)), cy + s / 2 * math.sin(math.radians(60 * k))) for k in range(6)]
    for p in pts:
        lines += f'<line x1="{cx}" y1="{cy}" x2="{p[0]:.1f}" y2="{p[1]:.1f}"/>'
    for k in range(6):
        a, b = pts[k], pts[(k + 1) % 6]
        mid = ((a[0] + b[0]) / 2, (a[1] + b[1]) / 2)
        lines += f'<line x1="{a[0]:.1f}" y1="{a[1]:.1f}" x2="{b[0]:.1f}" y2="{b[1]:.1f}"/><line x1="{cx}" y1="{cy}" x2="{mid[0]:.1f}" y2="{mid[1]:.1f}"/>'
    svg = f"<svg xmlns='http://www.w3.org/2000/svg' width='{s}' height='{2*h:.0f}' viewBox='0 0 {s} {2*h:.0f}'><g stroke='{col}' stroke-opacity='{op}' stroke-width='.7' fill='none'>{lines}</g></svg>"
    return uri(svg)


def pat_seigaiha(col="#1F3A5F", op=.2, s=36):
    arcs = ''
    for r in (s * .5, s * .38, s * .26, s * .14):
        for (cx, cy) in ((s / 2, s), (0, s / 2), (s, s / 2), (s / 2, 0)):
            arcs += f"<circle cx='{cx}' cy='{cy}' r='{r:.1f}'/>"
    svg = f"<svg xmlns='http://www.w3.org/2000/svg' width='{s}' height='{s}' viewBox='0 0 {s} {s}'><g fill='none' stroke='{col}' stroke-opacity='{op}' stroke-width='.8'>{arcs}</g></svg>"
    return uri(svg)


def pat_halftone(col="#000", op=.18, s=10, r=1.6):
    svg = f"<svg xmlns='http://www.w3.org/2000/svg' width='{s}' height='{s}'><circle cx='{s/2}' cy='{s/2}' r='{r}' fill='{col}' fill-opacity='{op}'/></svg>"
    return uri(svg)


def pat_grid(col="#fff", op=.14, s=24):
    svg = (f"<svg xmlns='http://www.w3.org/2000/svg' width='{s}' height='{s}'><path d='M{s} 0 H0 V{s}' fill='none' stroke='{col}' stroke-opacity='{op}' stroke-width='1'/>"
           f"<path d='M{s/2} 0 V{s} M0 {s/2} H{s}' fill='none' stroke='{col}' stroke-opacity='{op*.4}' stroke-width='.5'/></svg>")
    return uri(svg)


def pat_greekkey(col="#8A6A3A", op=.7, s=32):
    svg = (f"<svg xmlns='http://www.w3.org/2000/svg' width='{s}' height='{s*.5}' viewBox='0 0 32 16'><path d='M0 15 H4 V4 H14 V11 H8 V8 H11 M16 15 H20 V4 H30 V11 H24 V8 H27' fill='none' stroke='{col}' stroke-opacity='{op}' stroke-width='1.4' stroke-linecap='square'/></svg>")
    return uri(svg)


def pat_noise(op=.22, freq=.8, tint="0 0 0"):
    r, g, b = tint.split()
    svg = (f"<svg xmlns='http://www.w3.org/2000/svg' width='200' height='200'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='{freq}' numOctaves='3' stitchTiles='stitch'/>"
           f"<feColorMatrix values='0 0 0 0 {r}  0 0 0 0 {g}  0 0 0 0 {b}  0 0 0 {op*2} 0'/></filter><rect width='100%' height='100%' filter='url(%23n)'/></svg>")
    return 'url("data:image/svg+xml,' + svg.replace('"', "'") + '")'


def pat_fibers(col="#8a7a5a", op=.18):
    rnd = random.Random(11)
    out = ''
    for _ in range(90):
        x, y = rnd.random() * 240, rnd.random() * 240
        a = rnd.random() * 6.28; l = 6 + rnd.random() * 14
        out += f"<path d='M{x:.0f} {y:.0f} q{math.cos(a)*l/2:.0f} {math.sin(a)*l/2+rnd.random()*4:.0f} {math.cos(a)*l:.0f} {math.sin(a)*l:.0f}' />"
    svg = f"<svg xmlns='http://www.w3.org/2000/svg' width='240' height='240'><g fill='none' stroke='{col}' stroke-opacity='{op}' stroke-width='.6'>{out}</g></svg>"
    return uri(svg)
