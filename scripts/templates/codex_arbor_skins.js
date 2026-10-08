/* Arbor of the Third Place — design engine.
   Seven designs share one page and one body of data. A design is (1) a stylesheet (codex_arbor_skins.css),
   (2) a voice for the page's own wording (codex_arbor_skins_text.js), and (3) a way of drawing the document
   tree, defined below: Original = illuminated lights, 地形図 = summits and contours, 星図 = polar star chart,
   建築 = elevation drawing, 植物図譜 = botanical plate, 年輪 = wedge of a trunk, 標本棚 = specimen cabinet.
   Nothing here carries repository data: every figure is read from DATA / DOCS at run time. */

let SKIN="orig";
const SKIN_KEY="arbor-skin";
const root=document.documentElement;

/* series colours per design (dark grounds keep the original bright set) */
const PALS={
  s1:{DS:"#7a5c1e",OP:"#9a6b12",DB:"#2f6d9a",MD:"#c0561f",BR:"#9a3f7c",CZ:"#2f7a58",KN:"#6b4fb0"},
  s2:{DS:"#fff3c9",OP:"#ffd479",DB:"#9fd0ff",MD:"#ff9a5c",BR:"#f0a0d8",CZ:"#8fe3b8",KN:"#b9a4ff"},
  s3:{DS:"#26323f",OP:"#1e4f8a",DB:"#0e7490",MD:"#b8341f",BR:"#7a2f78",CZ:"#1f6f4a",KN:"#5b3fa6"},
  s4:{DS:"#b79a3c",OP:"#7a8f3a",DB:"#5d86a8",MD:"#c8643a",BR:"#a9577f",CZ:"#4f8f6b",KN:"#8466ad"},
  s5:{DS:"#f4dca0",OP:"#e2a54a",DB:"#8fb7c9",MD:"#e8743b",BR:"#c9769f",CZ:"#8fb98a",KN:"#b09ad0"}
};
const ROOTCS={orig:"#e8dcc4",s1:"#6e6350",s2:"#cfd8ff",s3:"#555f6b",s4:"#7a6a54",s5:"#d8c3a0",s6:"#e8dcc4"};
const SC=s=>(PALS[SKIN]||COLOR)[s];
const ROOTC=()=>ROOTCS[SKIN]||"#e8dcc4";
const V=(k,d)=>{const D=TX[SKIN];return D&&D[k]!==undefined?D[k]:d};

/* ------------------------------------------------------------------ static wording */
function applyStatic(){
  const D=TX[SKIN]||null;
  document.querySelectorAll("[data-i]").forEach(e=>{
    if(e.dataset.o===undefined)e.dataset.o=e.innerHTML;
    const v=D?D[e.dataset.i]:undefined;
    let out=e.dataset.o;
    if(v!==undefined){ out=Array.isArray(v)?v[0]:v }
    else if(D&&/^tab\d$/.test(e.dataset.i)&&D.tab){ out=D.tab[+e.dataset.i.slice(3)-1] }
    e.innerHTML=out;
  });
  document.querySelectorAll("[data-ip]").forEach(e=>{
    if(e.dataset.o===undefined)e.dataset.o=e.getAttribute("placeholder");
    const v=D?D[e.dataset.ip]:undefined;
    e.setAttribute("placeholder",v!==undefined?v:e.dataset.o);
  });
  document.querySelectorAll("[data-b]").forEach(e=>{
    if(e.dataset.o===undefined)e.dataset.o=e.innerHTML;
    const [n,f]=e.dataset.b.split("."), row=D&&D.B?D.B[+n-1]:null;
    let out=e.dataset.o;
    if(row){
      const F={k:row[0],name:row[1],ja:row[2],ja2:row[3],ini:row[4],ct:row[5]};
      if(f==="run")out=`${row[0]} · ${row[1]}`;
      else if(F[f]!==null&&F[f]!==undefined)out=F[f];
    }
    e.innerHTML=out;
  });
  document.querySelectorAll(".thumbs a").forEach(a=>{
    const n=+a.getAttribute("href").replace("#liber-",""), row=D&&D.B?D.B[n-1]:null;
    if(!a.dataset.o)a.dataset.o=a.title;
    a.title=row?`${row[0]} · ${row[1]} ${row[2]}`:a.dataset.o;
  });
}

/* ------------------------------------------------------------------ small tools */
const rng=seed=>()=>{seed|=0;seed=seed+0x6D2B79F5|0;let x=Math.imul(seed^seed>>>15,1|seed);x=x+Math.imul(x^x>>>7,61|x)^x;return((x^x>>>14)>>>0)/4294967296};
const hash=s=>{let h=2166136261;for(let i=0;i<s.length;i++){h^=s.charCodeAt(i);h=Math.imul(h,16777619)}return(h>>>0)};
function vnoise(seed){
  const r=rng(seed),P=new Float32Array(65536);for(let i=0;i<P.length;i++)P[i]=r();
  const g=(x,y)=>P[((y&255)<<8)|(x&255)];
  const n=(x,y)=>{const xi=Math.floor(x),yi=Math.floor(y),xf=x-xi,yf=y-yi,u=xf*xf*(3-2*xf),v=yf*yf*(3-2*yf);
    return g(xi,yi)*(1-u)*(1-v)+g(xi+1,yi)*u*(1-v)+g(xi,yi+1)*(1-u)*v+g(xi+1,yi+1)*u*v};
  return (x,y)=>(n(x,y)*.55+n(x*2.1+7,y*2.1+3)*.3+n(x*4.3+1,y*4.3+9)*.15);
}
/* marching squares: one SVG path per level */
function contours(f,W,H,cell,levels){
  const nx=Math.ceil(W/cell)+1, ny=Math.ceil(H/cell)+1, v=new Float32Array(nx*ny);
  for(let j=0;j<ny;j++)for(let i=0;i<nx;i++)v[j*nx+i]=f(i*cell,j*cell);
  return levels.map(Lv=>{
    let d="";
    for(let j=0;j<ny-1;j++)for(let i=0;i<nx-1;i++){
      const a=v[j*nx+i],b=v[j*nx+i+1],c=v[(j+1)*nx+i+1],e=v[(j+1)*nx+i];
      const idx=(a>Lv?8:0)|(b>Lv?4:0)|(c>Lv?2:0)|(e>Lv?1:0);
      if(idx===0||idx===15)continue;
      const x=i*cell,y=j*cell,lp=(p,q)=>(Lv-p)/(q-p);
      const T=[x+cell*lp(a,b),y],R=[x+cell,y+cell*lp(b,c)],B=[x+cell*lp(e,c),y+cell],Lf=[x,y+cell*lp(a,e)];
      const sg=(p,q)=>{d+=`M${p[0].toFixed(1)} ${p[1].toFixed(1)}L${q[0].toFixed(1)} ${q[1].toFixed(1)}`};
      switch(idx){case 1:case 14:sg(Lf,B);break;case 2:case 13:sg(B,R);break;case 3:case 12:sg(Lf,R);break;case 4:case 11:sg(T,R);break;
        case 5:sg(Lf,T);sg(B,R);break;case 6:case 9:sg(T,B);break;case 7:case 8:sg(Lf,T);break;case 10:sg(Lf,B);sg(T,R);break}
    }
    return d;
  });
}

