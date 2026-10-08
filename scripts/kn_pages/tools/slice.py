import sys
from PIL import Image
Image.MAX_IMAGE_PIXELS=None
src,out,cols,hh=sys.argv[1],sys.argv[2],int(sys.argv[3]),int(sys.argv[4])
im=Image.open(src); W,H=im.size
n=(H+hh-1)//hh
tiles=[im.crop((0,i*hh,W,min(H,(i+1)*hh))) for i in range(n)]
# group into sheets of `cols` tiles side by side
for s in range(0,n,cols):
    grp=tiles[s:s+cols]
    sh=Image.new('RGB',(W*len(grp),hh),'white')
    for k,t in enumerate(grp): sh.paste(t,(k*W,0))
    sh.save(f'{out}_{s//cols}.png')
print('tiles',n,'sheets',(n+cols-1)//cols,'full',W,H)
