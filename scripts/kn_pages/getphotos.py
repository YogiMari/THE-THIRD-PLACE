import json,os,sys,time,io,urllib.request
from PIL import Image
sys.path.insert(0,'.')
import commons
LIST=[
 # key, query, title substring
 ('c_fire','campfire at night','Campfire flames at night'),
 ('c_compass','brass compass',"Brass surveyor's compass"),
 ('c_seal','wax seal letter','Wax seal with impression'),
 ('c_library','library bookshelves','Oya Soichi Library 1'),
 ('c_hourglass','hourglass','Hourglasses.jpg'),
 ('c_stove','wood burning stove','Gonoikegoya'),
 ('c_map','old map of Japan','Map of Japan 1855'),
 ('c_desk','notebook pen desk','Desk with notebook pens and glasses'),
 ('p_columns','Greek temple columns','Evening columns Zeus temple'),
 ('p_columns2','Greek temple columns','Didyma - Columns 03'),
 ('p_forge','blacksmith forge','Horseshoe Forge'),
 ('p_tools','workshop hand tools wall','Old tools on personal workshop wall.jpg'),
 ('p_glass','stained glass lamp','Stained glass lamp over table'),
 ('p_tokyo','Tokyo night street','Colorful neon street signs'),
 ('j_fuji','Mount Fuji lake sunset','Lake Kawaguchiko and Mount Fuji at sunset'),
 ('j_tent','tent under stars forest night','Dark Canyon Stars and Tent'),
 ('j_hut','mountain hut Japan Alps','Sunset from Kitadake'),
 ('j_mist','mist forest morning','Glenbranter forest'),
 ('j_stars','tent camping meadow','Camping under trillion stars'),
 ('d_tokyo','Tokyo night street','Buildings with colorful neon street signs at blue hour'),
 ('d_scope','observatory telescope night','Tsing Hua University Observatory'),
 ('d_desk','notebook pen desk','Reading materials on a desk'),
 ('j_cedar','cedar forest Japan path','Nikko forest walk'),
 ('j_suitcase','vintage suitcase travel','Belber Suitcase.jpg'),
 ('j_airmail','airmail envelope stamps','1958 US Airmail Stamped Envelope'),
 ('p_chawan','Japanese pottery tea bowl','Raku chawan Guimet'),
 ('p_washi','washi paper','Washi(Sugihara paper)'),
 ('d_market','flea market stall','Sclater Street Brick Lane Market'),
 ('d_typewriter','typewriter','Olympia Simplex'),
 ('d_stove','camping stove cookware','A Long Way from Green Spring'),
]
only=set(sys.argv[1:])
meta=json.load(open('photos.json')) if os.path.exists('photos.json') else {}
for key,q,sub in LIST:
    if (only and key not in only) or (key in meta and not only): continue
    try:
        time.sleep(2.5)
        res=commons.search(q,n=12)
        hit=next((r for r in res if sub.lower() in r['title'].lower()),None)
        if not hit: print('NO MATCH',key); continue
        time.sleep(1.5)
        req=urllib.request.Request(hit['thumb'],headers=commons.UA)
        for k in range(5):
            try: data=urllib.request.urlopen(req,timeout=60).read(); break
            except urllib.error.HTTPError as e:
                if e.code!=429: raise
                time.sleep(10*(k+1))
        im=Image.open(io.BytesIO(data)).convert('RGB')
        im.thumbnail((1100,1100))
        im.save(f'photos/{key}.jpg',quality=68,optimize=True,progressive=True)
        meta[key]={k:hit[k] for k in ('title','artist','lic','page','w','h')}
        json.dump(meta,open('photos.json','w'),ensure_ascii=False,indent=1)
        print('OK',key,im.size,os.path.getsize(f'photos/{key}.jpg')//1000,'KB',hit['lic'])
    except Exception as e: print('ERR',key,e)