/* ------------------------------------------------------------------ page background (drawn, not photographed) */
const BG_MAKE={
  s1(){
    const f=vnoise(11), W=900, H=1500;
    const levels=[];for(let v=.27;v<.78;v+=.03)levels.push(v);
    const ps=contours((x,y)=>f(x/230,y/230),W,H,10,levels);
    return `<svg viewBox="0 0 ${W} ${H}" preserveAspectRatio="xMidYMin slice"><g fill="none" stroke-linecap="round">${ps.map((d,i)=>`<path d="${d}" class="${i%5===2?"ix":"cx"}"/>`).join("")}</g></svg>`;
  },
  s2(){
    const r=rng(5);let out="";
    for(let i=0;i<420;i++){const x=r()*1000,y=r()*1000,m=r(),s=m>.97?1.7:m>.85?1.05:.55;out+=`<circle cx="${x.toFixed(1)}" cy="${y.toFixed(1)}" r="${s}" opacity="${(.25+r()*.75).toFixed(2)}"/>`}
    for(let i=0;i<14;i++){const x=r()*1000,y=r()*1000;out+=`<path d="M${x-7} ${y}H${x+7}M${x} ${y-7}V${y+7}" class="sp"/>`}
    return `<svg viewBox="0 0 1000 1000" preserveAspectRatio="xMidYMid slice"><g class="st">${out}</g></svg>`;
  },
  s5(){
    const n=vnoise(23), cx=-40, cy=260;let out="";
    for(let R=46,k=0;R<1900;R+=34+(k%4)*7,k++){
      let d="";
      for(let a=0;a<=96;a++){const th=a/96*Math.PI*2,w=1+.075*(n(Math.cos(th)*1.6+k*.37,Math.sin(th)*1.6)-.5)*2+.02*Math.sin(th*3+k);
        d+=(a?"L":"M")+(cx+Math.cos(th)*R*w*1.05).toFixed(1)+" "+(cy+Math.sin(th)*R*w*.94).toFixed(1)}
      out+=`<path d="${d}Z" class="${k%6===3?"ix":"cx"}"/>`;
    }
    return `<svg viewBox="0 0 1000 1600" preserveAspectRatio="xMidYMin slice"><g fill="none">${out}</g></svg>`;
  }
};
const BG_CACHE={};
function setBg(){
  const h=$("skinbg"), mk=BG_MAKE[SKIN];
  h.innerHTML=mk?(BG_CACHE[SKIN]||(BG_CACHE[SKIN]=mk())):"";
}

/* ------------------------------------------------------------------ tree: shared plumbing */
const TIER_LIST=["I","II","III","IV","V","VI","VII","VIII","IX"];
const SOFT=`<filter id="soft" x="-50%" y="-50%" width="200%" height="200%"><feGaussianBlur stdDeviation="4"/></filter>
  <filter id="halo" x="-100%" y="-100%" width="300%" height="300%"><feGaussianBlur stdDeviation="14"/></filter>
  <filter id="spec" x="-50%" y="-50%" width="200%" height="200%"><feGaussianBlur stdDeviation="1.6"/></filter>`;
const placedByTier=()=>{const m={};TIER_LIST.forEach(x=>m[x]=[]);ORDER.forEach(id=>{const p=L[id];if(p&&!p.root&&DOCS[id]&&p.t)m[p.t].push(id)});return m};
const rootIds=()=>Object.keys(L).filter(k=>L[k].root&&DOCS[k]);
const vol=id=>DOCS[id].volatility||"Static";
function newTree(vb){
  svg=$("tree"); svg.innerHTML=""; svg.classList.remove("focus"); svg.setAttribute("viewBox",vb);
  const defs=el("defs",{},svg); defs.innerHTML=SOFT;
  const back=el("g",{},svg), edges=el("g",{},svg); gThreads=el("g",{},svg); const nodes=el("g",{},svg);
  nodeEls={}; edgeEls=[];
  return {defs,back,edges,nodes};
}
function wire(g,id){
  g.addEventListener("click",()=>select(id,true));
  g.addEventListener("keydown",e=>{if(e.key==="Enter"||e.key===" "){e.preventDefault();select(id,true)}});
  g.addEventListener("mouseenter",()=>{if(matchMedia("(hover:hover)").matches)highlight(id)});
  g.addEventListener("mouseleave",()=>{if(matchMedia("(hover:hover)").matches)highlight(current)});
  nodeEls[id]=g;
}
function nodeGroup(parent,id,p,hit){
  const d=DOCS[id];
  const g=el("g",{class:`node v-${vol(id)}`,transform:`translate(${p.x},${p.y})`,tabindex:"0",role:"button","aria-label":`${id} ${d.title}`,"data-id":id},parent);
  hit(g); wire(g,id); return g;
}
const hitCircle=r=>g=>el("circle",{class:"hit",r:r+18},g);
const hitRect=(w,h)=>g=>el("rect",{class:"hit",x:-w/2-6,y:-h/2-6,width:w+12,height:h+12},g);
function curve(a,b,k=.12,cap=40){
  const dx=b.x-a.x, dy=b.y-a.y, len=Math.hypot(dx,dy)||1, ux=dx/len, uy=dy/len;
  const s={x:a.x+ux*((a.r||0)+6),y:a.y+uy*((a.r||0)+6)}, e={x:b.x-ux*((b.r||0)+6),y:b.y-uy*((b.r||0)+6)};
  const bend=Math.min(cap,len*k), nx=-uy*bend, ny=ux*bend;
  return `M${s.x.toFixed(1)},${s.y.toFixed(1)} Q${((s.x+e.x)/2+nx).toFixed(1)},${((s.y+e.y)/2+ny).toFixed(1)} ${e.x.toFixed(1)},${e.y.toFixed(1)}`;
}
const liveEdges=()=>EDGES.filter(([f,tt])=>POS[f]&&POS[tt]&&DOCS[f]&&DOCS[tt]);
function addEdges(g,pathFn,o={}){
  liveEdges().forEach(([f,tt,label,src,kind],i)=>{
    const eg=el("g",{class:"edge"+(kind?" "+kind:"")},g);
    const d=pathFn(POS[f],POS[tt],kind,i);
    const ln=el("path",{d,class:"line"},eg);
    if(o.arrow&&!kind)ln.setAttribute("marker-end","url(#arr)");
    edgeEls.push({g:eg,f,t:tt,label,src,kind});
  });
}
function rings(a,mk){
  if(a==="SSOT"){mk(6);mk(10)}
  else if(a==="Standard")mk(6);
  else if(a==="Reference")mk(6,{"stroke-dasharray":"6 5"});
  else if(a==="Archive")mk(6,{"stroke-dasharray":"1 4","stroke-linecap":"round","stroke-width":"1.6"});
}
function tierLabel(parent,n,x,y,anchor,withName=true){
  const tx=el("text",{x,y,"text-anchor":anchor,class:"tier"},parent);
  const a=el("tspan",{class:"num"},tx); a.textContent=n;
  if(withName){const b=el("tspan",{class:"lbl",dx:"8",dy:"-4"},tx); b.textContent=TIERS[n].en.toUpperCase()}
  return tx;
}
function wrapTitle(lines,max){
  const out=[];
  lines.forEach(ln=>{
    if(ln.length<=max){out.push(ln);return}
    const w=ln.split(" ");let cur="";
    w.forEach(x=>{if((cur+" "+x).trim().length>max&&cur){out.push(cur);cur=x}else cur=(cur+" "+x).trim()});
    if(cur)out.push(cur);
  });
  return out;
}
function nodeText(g,id,o){
  const p=L[id], c=colorOf(id);
  if(p.pre&&o.pre!==false){const tt=el("text",{x:o.x||0,y:o.preY!==undefined?o.preY:-60,"text-anchor":o.anchor||"middle",class:"ttl pre"},g);tt.textContent=p.pre}
  const idt=el("text",{x:o.x||0,y:o.y,"text-anchor":o.anchor||"middle",class:"id",fill:c},g);idt.textContent=p.root?"ROOT":id;
  const lines=o.wrap?wrapTitle(p.lines,o.wrap):p.lines;
  lines.forEach((ln,i)=>{const tt=el("text",{x:o.x||0,y:o.y+(o.t0||20)+i*(o.step||19),"text-anchor":o.anchor||"middle",class:"ttl"},g);tt.textContent=ln});
}
const selMark=(g,r)=>el("circle",{class:"selmark",r:r+13},g);
const selRect=(g,w,h)=>el("rect",{class:"selmark",x:-w/2-4,y:-h/2-4,width:w+8,height:h+8},g);

