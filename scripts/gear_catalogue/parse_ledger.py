"""Parse the ledgers (MD-004 + MD-003) into owned.json for the gear catalogue page.

Usage: python3 scripts/gear_catalogue/parse_ledger.py [out.json]   (run from the repository root)
Only Status = Owned records are kept. Nothing is inferred beyond reading the ledger text;
`pv` marks a price that the ledger itself describes as an official/current list price
(not a confirmed purchase price), which the page shows with a dagger-double mark.
"""
import re, json, sys
def parse(path, stop_heads):
    lines=open(path,encoding='utf-8').read().split('\n')
    zone=None; items=[]; cur=None; key=None
    for raw in lines:
        l=raw.rstrip()
        m=re.match(r'^# (.+)$',l)
        if m:
            z=m.group(1).strip()
            if cur: items.append(cur); cur=None
            zone = z if z in stop_heads else None
            continue
        if zone is None: continue
        m=re.match(r'^## (\S+)',l)
        if m:
            if cur: items.append(cur)
            cur={'id':m.group(1),'zone':zone,'raw':''}; key=None; continue
        if cur is None: continue
        m=re.match(r'^\*\*(.+?)\*\*\s*$',l) or re.match(r'^###\s+(.+?)\s*$',l)
        if m: key=m.group(1).strip(); cur.setdefault(key,''); continue
        if l.strip()=='---': key=None; continue
        if key and l.strip():
            v=l.strip()
            if v.startswith('- '): cur.setdefault(key+'_list',[]).append(v[2:].strip())
            else: cur[key]=(cur[key]+' '+v).strip()
        elif not key and l.strip(): cur['raw']+=l.strip()+' '
    if cur: items.append(cur)
    return items

MD004='MD/MD-004_Equipment_Registry_Object_Reference.md'
MD003='MD/MD-003_Galley_Fare.md'
ZONES_004=['Furniture','Light','Aroma','Storage','Coffee','Fire','Shelter']
d=parse(MD004,ZONES_004)+parse(MD003,['Kitchen'])
own=[i for i in d if i.get('Status')=='Owned']
ids={i['id'] for i in own}
PV_YES=re.compile(r'公式.{0,12}価格|現行価格|実勢価格|別途確認'); PV_NO=re.compile(r'購入価格|申告')
def provisional(s):
    return bool(PV_YES.search(s or '')) and not PV_NO.search(s or '')
ADMIN=re.compile(r'\bID|MARI|Version|OP-0|MD-0|CZ-0|BR-0|確認|申告|移設|Presumed|Series-Consistent|訂正|基準|旧登録|ご指示|ご決定|SKU')
def strip_paren(s):
    s=s or ''; prev=None
    while prev!=s:
        prev=s; s=re.sub(r'（[^（）]*）','',s)
    return s.strip()
def parens(s):
    s=s or ''; i=s.find('（')
    if i<0: return []
    depth=0; out=[]; buf=''
    for ch in s[i:]:
        if ch=='（':
            depth+=1
            if depth==1: buf=''; continue
        if ch=='）':
            depth-=1
            if depth==0: out.append(buf); continue
        if depth>=1: buf+=ch
    return [re.sub(r'（[^（）]*）','',p) for p in out]
def clean_note(s):
    out=[]
    for p in parens(s):
        sents=[x.strip() for x in re.split(r'[。]',p) if x.strip()]
        keep=[x for x in sents if not ADMIN.search(x)]
        if keep: out.append('。'.join(keep))
    return ' / '.join(out)
def clean_full(s):
    # keep parentheticals that are not admin
    def rep(m):
        inner=m.group(1)
        sents=[x for x in re.split('。',inner) if x.strip() and not ADMIN.search(x)]
        return '（'+'。'.join(sents)+'）' if sents else ''
    prev=None
    while prev!=s:
        prev=s; s=re.sub(r'（([^（）]*)）',rep,s or '')
    return s.strip()
def price(s):
    m=re.match(r'¥([\d,]+)',s or '')
    return int(m.group(1).replace(',','')) if m else None
PADMIN=re.compile(r'Version|OP-0|MD-0\d\d|CZ-0|BR-0|ご指示|ご決定|ID')
def price_note(s):
    # price remarks are shown as written (purchase vs list price matters); only drop document-admin sentences
    out=[]
    for p in parens(s):
        keep=[x.strip() for x in re.split(r'[。]',p) if x.strip() and not PADMIN.search(x)]
        if keep: out.append('。'.join(keep))
    return ' / '.join(out)
