#!/usr/bin/env python3
"""Search Wikimedia Commons; print candidates with license and size."""
import sys, json, urllib.parse, urllib.request, re, html
UA={'User-Agent':'TheThirdPlaceDesignStudy/1.0 (private research; contact via repo owner)'}
def api(params):
    url='https://commons.wikimedia.org/w/api.php?'+urllib.parse.urlencode({**params,'format':'json'})
    import time
    for k in range(6):
        try: return json.load(urllib.request.urlopen(urllib.request.Request(url,headers=UA),timeout=40))
        except urllib.error.HTTPError as e:
            if e.code!=429: raise
            time.sleep(8*(k+1))
    raise RuntimeError('rate limited')
def search(q,n=7):
    d=api({'action':'query','generator':'search','gsrsearch':f'filetype:bitmap {q}','gsrnamespace':6,'gsrlimit':n,'prop':'imageinfo','iiprop':'url|extmetadata|size|mime','iiurlwidth':1000})
    out=[]
    for p in (d.get('query',{}).get('pages',{}) or {}).values():
        ii=p['imageinfo'][0]; m=ii['extmetadata']
        lic=m.get('LicenseShortName',{}).get('value','?')
        art=re.sub('<[^>]+>','',m.get('Artist',{}).get('value','?'))
        out.append(dict(title=p['title'],w=ii['width'],h=ii['height'],lic=lic,artist=html.unescape(art)[:50],thumb=ii['thumburl'],page=ii['descriptionurl'],idx=p.get('index',0)))
    return sorted(out,key=lambda x:x['idx'])
if __name__=='__main__':
    for q in sys.argv[1:]:
        print('##',q); import time; time.sleep(2.5)
        try:
            for r in search(q): print(f"  {r["title"][5:60]:55} {r['w']}x{r['h']} {r['lic']:14} {r["artist"][:22]}")
        except Exception as e: print('  ERR',e)