/* ------------------------------------------------------------------ node bodies, one per design */
const SHAPES={
  /* 地形図: a summit; a flag says how often it changes */
  s1(g,o){
    const r=o.r,c=o.c,by=r*.8,bx=r*1.15,ry=r*1.3;
    if(o.root){el("rect",{class:"orb bm",x:-r,y:-r,width:2*r,height:2*r,fill:c},g);el("path",{class:"spec bmx",d:`M${-r},0H${r}M0,${-r}V${r}`},g);return}
    rings(o.auth,(off,x)=>el("ellipse",Object.assign({class:"ring",cx:0,cy:by,rx:bx+off+2,ry:r*.42+off*.6},x||{}),g));
    el("path",{class:"orb tri",d:`M0,${-ry}L${bx},${by}L${-bx},${by}Z`,fill:c},g);
    el("path",{class:"spec shade",d:`M0,${-ry}L${bx},${by}L${bx*.12},${by}Z`},g);
    if(r>=20)el("path",{class:"spec snow",d:`M0,${-ry}L${bx*.36},${-ry+(ry+by)*.32}L${bx*.1},${-ry+(ry+by)*.27}L${-bx*.14},${-ry+(ry+by)*.36}L${-bx*.36},${-ry+(ry+by)*.32}Z`},g);
    if(o.vol!=="Static"){
      const fh=r*.8+9;
      el("path",{class:"spec pole",d:`M0,${-ry}V${-ry-fh}`},g);
      el("path",{class:"spec flag",d:`M0,${-ry-fh}l${fh*.95},${fh*.26}L0,${-ry-fh*.5}Z`},g);
    }
  },
  /* 星図: magnitude is the size; four spikes; living documents twinkle */
  s2(g,o){
    const r=o.r,c=o.c,k=r*2.6;
    if(o.root){el("path",{class:"orb",d:`M0,${-r*1.6}L${r*1.6},0L0,${r*1.6}L${-r*1.6},0Z`,fill:"none",stroke:c,"stroke-width":1.3},g);return}
    el("circle",{class:"halo",r:r*2.6,fill:c,filter:"url(#halo)"},g);
    el("path",{class:"spec spk",d:`M0,${-k}L${r*.26},${-r*.26}L${k},0L${r*.26},${r*.26}L0,${k}L${-r*.26},${r*.26}L${-k},0L${-r*.26},${-r*.26}Z`,fill:c},g);
    el("circle",{class:"orb",r:r,fill:c},g);
    el("circle",{class:"spec core",r:r*.46,fill:"#fff"},g);
    rings(o.auth,(off,x)=>el("circle",Object.assign({class:"ring",r:r*1.5+off+2},x||{}),g));
  },
  /* 建築: a room; walls say authority, hatching says how often it is revised */
  s3(g,o){
    const w=o.w,h=o.h,x=-w/2,y=-h/2;
    const dash=o.auth==="Reference"?"7 4":o.auth==="Archive"?"2 4":null;
    const body=el("rect",{class:"orb room",x,y,width:w,height:h},g);
    if(dash)body.setAttribute("stroke-dasharray",dash);
    if(o.root)el("rect",{class:"spec hatch",x,y,width:w,height:h,fill:"url(#h-Living)"},g);
    else if(o.vol==="Living")el("rect",{class:"spec hatch",x,y,width:w,height:h,fill:"url(#h-Living)"},g);
    else if(o.vol==="Periodic")el("rect",{class:"spec hatch",x,y,width:w,height:h,fill:"url(#h-Periodic)"},g);
    if(o.auth==="SSOT")el("rect",{class:"ring",x:x+5,y:y+5,width:w-10,height:h-10},g);
    el("rect",{class:"spec tab",x,y,width:8,height:h,fill:o.c},g);
  },
  /* 植物図譜: seed / fruit = static, leaf = periodic, flower = living */
  s4(g,o){
    const r=o.r,c=o.c,rot=o.rot||0;
    if(o.root){el("ellipse",{class:"orb tuber",rx:r*1.3,ry:r*.85,fill:c,transform:`rotate(${rot})`},g);el("path",{class:"spec rootlet",d:`M${-r*1.2},0C${-r*2},${r*.6} ${-r*2.2},${r*1.2} ${-r*2.8},${r*1.4}M${r*1.2},0C${r*2},${r*.6} ${r*2.2},${r*1.2} ${r*2.8},${r*1.4}`},g);return}
    rings(o.auth,(off,x)=>el("circle",Object.assign({class:"ring",r:r*1.5+off*.8},x||{}),g));
    if(o.vol==="Static"){
      el("path",{class:"spec stem",d:`M0,${-r}C${r*.2},${-r*1.5} ${r*.6},${-r*1.7} ${r*.9},${-r*1.8}`},g);
      el("circle",{class:"orb fruit",r:r,fill:c},g);
      el("ellipse",{class:"spec gloss",cx:-r*.32,cy:-r*.34,rx:r*.28,ry:r*.16,transform:`rotate(-35 ${-r*.32} ${-r*.34})`},g);
      el("path",{class:"spec calyx",d:`M0,${-r*.92}l${-r*.4},${-r*.22}M0,${-r*.92}l${r*.4},${-r*.22}M0,${-r*.92}l0,${-r*.34}`},g);
    }else if(o.vol==="Periodic"){
      const q=el("g",{transform:`rotate(${rot})`},g), l=r*1.5, wd=r*.95;
      el("path",{class:"orb leaf",d:`M0,${-l}C${wd},${-l*.5} ${wd},${l*.5} 0,${l}C${-wd},${l*.5} ${-wd},${-l*.5} 0,${-l}Z`,fill:c},q);
      el("path",{class:"spec vein",d:`M0,${-l}V${l*1.15}M0,${-l*.3}L${wd*.6},${-l*.62}M0,${l*.1}L${wd*.7},${-l*.22}M0,${l*.45}L${wd*.55},${l*.18}M0,${-l*.3}L${-wd*.6},${-l*.62}M0,${l*.1}L${-wd*.7},${-l*.22}M0,${l*.45}L${-wd*.55},${l*.18}`},q);
    }else{
      const q=el("g",{transform:`rotate(${rot})`},g);
      for(let k=0;k<5;k++)el("ellipse",{class:"orb petal",cx:0,cy:-r*.78,rx:r*.5,ry:r*.82,fill:c,transform:`rotate(${k*72})`},q);
      el("circle",{class:"spec heart",r:r*.34},q);
    }
  },
  /* 年輪: a knot in the grain; living knots breathe */
  s5(g,o){
    const r=o.r,c=o.c,rot=o.rot||0;
    if(o.root){el("path",{class:"orb chip",d:`M${-r},${-r*.4}L${-r*.3},${-r}L${r},${-r*.5}L${r*.8},${r*.8}L${-r*.5},${r}Z`,fill:c},g);return}
    rings(o.auth,(off,x)=>el("ellipse",Object.assign({class:"ring",rx:r*1.25+off+2,ry:r*.95+off+2,transform:`rotate(${rot})`},x||{}),g));
    const q=el("g",{transform:`rotate(${rot})`},g);
    el("ellipse",{class:"orb knot",rx:r*1.25,ry:r*.95,fill:c},q);
    [.78,.55,.3].forEach(k=>el("ellipse",{class:"spec kr",rx:r*1.25*k,ry:r*.95*k},q));
    if(o.vol==="Living")el("path",{class:"spec crack",d:`M${r*1.25},0l${r*.7},${-r*.2}M${-r*1.25},0l${-r*.7},${r*.25}M0,${-r*.95}l${r*.1},${-r*.6}`},q);
  },
  /* 標本棚: a pinned specimen; heavy pin = static, small needle = living */
  s6(g,o){
    const r=o.r,c=o.c;
    if(o.root){el("rect",{class:"orb vial",x:-r*.8,y:-r*1.1,width:r*1.6,height:r*2.2,rx:r*.3,fill:c},g);el("rect",{class:"spec cork",x:-r*.9,y:-r*1.3,width:r*1.8,height:r*.4,rx:2},g);return}
    rings(o.auth,(off,x)=>el("circle",Object.assign({class:"ring",r:r+off+2},x||{}),g));
    const q=el("g",{class:"pinned"},g);
    el("ellipse",{class:"spec shadow",cx:r*.35,cy:r*.45,rx:r,ry:r*.72},q);
    el("circle",{class:"orb disc",r:r,fill:c},q);
    el("circle",{class:"spec gloss",cx:-r*.3,cy:-r*.32,r:r*.28},q);
    const hd=o.vol==="Static"?r*.5:o.vol==="Periodic"?r*.36:r*.22;
    el("circle",{class:"spec head",r:hd},q);
  }
};