WOOD={'walnut':'#4a3020','oak':'#a98458','hinoki':'#d8b98a','sugi':'#b0714a','karin':'#8a3b24','maple':'#d9bf93','pine':'#cfa66a','zebrawood':'#b08a55','camphor':'#9b6d3c','yakusugi':'#6a3a22','rosewood':'#4b2418','bamboo':'#c8a46a','african':'#6b3b25','new guinea':'#5a3a26','wood':'#8a6240'}
COL={'black':'#1d1c1a','brown':'#5c3d27','dark brown':'#35241a','light brown':'#a27b52','gold':'#b08a45','gray':'#77766f','grey':'#77766f','silver':'#b7b8b3','white':'#ecebe6','blue':'#3f5f86','light blue':'#8fb3c9','green':'#3f6b4c','matcha green':'#7f9a4f','emerald green':'#1f7a5c','purple':'#5b4a86','pink gold':'#c99a86','orange':'#c7702e','red':'#9b2f25','copper':'#a45f36','amber':'#b56e21','taupe':'#8a7c6c','sand':'#c9b796','tan':'#b89668','natural':'#d6bb8e','clear':'#dfe3e0','multi':'#8a5a3a','camouflage':'#5a5a3e','charcoal gray':'#3d3d3b','oak':'#a98458'}
def first(s):
    s=strip_paren(s)
    return re.split(r'[／/,、]',s)[0].strip().lower() if s else ''
def colhex(c):
    c=first(c)
    for k in sorted(COL,key=len,reverse=True):
        if k in c: return COL[k]
    return '#77766f'
def family(mat,color):
    m=strip_paren(mat).lower(); c=strip_paren(color).lower(); f=first(mat)
    def has(*ws,src=f): return any(w in src for w in ws)
    if has('mother of pearl'): return 'pearl'
    if has('celluloid'): return 'tortoise'
    if has('stained glass'): return 'stained'
    if has('glass') and not has('fiberglass'): return 'glass'
    if 'camouflage' in c: return 'camo'
    if has('titanium'): return 'titanium'
    if has('brass','copper'): return 'blackmetal' if c.startswith('black') else 'brass'
    if has('resin','plastic','silicone','polyethylene'): return 'glass' if 'clear' in c else 'polymer'
    if has('anodized aluminum','painted aluminum') and 'black' in c: return 'blackmetal'
    if has('stainless','aluminum','duralumin','alumi') : return 'blackmetal' if 'black' in c else 'brushed'
    if has('steel','iron','metal','nitrid'): return 'iron'
    if has('leather','suede'): return 'leather'
    if has(*WOOD.keys()) or has('wood'): return 'wood'
    if has('ceramic','enamel'): return 'ceramic'
    if has('polyester','nylon','cordura','canvas','oxford','cotton','mesh','fabric','dryhide','thickskin','high tenacity'): return 'textile'
    return 'polymer'
def woodtone(mat,color):
    m=first(mat)
    c=strip_paren(color).lower()
    if 'black' in c and 'black' in m or 'black-painted' in mat.lower() or c.startswith('black') : return '#1f1b17'
    for k,v in WOOD.items():
        if k in m: return v
    return colhex(color)
recs=[]
for i in own:
    mat=i.get('Material',''); col=i.get('Color','')
    fam=family(mat,col)
    tone=woodtone(mat,col) if fam=='wood' else colhex(col)
    if fam=='brass' and 'copper' in first(mat): tone=COL['copper']
    if fam=='brass' and 'copper' not in first(mat): tone=COL['gold']
    ia=i.get('Industrial Attribute','')
    ga=strip_paren(i.get('Graphic Attribute','') or '')
    parent=(i.get('Parent') or '').split(' ')[0] or None
    recs.append(dict(id=i['id'],zone=i['zone'],brand=i.get('Brand',''),product=i.get('Product',''),alias=i.get('Alias',''),
      qty=strip_paren(i.get('Quantity','')) or None,
      color=strip_paren(col).replace('／',' / '),colorFull=clean_full(col).replace('／',' / '),
      material=strip_paren(mat).replace('／',' / '),materialFull=clean_full(mat).replace('／',' / '),
      type=strip_paren(ia),note=clean_note(ia),graphic=None if ga in('None','') else ga,
      price=price(i.get('Price','')),priceNote=price_note(i.get('Price','')),
      parent=parent if parent in ids else None,parentRef=parent if parent and parent not in ids else None,
      fam=fam,tone=tone,pv=provisional(i.get('Price','')) or None))
byid={r['id']:r for r in recs}
for r in recs: r['kids']=[x['id'] for x in recs if x['parent']==r['id']]

out=sys.argv[1] if len(sys.argv)>1 else 'owned.json'
json.dump(recs,open(out,'w',encoding='utf-8'),ensure_ascii=False,separators=(',',':'))
from collections import Counter
print(f'{len(recs)} owned records -> {out}  ({sum(1 for r in recs if r["pv"])} provisional prices)')
print(dict(Counter(r["zone"] for r in recs)))