/* ------------------------------------------------------------------ tree: the seven drawings */
function treeOrig(){
  POS=L;
  const {defs,back,edges,nodes}=newTree("0 0 1000 1790");
  defs.innerHTML+=`
  <linearGradient id="flare" x1="0" x2="1" y1="0" y2="0"><stop offset="0" stop-color="#ffe9c0" stop-opacity="0"/><stop offset=".5" stop-color="#fff6e2" stop-opacity=".85"/><stop offset="1" stop-color="#ffe9c0" stop-opacity="0"/></linearGradient>
  <linearGradient id="pillar" x1="0" x2="0" y1="0" y2="1"><stop offset="0" stop-color="#f6dca0" stop-opacity="0"/><stop offset=".25" stop-color="#f6dca0" stop-opacity=".07"/><stop offset=".8" stop-color="#f6dca0" stop-opacity=".04"/><stop offset="1" stop-color="#f6dca0" stop-opacity="0"/></linearGradient>
  <radialGradient id="crown" cx=".5" cy=".5" r=".5"><stop offset="0" stop-color="#fff6e0" stop-opacity=".35"/><stop offset=".4" stop-color="#f3e3b8" stop-opacity=".09"/><stop offset="1" stop-color="#f3e3b8" stop-opacity="0"/></radialGradient>`;
  Object.entries(COLOR).concat([["root","#e8dcc4"]]).forEach(([k,c])=>{
    const g=el("radialGradient",{id:"orb-"+k,cx:".5",cy:".5",r:".5",fx:".36",fy:".32"},defs);
    [["0","#fffdf6",1],[".16",c,1],[".58",c,.55],[".86","#0a0b10",.85],["1","#05060a",.95]].forEach(([o,sc,so])=>el("stop",{offset:o,"stop-color":sc,"stop-opacity":so},g));
  });
  el("circle",{cx:500,cy:130,r:210,fill:"url(#crown)"},back);
  [150,178].forEach(r=>el("circle",{cx:500,cy:130,r,fill:"none",stroke:"#d6a74e","stroke-opacity":r===150?.18:.10,"stroke-width":.8,"stroke-dasharray":r===150?"":"2 6"},back));
  [[240,"PILLAR OF SENSE · 感性"],[500,"PILLAR OF ORIGIN · 原点"],[760,"PILLAR OF ORDER · 規律"]].forEach(([x,tx])=>{
    el("rect",{x:x-46,y:360,width:92,height:820,fill:"url(#pillar)"},back);
    const e=el("text",{x,y:x===500?1180:600,"text-anchor":"middle",class:"pillar-label"},back);e.textContent=tx;
  });
  [["I",130,"l"],["II",300,"l"],["III",420,"l"],["IV",470,"r"],["V",585,"l"],["VI",650,"l"],["VII",1235,"l"],["VIII",1250,"r"],["IX",1520,"l"]].forEach(([n,y,side])=>{
    const x=side==="l"?18:982, anchor=side==="l"?"start":"end";
    const tx=el("text",{x,y,"text-anchor":anchor,class:"tier"},back);
    const a=el("tspan",{class:"num"},tx);a.textContent=n;
    const b=el("tspan",{class:"lbl",dx:"8",dy:"-4"},tx);b.textContent=TIERS[n].en.toUpperCase();
    if(side==="r"){tx.textContent="";const b2=el("tspan",{class:"lbl",dy:"-4"},tx);b2.textContent=TIERS[n].en.toUpperCase();const a2=el("tspan",{class:"num",dx:"8",dy:"4"},tx);a2.textContent=n}
  });
  liveEdges().forEach(([f,tt,label,src,kind],i)=>{
    const g=el("g",{class:"edge"+(kind?" "+kind:"")},edges), gid="eg"+i;
    const lg=el("linearGradient",{id:gid,gradientUnits:"userSpaceOnUse",x1:L[f].x,y1:L[f].y,x2:L[tt].x,y2:L[tt].y},defs);
    el("stop",{offset:"0","stop-color":colorOf(f)},lg);el("stop",{offset:"1","stop-color":colorOf(tt)},lg);
    const d=curve(L[f],L[tt]);
    el("path",{d,class:"glow",stroke:`url(#${gid})`},g);
    el("path",{d,class:"line",stroke:`url(#${gid})`},g);
    if(!kind){const sp=el("path",{d,class:"spark",stroke:"#fff3d6"},g);sp.style.animationDelay=(-(i*0.83)%7)+"s"}
    edgeEls.push({g,f,t:tt,label,src,kind});
  });
  Object.entries(L).forEach(([id,p])=>{
    if(!DOCS[id])return;
    const d=DOCS[id],c=colorOf(id),s=d.series;
    const g=nodeGroup(nodes,id,p,hitCircle(p.r));
    el("circle",{class:"halo",r:p.r*2.4,fill:c,filter:"url(#halo)"},g);
    if(id==="DS-001"||id==="MD-004"){const w=id==="DS-001"?300:170;el("rect",{x:-w/2,y:-1.2,width:w,height:2.4,fill:"url(#flare)",opacity:id==="DS-001"?.8:.45,class:"spec"},g)}
    el("circle",{class:"orb",r:p.r,fill:`url(#orb-${s==="root"?"root":s})`},g);
    el("ellipse",{class:"spec",cx:-p.r*.32,cy:-p.r*.42,rx:p.r*.34,ry:p.r*.18,fill:"#fff",opacity:.38,filter:"url(#spec)"},g);
    const a=d.authority;
    if(p.root)el("rect",{class:"ring",x:-p.r-5,y:-p.r-5,width:2*p.r+10,height:2*p.r+10,transform:"rotate(45)"},g);
    else rings(a,(off,x)=>el("circle",Object.assign({class:"ring",r:p.r+off},x||{}),g));
    nodeText(g,id,{y:p.r+(a==="SSOT"?30:26),preY:-p.r-26});
  });
}

function treeTopo(){
  POS=L;
  const {defs,back,edges,nodes}=newTree("0 0 1000 1790");
  const list=Object.keys(L).filter(k=>DOCS[k]&&!L[k].root);
  const ti=id=>TIER_LIST.indexOf(L[id].t);
  const A=id=>1.05-ti(id)*.085, sg=id=>58+L[id].r*2.3;
  const f=(x,y)=>{let h=.34*(1-y/1790)+.05*Math.sin(x/83+y/140);list.forEach(id=>{const p=L[id],s=sg(id),dx=x-p.x,dy=y-p.y;h+=A(id)*Math.exp(-(dx*dx+dy*dy)/(2*s*s))});return h};
  /* hypsometric tint: high ground pale, low ground green */
  const tints=["#f1e6c6","#ecdfb4","#e4d8a4","#d9d596","#cdd08c","#c2cc86","#b8c882","#aec47e","#a6c07c"];
  tints.forEach((c,i)=>{const g=el("radialGradient",{id:"tp"+i},defs);el("stop",{offset:"0","stop-color":c,"stop-opacity":.95},g);el("stop",{offset:"1","stop-color":c,"stop-opacity":0},g)});
  list.slice().reverse().forEach(id=>{const p=L[id];el("circle",{cx:p.x,cy:p.y,r:sg(id)*2.1,fill:`url(#tp${ti(id)})`,class:"tint"},back)});
  const lv=[];for(let v=.1;v<1.5;v+=.07)lv.push(v);
  contours(f,1000,1790,14,lv).forEach((d,i)=>{if(d)el("path",{d,class:i%5===3?"ix":"cx"},back)});
  for(let x=100;x<1000;x+=100){el("path",{d:`M${x},0V1790`,class:"grid"},back);const e=el("text",{x:x-50,y:1782,"text-anchor":"middle",class:"gridlab"},back);e.textContent="ABCDEFGHIJ"[x/100-1]||""}
  const e0=el("text",{x:950,y:1782,"text-anchor":"middle",class:"gridlab"},back);e0.textContent="J";
  for(let y=100;y<1790;y+=100){el("path",{d:`M0,${y}H1000`,class:"grid"},back);const e=el("text",{x:992,y:y-44,"text-anchor":"end",class:"gridlab"},back);e.textContent=y/100}
  [[240,"WEST RIDGE · 感性"],[500,"MAIN RIDGE · 原点"],[760,"EAST RIDGE · 規律"]].forEach(([x,tx],i)=>{
    const e=el("text",{x,y:x===500?1180:600,"text-anchor":"middle",class:"pillar-label"},back);e.textContent=(V("pil",null)||[tx])[i]||tx;
  });
  [["I",130],["II",300],["III",420],["IV",470],["V",585],["VI",650],["VII",1235],["VIII",1250],["IX",1520]].forEach(([n,y],i)=>{
    el("path",{d:`M0,${y}H${i%2?940:60}`,class:"bench"},back);
    tierLabel(back,n,i%2?982:18,y-8,i%2?"end":"start");
  });
  addEdges(edges,(a,b,kind)=>curve(a,b,.14,46));
  Object.keys(L).forEach(id=>{
    if(!DOCS[id])return;
    const p=L[id],d=DOCS[id],g=nodeGroup(nodes,id,p,hitCircle(p.r));
    SHAPES.s1(g,{r:p.r,c:colorOf(id),vol:vol(id),auth:d.authority,root:p.root});
    selMark(g,p.r);
    nodeText(g,id,{y:p.r*.8+p.r*.5+22,preY:-p.r*1.3-34});
  });
}

function treeStar(){
  const C={x:550,y:555}, RAD={I:0,II:96,III:166,IV:232,V:290,VI:356,VII:412,VIII:455,IX:492};
  const by=placedByTier(), fixed={"OP-001":322,"OP-002":284,"OP-008":352,"DB-001":18};
  const sector={VI:{OP:[280,354],MD:[30,102]},VII:{BR:[120,166]},VIII:{CZ:[184,203]},IX:{KN:[228,266]}};
  const ang={};
  TIER_LIST.forEach(tn=>{
    const ids=by[tn], grp={};
    ids.forEach(id=>{(grp[DOCS[id].series]=grp[DOCS[id].series]||[]).push(id)});
    Object.entries(grp).forEach(([s,arr])=>{
      arr.forEach((id,i)=>{
        if(fixed[id]!==undefined){ang[id]=fixed[id];return}
        const sec=(sector[tn]||{})[s]||[200,330];
        ang[id]=arr.length===1?(sec[0]+sec[1])/2:sec[0]+(sec[1]-sec[0])*(i/(arr.length-1));
      });
    });
  });
  const lines=DATA.docs.map(d=>d.lines), lo=Math.min(...lines), hi=Math.max(...lines);
  const P={};
  TIER_LIST.forEach(tn=>by[tn].forEach((id,i)=>{
    const a=(ang[id]!==undefined?ang[id]:(hash(id)%360))*Math.PI/180;
    let r=RAD[tn]; if(tn==="VI"&&by.VI.length>6)r+=(i%2?26:-26);
    const mag=4.2+9*Math.sqrt(Math.max(0,(DOCS[id].lines-lo))/(hi-lo||1));
    P[id]={x:C.x+r*Math.sin(a),y:C.y-r*Math.cos(a),r:mag,a:ang[id]||0};
  }));
  /* the roots sit in the lower corners, outside the sky */
  rootIds().forEach((id,i)=>{P[id]={x:78+i*944,y:1030,r:7}});
  POS=P;
  const {defs,back,edges,nodes}=newTree("0 0 1100 1100");
  /* sky, graticule */
  const rs=rng(9);
  for(let i=0;i<230;i++){const a=rs()*6.283,rr=Math.sqrt(rs())*505;el("circle",{cx:C.x+Math.cos(a)*rr,cy:C.y+Math.sin(a)*rr,r:.5+rs()*.9,class:"dust",opacity:(.15+rs()*.5).toFixed(2)},back)}
  el("circle",{cx:C.x,cy:C.y,r:512,class:"frame"},back);
  el("circle",{cx:C.x,cy:C.y,r:518,class:"frame thin"},back);
  Object.entries(RAD).forEach(([tn,r])=>{if(r)el("circle",{cx:C.x,cy:C.y,r,class:"grat"},back)});
  for(let d=0;d<360;d+=15){
    const a=d*Math.PI/180,s=Math.sin(a),c=Math.cos(a);
    if(d%30===0)el("path",{d:`M${C.x+s*70},${C.y-c*70}L${C.x+s*512},${C.y-c*512}`,class:"grat ray"},back);
    el("path",{d:`M${C.x+s*512},${C.y-c*512}L${C.x+s*(d%30===0?530:523)},${C.y-c*(d%30===0?530:523)}`,class:"tick"},back);
    if(d%30===0){const e=el("text",{x:C.x+s*544,y:C.y-c*544+4,"text-anchor":"middle",class:"gridlab"},back);e.textContent=(d/15)+"h"}
  }
  TIER_LIST.slice(1).forEach(tn=>{const e=tierLabel(back,tn,C.x+7,C.y-RAD[tn]-5,"start",false)});
  /* constellations: strongest mentions inside a series */
  const w=(a,b)=>(DOCS[a].refs[b]||0)+(DOCS[b].refs[a]||0);
  const bySer={};TIER_LIST.forEach(tn=>by[tn].forEach(id=>{(bySer[DOCS[id].series]=bySer[DOCS[id].series]||[]).push(id)}));
  Object.values(bySer).forEach(ids=>{
    if(ids.length<2)return;
    const inT=new Set([ids[0]]);
    while(inT.size<ids.length){
      let best=null,bs=-1;
      inT.forEach(a=>ids.forEach(b=>{if(inT.has(b))return;const s=w(a,b)+1e-4*(2000-Math.hypot(P[a].x-P[b].x,P[a].y-P[b].y));if(s>bs){bs=s;best=[a,b]}}));
      inT.add(best[1]);
      const [a,b]=best, ww=w(a,b), pa=P[a], pb=P[b], len=Math.hypot(pb.x-pa.x,pb.y-pa.y), ux=(pb.x-pa.x)/len, uy=(pb.y-pa.y)/len;
      el("path",{d:`M${pa.x+ux*(pa.r*1.6)},${pa.y+uy*(pa.r*1.6)}L${pb.x-ux*(pb.r*1.6)},${pb.y-uy*(pb.r*1.6)}`,class:"cline","stroke-width":(.8+.34*Math.sqrt(ww)).toFixed(2)},back);
    }
  });
  addEdges(edges,(a,b)=>curve(a,b,.08,60));
  [...TIER_LIST.flatMap(tn=>by[tn]),...rootIds()].forEach(id=>{
    const p=P[id],d=DOCS[id],g=nodeGroup(nodes,id,p,hitCircle(Math.max(p.r*1.6,14)));
    SHAPES.s2(g,{r:p.r,c:colorOf(id),vol:vol(id),auth:d.authority,root:L[id].root});
    selMark(g,p.r*1.6);
    if(L[id].root){nodeText(g,id,{y:30,pre:false});return}
    /* labels run away from the star along its bearing (outward; the outer rings point inward) */
    const tn=L[id].t, a=(p.a||0)*Math.PI/180, sgn=(tn==="VII"||tn==="VIII"||tn==="IX")?-1:1;
    const ux=tn==="I"?1:sgn*Math.sin(a), uy=tn==="I"?0:-sgn*Math.cos(a), dist=p.r*2.2+12, nl=L[id].lines.length;
    const anchor=ux>.4?"start":ux<-.4?"end":"middle";
    const y=uy<-.4?uy*dist-19*nl-2:uy>.4?uy*dist+16:4+uy*dist*.4;
    nodeText(g,id,{x:ux*dist*(anchor==="middle"?.3:1),y,anchor,t0:19,pre:false});
  });
}

function treeArch(){
  const by=placedByTier(), rows=[];
  TIER_LIST.forEach(tn=>{const ids=by[tn];if(!ids.length)return;for(let i=0;i<ids.length;i+=6)rows.push({t:tn,ids:ids.slice(i,i+6),first:i===0})});
  const rr=rootIds(); if(rr.length)rows.push({t:null,ids:rr,first:true,root:true});
  const X0=130,X1=1056,CX=(X0+X1)/2,GAP=16,H=96,Y0=170,PITCH=150,P={};
  rows.forEach((row,ri)=>{
    const n=row.ids.length;
    const w=row.root?190:Math.min(n===1?340:n===2?300:n===3?270:n===4?220:180,Math.floor((X1-X0-GAP*(n-1))/n)), tot=n*w+(n-1)*GAP;
    row.ids.forEach((id,i)=>{P[id]={x:CX-tot/2+w/2+i*(w+GAP),y:Y0+ri*PITCH,w:w,h:row.root?72:H,r:Math.min(w,H)/2}});
    row.y=Y0+ri*PITCH;
  });
  POS=P;
  const VH=Y0+rows.length*PITCH+60;
  const {defs,back,edges,nodes}=newTree(`0 0 1100 ${VH}`);
  defs.innerHTML+=`<marker id="arr" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="8" markerHeight="8" orient="auto-start-reverse"><path d="M0,1L9,5L0,9Z" class="arrowhead"/></marker>
   <pattern id="h-Living" width="6" height="6" patternUnits="userSpaceOnUse" patternTransform="rotate(45)"><path d="M0,0V6" class="hatchln"/></pattern>
   <pattern id="h-Periodic" width="13" height="13" patternUnits="userSpaceOnUse" patternTransform="rotate(45)"><path d="M0,0V13" class="hatchln"/></pattern>`;
  /* sheet frame, title strip, levels */
  el("rect",{x:6,y:6,width:1088,height:VH-12,class:"sheet"},back);
  el("path",{d:`M6,70H1094`,class:"sheet"},back);
  const hd=el("text",{x:24,y:50,class:"sheetlab"},back);hd.textContent="ELEVATION · "+DATA.meta.repo+" · "+DATA.meta.commit+" · "+DATA.meta.generated;
  rows.forEach((row,ri)=>{
    const y=row.y;
    el("path",{d:`M20,${y+H/2+14}H1070`,class:"slab"},back);
    if(row.first&&row.t)tierLabel(back,row.t,24,y+8,"start",row.ids.length===1);
    else if(row.root){const e=el("text",{x:24,y:y+6,class:"tier"},back);const a=el("tspan",{class:"lbl"},e);a.textContent="ROOTS"}
    el("path",{d:`M1078,${y-H/2}V${y+H/2+14}M1072,${y-H/2}H1084M1072,${y+H/2+14}H1084`,class:"dim"},back);
    const e=el("text",{x:1089,y:y+3,class:"dimlab","text-anchor":"middle",transform:`rotate(-90 1089 ${y+3})`},back);e.textContent="×"+row.ids.length;
  });
  const lane=new Map();
  addEdges(edges,(a,b,kind,i)=>{
    const dy=b.y-a.y, o=((i%5)-2)*9, ax=a.x+Math.max(-a.w/2+14,Math.min(a.w/2-14,o)), bx=b.x+Math.max(-b.w/2+14,Math.min(b.w/2-14,-o));
    if(Math.abs(dy)<4){const ym=a.y-a.h/2-20-((i%3)*7);return `M${ax},${a.y-a.h/2}V${ym}H${bx}V${b.y-b.h/2-3}`}
    const dir=dy>0?1:-1, ya=a.y+dir*a.h/2, yb=b.y-dir*b.h/2-dir*3, ym=ya+dir*(18+((i*7)%5)*7);
    return `M${ax},${ya}V${ym}H${bx}V${yb}`;
  },{arrow:true});
  [...rows.flatMap(r=>r.ids)].forEach(id=>{
    const p=P[id],d=DOCS[id],g=nodeGroup(nodes,id,p,hitRect(p.w,p.h));
    SHAPES.s3(g,{w:p.w,h:p.h,c:colorOf(id),vol:vol(id),auth:d.authority,root:L[id].root});
    selRect(g,p.w,p.h);
    const max=Math.floor((p.w-26)/6.4);
    nodeText(g,id,{x:6,y:-p.h/2+25,anchor:"middle",t0:18,step:15,wrap:max,pre:false});
  });
}

function treeBot(){
  POS=L;
  const {defs,back,edges,nodes}=newTree("0 0 1000 1790");
  el("rect",{x:14,y:14,width:972,height:1762,class:"plate"},back);
  el("rect",{x:24,y:24,width:952,height:1742,class:"plate thin"},back);
  [["Arbor Tertii Loci",500,1760,"middle","plate-cap"],["ad nat. del.",960,1760,"end","plate-cap sm"]].forEach(([tx,x,y,a,c])=>{const e=el("text",{x,y,"text-anchor":a,class:c},back);e.textContent=tx});
  [[240,"ramus sinister · 感性"],[500,"truncus · 原点"],[760,"ramus dexter · 規律"]].forEach(([x,tx],i)=>{
    const e=el("text",{x,y:x===500?1180:600,"text-anchor":"middle",class:"pillar-label"},back);e.textContent=(V("pil",null)||[tx])[i]||tx;
  });
  [["I",130],["II",300],["III",420],["IV",470],["V",585],["VI",650],["VII",1235],["VIII",1250],["IX",1520]].forEach(([n,y],i)=>{
    tierLabel(back,n,i%2?972:40,y-8,i%2?"end":"start");
  });
  addEdges(edges,(a,b)=>curve(a,b,.16,50));
  Object.keys(L).forEach((id,k)=>{
    if(!DOCS[id])return;
    const p=L[id],d=DOCS[id],g=nodeGroup(nodes,id,p,hitCircle(p.r*1.4));
    const rot=((hash(id)%70)-35);
    SHAPES.s4(g,{r:p.r*(vol(id)==="Static"?1:.95),c:colorOf(id),vol:vol(id),auth:d.authority,root:p.root,rot});
    selMark(g,p.r*1.4);
    nodeText(g,id,{y:p.r*1.4+22,preY:-p.r*1.6-28});
    const fg=ORDER.indexOf(id);
    if(fg>=0){const e=el("text",{x:p.r*1.5+8,y:-p.r*.6,class:"fig","text-anchor":"start"},g);e.textContent="fig. "+(fg+1)}
  });
}

function treeRings(){
  const by=placedByTier();
  const apex={x:500,y:40}, ROWR=[0,150,260,370,480,610,720,850,960,1070];
  const rows=[];
  TIER_LIST.forEach(tn=>{const ids=by[tn];if(!ids.length)return;for(let i=0;i<ids.length;i+=6)rows.push({t:tn,ids:ids.slice(i,i+6),first:i===0})});
  const P={}, alpha=.62;
  rows.forEach((row,ri)=>{
    const r=ROWR[Math.min(ri,ROWR.length-1)]+(ri>=ROWR.length?110*(ri-ROWR.length+1):0), n=row.ids.length;
    row.r=r;
    const wlim=Math.min(430,r*Math.sin(alpha)), sp=r?Math.min(150,2*wlim/n):0;
    row.ids.forEach((id,i)=>{
      const arc=(i-(n-1)/2)*sp, a=r?arc/r:0;
      P[id]={x:apex.x+r*Math.sin(a),y:apex.y+r*Math.cos(a),r:Math.max(16,Math.min(30,L[id].r*.9)),a};
    });
  });
  const lastR=rows.length?rows[rows.length-1].r:1070;
  rootIds().forEach((id,i)=>{P[id]={x:350+i*300,y:apex.y+lastR+135,r:13}});
  POS=P;
  const VH=Math.round(apex.y+lastR+235);
  const {defs,back,edges,nodes}=newTree(`0 0 1000 ${VH}`);
  const cp=el("clipPath",{id:"wedge"},defs);el("rect",{x:0,y:0,width:1000,height:VH},cp);
  const nz=vnoise(31);
  const bnd=[0]; rows.forEach((row,ri)=>{const nx=rows[ri+1];bnd.push(nx?(row.r+nx.r)/2:row.r+90)});
  const arc=(R,k,rev)=>{let d="";for(let s=0;s<=60;s++){const u=(rev?60-s:s)/60,a=(-alpha+2*alpha*u),w=1+.012*(nz(a*3+k*1.7,k*.9)-.5)*2*(R>0?1:0);
      d+=(d?"L":"M")+(apex.x+R*w*Math.sin(a)).toFixed(1)+","+(apex.y+R*w*Math.cos(a)).toFixed(1)}return d};
  const g0=el("g",{"clip-path":"url(#wedge)"},back);
  for(let k=bnd.length-2;k>=0;k--){
    const outer=bnd[k+1], inner=bnd[k];
    el("path",{d:arc(outer,k,false)+(inner>0?"L"+arc(inner,k,true).slice(1):`L${apex.x},${apex.y}`)+"Z",class:"band "+(k%2?"b1":"b0")},g0);
  }
  /* grain: fine lines inside every band */
  bnd.forEach((R,k)=>{if(R>0)el("path",{d:arc(R,k,false),class:"seam"},g0)});
  rows.forEach((row,ri)=>{const R0=bnd[ri],R1=bnd[ri+1];for(let q=1;q<4;q++){const R=R0+(R1-R0)*q/4;el("path",{d:arc(R,ri*5+q,false),class:"grain"},g0)}});
  const bark=bnd[bnd.length-1];
  el("path",{d:arc(bark,40,false)+"L"+arc(bark+46,41,true).slice(1)+"Z",class:"bark"},g0);
  for(let a=-alpha;a<=alpha+.001;a+=alpha/8){el("path",{d:`M${apex.x+(rows[0]?60:0)*Math.sin(a)},${apex.y+60*Math.cos(a)}L${apex.x+bark*Math.sin(a)},${apex.y+bark*Math.cos(a)}`,class:"rayline"},g0)}
  el("path",{d:`M${apex.x},${apex.y}L${apex.x+(bark+46)*Math.sin(-alpha)},${apex.y+(bark+46)*Math.cos(-alpha)}M${apex.x},${apex.y}L${apex.x+(bark+46)*Math.sin(alpha)},${apex.y+(bark+46)*Math.cos(alpha)}`,class:"cut"},g0);
  el("circle",{cx:apex.x,cy:apex.y,r:20,class:"pith"},back);
  rows.forEach(row=>{ if(row.first)tierLabel(back,row.t,18,apex.y+row.r+6,"start",row.ids.length<4) });
  addEdges(edges,(a,b)=>curve(a,b,.1,50));
  [...rows.flatMap(r=>r.ids),...rootIds()].forEach(id=>{
    const p=P[id],d=DOCS[id],g=nodeGroup(nodes,id,p,hitCircle(p.r*1.4));
    const rot=(hash(id)%60)-30;
    SHAPES.s5(g,{r:p.r,c:colorOf(id),vol:vol(id),auth:d.authority,root:L[id].root,rot});
    selMark(g,p.r*1.4);
    nodeText(g,id,{y:p.r*1.3+24,pre:false,wrap:15,t0:18,step:16});
  });
}

function treeCab(){
  const by=placedByTier(), rows=[];
  TIER_LIST.forEach(tn=>{const ids=by[tn];if(!ids.length)return;for(let i=0;i<ids.length;i+=6)rows.push({t:tn,ids:ids.slice(i,i+6),first:i===0})});
  const rr=rootIds(); if(rr.length)rows.push({t:null,ids:rr,first:true,root:true});
  const AX0=116,AX1=984,GAP=12,CH=124,Y0=96,PITCH=168,P={};
  rows.forEach((row,ri)=>{
    const n=row.ids.length, w=Math.min(row.root?220:200,Math.floor((AX1-AX0-GAP*(n-1))/n)), tot=n*w+(n-1)*GAP;
    row.y=Y0+ri*PITCH; row.w=w;
    row.ids.forEach((id,i)=>{const cx=(AX0+AX1)/2-tot/2+w/2+i*(w+GAP);P[id]={x:cx,y:row.y-22,cx,cy:row.y,w,r:Math.min(20,L[id].r*.85)}});
  });
  POS=P;
  const VH=Y0+rows.length*PITCH+20;
  const {defs,back,edges,nodes}=newTree(`0 0 1000 ${VH}`);
  rows.forEach(row=>{
    el("rect",{x:6,y:row.y-CH/2-16,width:988,height:CH+32,rx:7,class:"drawer"},back);
    el("rect",{x:12,y:row.y-CH/2-10,width:976,height:CH+20,rx:4,class:"drawer inner"},back);
    el("rect",{x:22,y:row.y-34,width:78,height:68,rx:3,class:"brass"+(row.first?"":" cont")},back);
    if(row.t){
      const tx=el("text",{x:61,y:row.y+8,"text-anchor":"middle",class:"tier"},back);const a=el("tspan",{class:"num"},tx);a.textContent=row.t;
      if(row.first){const tx2=el("text",{x:61,y:row.y+26,"text-anchor":"middle",class:"tier"},back);const b=el("tspan",{class:"lbl"},tx2);b.textContent=TIERS[row.t].en.toUpperCase().split(" ")[0]}
    }else{const tx=el("text",{x:61,y:row.y+5,"text-anchor":"middle",class:"tier"},back);const a=el("tspan",{class:"lbl"},tx);a.textContent="ROOTS"}
    row.ids.forEach(id=>{const p=P[id];el("rect",{x:p.cx-p.w/2,y:p.cy-CH/2,width:p.w,height:CH,rx:3,class:"cell"},back)});
  });
  addEdges(edges,(a,b)=>curve(a,b,.22,80));
  [...rows.flatMap(r=>r.ids)].forEach(id=>{
    const p=P[id],d=DOCS[id],g=nodeGroup(nodes,id,p,hitRect(p.w,CH));
    g.setAttribute("transform",`translate(${p.x},${p.y})`);
    SHAPES.s6(g,{r:p.r,c:colorOf(id),vol:vol(id),auth:d.authority,root:L[id].root});
    el("rect",{class:"card",x:-p.w/2+7,y:22,width:p.w-14,height:60,rx:2},g);
    selRect(g,p.w-6,CH-6).setAttribute("transform","translate(0,24)");
    const max=Math.floor((p.w-30)/6.6);
    nodeText(g,id,{y:42,anchor:"middle",t0:16,step:14,wrap:max,pre:false});
  });
}

const TREE={orig:treeOrig,s1:treeTopo,s2:treeStar,s3:treeArch,s4:treeBot,s5:treeRings,s6:treeCab};
function buildTree(){ (TREE[SKIN]||treeOrig)(); }

/* ------------------------------------------------------------------ legend (the glyphs follow the design) */
function legendGlyph(g,o){
  const k=SKIN;
  if(k==="orig"){
    el("circle",{r:7,fill:o.c,opacity:.95},g);el("circle",{r:12,fill:o.c,opacity:.16},g);
    const R=x=>el("circle",Object.assign({r:11,fill:"none",stroke:"#f6dca0","stroke-width":1},x||{}),g);
    if(o.auth==="SSOT"){R();el("circle",{r:14.5,fill:"none",stroke:"#f6dca0","stroke-width":1},g)}
    else if(o.auth==="Standard")R();
    else if(o.auth==="Reference")R({"stroke-dasharray":"4 3"});
    else if(o.auth==="Archive")R({"stroke-dasharray":"1 3","stroke-linecap":"round"});
    return;
  }
  const S={s1:{r:8},s2:{r:4.4},s3:{w:22,h:15},s4:{r:6},s5:{r:6},s6:{r:6.5}}[k];
  const o2=Object.assign({auth:"None",vol:"Static"},o,S);
  if(k==="s1"){const sub=el("g",{transform:"translate(0,3)"},g);SHAPES.s1(sub,o2)}
  else SHAPES[k](g,o2);
}
function buildLegend(){
  const mini=draw=>{const s=el("svg",{width:30,height:30,viewBox:"-15 -15 30 30"});draw(s);return s};
  const fill=(id,items)=>{const ul=$(id);ul.innerHTML="";items.forEach(([svgNode,html])=>{const li=document.createElement("li");li.appendChild(svgNode);const sp=document.createElement("span");sp.innerHTML=html;li.appendChild(sp);ul.appendChild(li)})};
  fill("lg-series",Object.entries(SERIES).map(([k,v])=>[mini(s=>legendGlyph(s,{c:SC(k)})),`${k} · ${v.name}<small>${v.ja} · ${v.note}</small>`]));
  const A=[["SSOT","唯一の正本"],["Standard","プロジェクト標準"],["Reference","補足・参考資料"],["Archive","履歴として保存"]];
  fill("lg-auth",A.map(([a,j])=>[mini(s=>legendGlyph(s,{c:SC("OP"),auth:a})),`${a}<small>${j} · ${DATA.docs.filter(d=>d.authority===a).length} docs</small>`]));
  const VOLS=[["Static","静止","原則更新されない（規則・原典・編集方針）"],["Periodic","ゆっくり呼吸する","決定の変化時に更新する"],["Living","炎のように揺らぐ","台帳・リスト。頻繁に更新される"]];
  const va=V("volA",null);
  fill("lg-vol",VOLS.map(([v,a,j],i)=>[mini(s=>{
      if(SKIN==="orig"){const gg=el("g",{class:"v-"+v},s);el("circle",{class:"halo",r:13,fill:"#f07a3a",opacity:.26,style:"transform-box:fill-box;transform-origin:center"},gg);el("circle",{r:6,fill:"#f7c79a"},s)}
      else{const gg=el("g",{class:"node v-"+v},s);legendGlyph(gg,{c:SC("MD"),vol:v})}
    }),`${v} · ${va?va[i]:a}<small>${j} · ${DATA.docs.filter(d=>d.volatility===v).length} docs</small>`]));
  const pa=V("pathA",null), rl=V("rootL",null);
  const path=(cls,d,extra)=>mini(s=>{s.setAttribute("width",30);s.setAttribute("height",12);s.setAttribute("viewBox","0 0 30 12");el("path",Object.assign({d,class:cls},extra||{}),s)});
  fill("lg-paths",[
    [path("lg-a","M1,9 Q15,1 29,9"),`${pa?pa[0]:"責任の受け渡し"}<small>文書に明記された関係 · ${EDGES.filter(e=>!e[4]).length} branches</small>`],
    [path("lg-a","M1,9 Q15,1 29,9",{"stroke-dasharray":"2 3"}),`${pa?pa[1]:"情報階層の流れ"}<small>OP-001 §12</small>`],
    [path("lg-b","M1,10 Q15,-4 29,10"),`${pa?pa[2]:"言及の糸"}<small>太さは言及回数の平方根</small>`],
    [mini(s=>{if(SKIN==="orig")el("rect",{x:-7,y:-7,width:14,height:14,transform:"rotate(45)",fill:"none",stroke:"#f6dca0"},s);else{const gg=el("g",{},s);legendGlyph(gg,{c:ROOTC(),root:true,r:6})}}),`${rl?rl[0]:"Roots · 支え"}<small>${rl?rl[1]:"archive/ と scripts/"}</small>`]
  ]);
}

/* ------------------------------------------------------------------ switcher */
const MATRIX_RAMPS={
  orig:["#241d12","#6d4f22","#b98a3e","#e8c47c","#fff1cf"],
  s1:["#ece3c6","#d6bd82","#bb8644","#80502a","#3b2312"],
  s2:["#101c3d","#28489a","#5f8ee0","#aed0ff","#ffffff"],
  s3:["#e0e7ef","#a3b9d6","#6089b8","#285792","#0b2a55"],
  s4:["#ebe4c6","#c6d08f","#8cae64","#4d8152","#204c36"],
  s5:["#2b1b10","#6f4521","#b2752f","#e0ab5c","#fbe3ad"],
  s6:["#1d2d24","#415d41","#80a054","#cdb35c","#f6e6a6"]
};
function buildBar(){
  const bar=$("skinbar");
  bar.innerHTML=`<span class="skinbar-l">DESIGN</span>`+SKINS.map(s=>`<button type="button" data-skin="${s.id}" data-name="${s.ja} · ${s.en}" aria-pressed="false" title="${s.ja} · ${s.en}">${s.id==="orig"?"Original":s.id.slice(1)}</button>`).join("")+`<span class="skinbar-name"></span>`;
}
function hashFor(id){
  const s=SKIN!=="orig"?SKIN+(id?"+"+id:""):(id||"");
  return s?"#"+s:location.pathname+location.search;
}
function parseHash(){
  let h="";try{h=decodeURIComponent(location.hash.slice(1))}catch(e){}
  const m=h.match(/^(orig|s[1-6])(?:\+(.+))?$/);
  if(m)return {skin:m[1],doc:m[2]||""};
  return {skin:null,doc:h};
}
function buildAll(){
  buildFigures(); buildLegend(); buildCanon(); buildCensus(); buildStrata(); buildNotes(); matrixRecolor(); buildTree(); gRender();
  render(current||"DS-001"); if(current)highlight(current);
  if(S.open)sRun();
}
const SKIN_FONTS="https://fonts.googleapis.com/css2?family=Cinzel:wght@400;500;600&family=Fraunces:ital,wght@0,400;0,600;1,400;1,600&family=IBM+Plex+Mono:wght@400;500;600&family=IM+Fell+English:ital@0;1&family=IM+Fell+English+SC&family=Josefin+Sans:wght@300;400;600&family=Playfair+Display:ital,wght@0,400;0,600;0,700;1,400;1,600&family=Special+Elite&family=Zen+Kaku+Gothic+New:wght@400;500;700&family=Zen+Old+Mincho:wght@400;500;700&display=swap";
function ensureFonts(){
  if(SKIN==="orig"||document.getElementById("skin-fonts"))return;
  const l=document.createElement("link");l.id="skin-fonts";l.rel="stylesheet";l.href=SKIN_FONTS;document.head.appendChild(l);
}
function setSkin(id,persist){
  if(!SKINS.some(s=>s.id===id))id="orig";
  SKIN=id; root.setAttribute("data-skin",id); ensureFonts();
  const bar=$("skinbar");
  bar.querySelectorAll("button[data-skin]").forEach(b=>b.setAttribute("aria-pressed",b.dataset.skin===id?"true":"false"));
  const nm=bar.querySelector(".skinbar-name"), cur=bar.querySelector(`button[data-skin="${id}"]`);
  if(nm&&cur)nm.textContent=cur.getAttribute("data-name");
  if(persist){try{localStorage.setItem(SKIN_KEY,id)}catch(e){}}
  applyStatic(); fillMeta(); setBg(); buildAll();
  if(persist){try{history.replaceState(null,"",hashFor(current))}catch(e){}}
  const mh=$("masthead"); if(mh)mh.setAttribute("aria-label",`クリックでデザインを切り替え（現在：${cur?cur.getAttribute("data-name"):id}）`);
  setTimeout(()=>window.dispatchEvent(new Event("resize")),30);
}
const nextSkin=()=>{const ids=SKINS.map(s=>s.id);setSkin(ids[(ids.indexOf(SKIN)+1)%ids.length],true)};
function initSkin(){
  buildBar();
  const bar=$("skinbar");
  bar.addEventListener("click",e=>{const b=e.target.closest("button[data-skin]");if(b)setSkin(b.dataset.skin,true)});
  const T=$("masthead");
  if(T){
    T.setAttribute("role","button");T.setAttribute("tabindex","0");T.setAttribute("title","クリックでデザイン切替 / Click to switch design");
    T.addEventListener("click",e=>{if(e.target.closest("a"))return;nextSkin()});
    T.addEventListener("keydown",e=>{if(e.key==="Enter"||e.key===" "){e.preventDefault();nextSkin()}});
  }
  document.addEventListener("keydown",e=>{
    if(e.target&&/INPUT|TEXTAREA|SELECT/.test(e.target.tagName))return;
    if(S.open||e.metaKey||e.ctrlKey||e.altKey)return;
    if(/^[0-6]$/.test(e.key)){setSkin(e.key==="0"?"orig":"s"+e.key,true)}
  });
  const ph=parseHash(); let start=ph.skin;
  if(!start){try{start=localStorage.getItem(SKIN_KEY)}catch(e){}}
  setSkin(start||"orig",false);
}
