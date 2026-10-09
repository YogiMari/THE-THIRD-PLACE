// Field Atlas Radar3D — the 10-axis Atlas Resonance radar as a small 3D scene (SVG, own projection, no WebGL).
// One source for every Field Atlas page: scripts/field_atlas_nocturne.py (build)
// inserts it where a template marks it (the SHARED_JS marker).
// It reads nothing from the page except what is passed in, so Nocturne and Aubade both use it unchanged. Colours are not typed here: the page's own radar classes (.rg .rtk .rax .rpa .rpb
// .rda .rdb) are read once from the computed style, so each skin looks native.
//
//   const R3 = Radar3D(svgElement, {labels:[...10 axis names], cx, cy, rad, tip:(series,i,v)=>text, avg:[...], ringLabels:[5,10]});
//   R3.set(curA, curB|null, {aDash, bDash})   // values 0-10; call on every animation frame of the A/B tween
//   R3.alt(text)                              // text alternative (the 10 values) for assistive technology
//   R3.reset() / R3.view() / R3.tips()        // view reset, current {yaw,pitch} in degrees, projected tips
//
// Scene (world units: disc radius 100, y up): a floating ground disc with a soft shadow, a bezel with 60 ticks,
// concentric decagon rings (2-10), 10 spokes, a faint cage of 10 rim posts; field A and field B as translucent
// extruded prisms (thickness 9) with their sides back-face culled and depth sorted (painter's algorithm); a pillar
// with a cap and its value at every axis tip (height 4.4 per point); axis names as billboards (scaled by depth,
// faded on the far side); a slow sweep wedge on the ground.
// Interaction: drag = yaw (mouse also pitch) with inertia; touch drags rotate yaw only (the svg is touch-action:pan-y,
// so vertical swipes scroll the page) and the ▲ ▼ buttons tilt; arrow keys rotate; double click / double tap or ↺
// resets; a slow sway runs until the first interaction and when the user has not asked for reduced motion.
// Looks (o.look; without it the scene above is drawn, as on Cartograph, Contour, Gloaming and Radar):
//   "hud"       (Nocturne) a holographic instrument: a glowing floor, a 120-tick bezel with turning arcs, dotted rings,
//               a centre reticle, a radar sweep with a bright leading edge, glass prisms over a dashed footprint with
//               glowing edges, light beams with diamond caps, numbered axis names.
//   "porcelain" (Aubade) a glazed plate in daylight: a blurred warm shadow, an ivory plate with a double rim and a ring
//               of beads, dotted rings, a soft slow band of light, glazed prisms with a lit gradient and a warm blurred
//               shadow, hairline stems with porcelain beads.
// Value labels carry the class r3v without an inline font, so a page with a look sets their typeface.
function Radar3D(svg,o){
  const NS="http://www.w3.org/2000/svg",N=o.labels.length,DEG=Math.PI/180,TAU=Math.PI*2;
  const R=100,T=9,HS=4.4,TOPY=10*HS,D=640,CX=o.cx,CY=o.cy,K=o.rad/R;
  const Y0=-12*DEG,P0=50*DEG,PMIN=12*DEG,PMAX=86*DEG,AMP=34*DEG,PERIOD=18;
  const rmq=matchMedia("(prefers-reduced-motion: reduce)"),RM=()=>rmq.matches;
  const host=svg.parentElement;
  if(getComputedStyle(host).position==="static")host.style.position="relative";
  let yaw=Y0,pitch=P0,vy=0,vp=0,ph=0,autoOn=true,hover=false,focus=false,drag=null,twn=null,hoverTip=null;
  let dataA=new Array(N).fill(0),dataB=null,dashA=false,dashB=false,dirty=true,vis=true,raf=0,lastT=0,lastR=0,tipsNow=[],tapT=0,tapX=0,tapY=0,colT=-1e9,tipTimer=0,hit=null;
  let C={a:"#d97757",b:"#4f82b5",lab:"#777",da:"#fff"},fs=8.6;
  const L=o.look||"",pad2=n=>String(n).padStart(2,"0");
  // static markup: defs, one dynamic group, a text alternative
  svg.classList.add("r3");svg.setAttribute("tabindex","0");svg.setAttribute("aria-keyshortcuts","ArrowLeft ArrowRight ArrowUp ArrowDown Home");
  svg.innerHTML=`<desc id="r3desc"></desc><defs><radialGradient id="r3gd" cx="50%" cy="50%" r="50%"><stop offset="0" stop-color="currentColor" stop-opacity=".13"/><stop offset=".72" stop-color="currentColor" stop-opacity=".05"/><stop offset="1" stop-color="currentColor" stop-opacity="0"/></radialGradient><radialGradient id="r3gs" cx="50%" cy="50%" r="50%"><stop offset="0" stop-color="#000" stop-opacity=".26"/><stop offset=".6" stop-color="#000" stop-opacity=".12"/><stop offset="1" stop-color="#000" stop-opacity="0"/></radialGradient>${L==="hud"?`<filter id="r3glow" x="-30%" y="-30%" width="160%" height="160%"><feGaussianBlur stdDeviation="2.2" result="b"/><feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge></filter>`:""}${L==="porcelain"?`<filter id="r3blur" x="-30%" y="-30%" width="160%" height="160%"><feGaussianBlur stdDeviation="4"/></filter><radialGradient id="r3pl" cx="42%" cy="38%" r="70%"><stop offset="0" stop-color="#fff"/><stop offset=".7" stop-color="#FBF8F1"/><stop offset="1" stop-color="#EFE9DC"/></radialGradient><radialGradient id="r3bd" cx="35%" cy="30%" r="75%"><stop offset="0" stop-color="#fff"/><stop offset=".55" stop-color="#F7F3EA"/><stop offset="1" stop-color="#D9D1C1"/></radialGradient>`:""}${["a","b"].map(k=>`<linearGradient id="r3b${k}" x1="0" y1="1" x2="0" y2="0"><stop offset="0" class="r3s0"/><stop offset="1" class="r3s1"/></linearGradient><linearGradient id="r3t${k}" x1="0" y1="0" x2="1" y2="1"><stop offset="0" class="r3s2"/><stop offset=".6" class="r3s3"/><stop offset="1" class="r3s4"/></linearGradient>`).join("")}</defs><g id="r3g"></g>`;
  svg.setAttribute("aria-describedby","r3desc");
  const g=svg.querySelector("#r3g"),descEl=svg.querySelector("#r3desc");
  const st=document.createElement("style");st.textContent=`svg.r3{touch-action:pan-y;cursor:grab;-webkit-user-select:none;user-select:none;-webkit-tap-highlight-color:transparent;outline:none}
svg.r3.drag{cursor:grabbing}svg.r3:focus-visible{outline:2px solid currentColor;outline-offset:3px;border-radius:6px}
svg.r3 text{pointer-events:none;-webkit-user-select:none;user-select:none}
.r3-ctl{position:absolute;right:2px;bottom:2px;display:flex;gap:4px;z-index:2}
.r3-btn{width:30px;height:30px;padding:0;border:1px solid currentColor;border-radius:50%;background:transparent;color:inherit;font:600 14px/1 system-ui,sans-serif;cursor:pointer;opacity:.7;display:grid;place-items:center;touch-action:manipulation}
.r3-btn:hover,.r3-btn:focus-visible{opacity:1}
.r3-tip{position:absolute;z-index:3;pointer-events:none;padding:4px 8px;border-radius:6px;font:500 11.5px/1.4 system-ui,"Hiragino Sans",sans-serif;white-space:nowrap;box-shadow:0 4px 14px rgba(0,0,0,.28)}
.r3-ctl.hud .r3-btn{border-radius:0;width:28px;height:24px;font:500 11px/1 ui-monospace,monospace;border-color:currentColor;background:rgba(1,4,9,.6);opacity:.55;box-shadow:inset 0 0 8px rgba(63,240,255,.12)}
.r3-ctl.hud .r3-btn:hover,.r3-ctl.hud .r3-btn:focus-visible{opacity:1;box-shadow:inset 0 0 10px rgba(63,240,255,.35),0 0 10px rgba(63,240,255,.3)}
.r3-tip.hud{border-radius:0;background:rgba(1,6,12,.92);border:1px solid currentColor;font:500 10.5px/1.5 ui-monospace,"IBM Plex Mono",monospace;letter-spacing:.06em;box-shadow:0 0 18px rgba(63,240,255,.25)}
.r3-ctl.porcelain .r3-btn{border:0;background:#fff;opacity:.85;font-size:12px;box-shadow:0 1px 2px rgba(20,20,19,.08),0 4px 12px -2px rgba(120,60,30,.18)}
.r3-ctl.porcelain .r3-btn:hover,.r3-ctl.porcelain .r3-btn:focus-visible{opacity:1;box-shadow:0 1px 2px rgba(20,20,19,.1),0 8px 18px -4px rgba(120,60,30,.3)}
.r3-tip.porcelain{border-radius:10px;padding:5px 10px;box-shadow:0 1px 2px rgba(20,20,19,.06),0 10px 26px -8px rgba(120,60,30,.35)}`;
  document.head.appendChild(st);
  // controls: reset, tilt up / down (tilt is for touch, where a vertical drag scrolls the page)
  const ctl=document.createElement("div");ctl.className="r3-ctl"+(L?" "+L:"");
  ctl.innerHTML=`<button type="button" class="r3-btn" data-k="up" aria-label="傾きを上げる（真上から見る）" title="真上から">▲</button><button type="button" class="r3-btn" data-k="dn" aria-label="傾きを下げる（横から見る）" title="横から">▼</button><button type="button" class="r3-btn" data-k="rs" aria-label="視点をリセット" title="視点をリセット（ダブルクリック）">↺</button>`;
  host.appendChild(ctl);
  let tipEl=o.tipEl;const ownTip=!tipEl;if(!tipEl){tipEl=document.createElement("div");tipEl.className="r3-tip"+(L?" "+L:"");tipEl.hidden=true;host.appendChild(tipEl);}
  const clamp=(v,a,b)=>Math.max(a,Math.min(b,v));
  const esc=s=>String(s).replace(/[&<>"]/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]));
  // colours of the page's own radar classes
  function readColours(now){
    colT=now;const mk=(tag,cls)=>{const e=document.createElementNS(NS,tag);e.setAttribute("class",cls);e.style.visibility="hidden";svg.appendChild(e);const cs=getComputedStyle(e),r={s:cs.stroke,f:cs.fill,fs:parseFloat(cs.fontSize)};svg.removeChild(e);return r;};
    const a=mk("path","rpa"),b=mk("path","rpb"),t=mk("text","rax"),da=mk("circle","rda"),ok=v=>v&&v!=="none"&&v!=="";
    C={a:ok(a.s)?a.s:a.f,b:ok(b.s)?b.s:b.f,lab:ok(t.f)?t.f:"#777",da:ok(da.f)?da.f:"#fff"};if(t.fs>0)fs=t.fs;
    svg.style.color=C.lab;ctl.style.color=L==="hud"?C.a:C.lab;
    const m=C.lab.match(/\d+(\.\d+)?/g)||[0,0,0],lum=(.299*m[0]+.587*m[1]+.114*m[2])/255;
    if(ownTip){if(L==="hud"){tipEl.style.color=C.a;}else if(L==="porcelain"){tipEl.style.background="#fff";tipEl.style.color="#141413";}else{tipEl.style.background=C.lab;tipEl.style.color=lum>.55?"#0b0b0b":"#fff";}}
    // gradient stops follow the series colours: r3b* light beams (hud), r3t* glazed tops (porcelain)
    const ss=(e,c,op)=>{e.setAttribute("stop-color",c);e.setAttribute("stop-opacity",op);};
    ["a","b"].forEach(k=>{const bs=svg.querySelectorAll(`#r3b${k} stop`),ts=svg.querySelectorAll(`#r3t${k} stop`);
      ss(bs[0],C[k],.04);ss(bs[1],C[k],.95);ss(ts[0],"#fff",.95);ss(ts[1],C[k],.2);ss(ts[2],C[k],.45);});
  }
  const ang=i=>-Math.PI/2+i*TAU/N;
  const pxy=s=>s.map(p=>p.X.toFixed(1)+","+p.Y.toFixed(1)).join(" ");
  function render(now){
    if(now-colT>2000)readColours(now);
    const cyw=Math.cos(yaw),syw=Math.sin(yaw),cp=Math.cos(pitch),sp=Math.sin(pitch);
    const P=(x,y,z)=>{const x1=x*cyw+z*syw,z1=-x*syw+z*cyw,c=z1*cp+y*sp,up=y*cp-z1*sp,s=D/(D-c);return{X:CX+x1*s*K,Y:CY-up*s*K,s,c,z1};};
    const ringPts=(r,y,n)=>{const out=[];for(let k=0;k<n;k++){const a=k/n*TAU;out.push(P(Math.cos(a)*r,y,Math.sin(a)*r));}return out;};
    const polyAt=(vals,y,min)=>vals.map((v,i)=>{const r=R*Math.max(v,min)/10,a=ang(i);return P(Math.cos(a)*r,y,Math.sin(a)*r);});
    let out="";const tips=[];
    if(L){g.innerHTML=look(now,P,ringPts,polyAt,cyw,syw,tips);tipsNow=tips;return;}
    // ground: shadow, disc, bezel, ticks, rings, spokes, rim posts, average outline
    out+=`<polygon points="${pxy(ringPts(R*1.12,-34,48))}" fill="url(#r3gs)"/>`;
    out+=`<polygon points="${pxy(ringPts(R*1.17,0,64))}" fill="url(#r3gd)"/>`;
    out+=`<polygon class="rg" points="${pxy(ringPts(R*1.07,0,72))}"/>`;
    for(let k=0;k<60;k++){const a=k/60*TAU,r1=R*1.07,r2=R*(k%6===0?1.125:1.098),p=P(Math.cos(a)*r1,0,Math.sin(a)*r1),q=P(Math.cos(a)*r2,0,Math.sin(a)*r2);out+=`<line class="rtk" x1="${p.X.toFixed(1)}" y1="${p.Y.toFixed(1)}" x2="${q.X.toFixed(1)}" y2="${q.Y.toFixed(1)}"/>`;}
    [2,4,6,8,10].forEach(v=>{out+=`<polygon class="rg${v===10?" o":""}" points="${pxy(polyAt(new Array(N).fill(v),0,0))}"/>`;});
    const c0=P(0,0,0);
    for(let i=0;i<N;i++){const p=P(Math.cos(ang(i))*R,0,Math.sin(ang(i))*R);out+=`<line class="rg" x1="${c0.X.toFixed(1)}" y1="${c0.Y.toFixed(1)}" x2="${p.X.toFixed(1)}" y2="${p.Y.toFixed(1)}"/>`;
      const q=P(Math.cos(ang(i))*R,TOPY,Math.sin(ang(i))*R);out+=`<line class="rg" x1="${p.X.toFixed(1)}" y1="${p.Y.toFixed(1)}" x2="${q.X.toFixed(1)}" y2="${q.Y.toFixed(1)}" stroke-dasharray="1 3"/>`;}
    out+=`<polygon class="rg" stroke-dasharray="1 3" points="${pxy(polyAt(new Array(N).fill(10),TOPY,0))}"/>`;
    if(o.avg)out+=`<polygon points="${pxy(polyAt(o.avg,0,0))}" fill="none" stroke="currentColor" stroke-opacity=".5" stroke-width="1" stroke-dasharray="2 3"/>`;
    if(hit!=null){const p=P(Math.cos(ang(hit))*R,0,Math.sin(ang(hit))*R);out+=`<line x1="${c0.X.toFixed(1)}" y1="${c0.Y.toFixed(1)}" x2="${p.X.toFixed(1)}" y2="${p.Y.toFixed(1)}" stroke="${C.a}" stroke-opacity=".7" stroke-width="1.3"/>`;}
    // sweep wedge (ten slices fading behind the leading edge); still when motion is reduced
    if(!RM()){const f=now/7000*TAU;for(let k=0;k<10;k++){const a0=f-(k+1)*7*DEG,a1=f-k*7*DEG,pts=[c0];for(let j=0;j<=2;j++){const a=a0+(a1-a0)*j/2;pts.push(P(Math.cos(a)*R,0,Math.sin(a)*R));}
      out+=`<polygon points="${pxy(pts)}" fill="${C.a}" fill-opacity="${(.2*(1-k/10)).toFixed(3)}"/>`;}}
    // shadows of the prisms, offset away from the light
    const series=[];if(dataB)series.push({v:dataB,col:C.b,dash:dashB,sf:.2,top:.2,idx:1});series.push({v:dataA,col:C.a,dash:dashA,sf:.3,top:.3,idx:0});
    series.forEach(s=>{out+=`<polygon points="${pxy(s.v.map((v,i)=>{const r=R*Math.max(v,.05)/10,a=ang(i);return P(Math.cos(a)*r+9,0,Math.sin(a)*r+9);}))}" fill="#000" fill-opacity=".1"/>`;});
    // labels: names of the axes as billboards; the far ones sit behind the prisms, the near ones in front
    const labs=[];
    for(let i=0;i<N;i++){const p=P(Math.cos(ang(i))*R*1.22,0,Math.sin(ang(i))*R*1.22),dx=p.X-CX,f=clamp((p.z1/(R*1.22)+1)/2,0,1),op=(.42+.58*Math.pow(f,.8)).toFixed(2),
      anc=Math.abs(dx)<7?"middle":dx>0?"start":"end";
      const html=`<text class="rax" x="${p.X.toFixed(1)}" y="${(p.Y+fs*.35).toFixed(1)}" text-anchor="${anc}" style="font-size:${(fs*clamp(p.s,.82,1.18)).toFixed(2)}px" opacity="${op}">${esc(o.labels[i])}</text>`;
      labs.push({z:p.z1,c:p.c,html});}
    (o.ringLabels||[]).forEach(v=>{const p=P(Math.cos(ang(0))*R*v/10+2,0,Math.sin(ang(0))*R*v/10);out+=`<text class="rax" x="${(p.X+4).toFixed(1)}" y="${(p.Y+3).toFixed(1)}" style="font-size:${(fs*.9).toFixed(2)}px" opacity=".7">${v}</text>`;});
    labs.filter(l=>l.z<0).forEach(l=>{out+=l.html;});
    // prism sides, depth sorted across both series
    const sides=[],tops=[],verts=[];
    series.forEach(s=>{
      const base=s.v.map((v,i)=>{const r=R*Math.max(v,.05)/10,a=ang(i);return[Math.cos(a)*r,Math.sin(a)*r];});
      let a2=0;for(let i=0;i<N;i++){const p=base[i],q=base[(i+1)%N];a2+=p[0]*q[1]-q[0]*p[1];}
      const sg=a2>=0?1:-1;
      for(let i=0;i<N;i++){const p=base[i],q=base[(i+1)%N],ex=q[0]-p[0],ez=q[1]-p[1],len=Math.hypot(ex,ez);if(len<1e-3)continue;
        const nx=sg*ez/len,nz=-sg*ex/len,nx1=nx*cyw+nz*syw,nz1=-nx*syw+nz*cyw;if(nz1<=0.001)continue;
        const quad=[P(p[0],0,p[1]),P(q[0],0,q[1]),P(q[0],T,q[1]),P(p[0],T,p[1])],c=(quad[0].c+quad[1].c+quad[2].c+quad[3].c)/4,lit=clamp(.55+.35*nz1-.3*nx1,.25,1);
        sides.push({c,html:`<polygon points="${pxy(quad)}" fill="${s.col}" fill-opacity="${(s.sf*lit+.06).toFixed(3)}" stroke="${s.col}" stroke-opacity=".5" stroke-width=".8" stroke-linejoin="round"/>`});}
      const tp=polyAt(s.v,T,.05);
      tops.push(`<polygon points="${pxy(tp)}" fill="${s.col}" fill-opacity="${s.top}" stroke="${s.col}" stroke-width="1.7" stroke-linejoin="round"${s.dash?' stroke-dasharray="5 4"':""}/>`);
      // pillars at the axis tips: height follows the value; the cap carries the page's dot style
      s.v.forEach((v,i)=>{const r=R*Math.max(v,.05)/10,a=ang(i),x=Math.cos(a)*r,z=Math.sin(a)*r,b=P(x,T,z),t=P(x,T+v*HS,z),sc=b.s;
        tips.push({X:t.X,Y:t.Y,ser:s.idx,i,v});tips.push({X:b.X,Y:b.Y,ser:s.idx,i,v});
        if(v>=.2)verts.push({c:(b.c+t.c)/2,html:`<line x1="${b.X.toFixed(1)}" y1="${b.Y.toFixed(1)}" x2="${t.X.toFixed(1)}" y2="${t.Y.toFixed(1)}" stroke="${s.col}" stroke-width="${(2*sc).toFixed(2)}" stroke-linecap="round" stroke-opacity=".9"/>`});
        verts.push({c:t.c+.01,html:`<circle class="${s.idx?"rdb":"rda"}" cx="${t.X.toFixed(1)}" cy="${t.Y.toFixed(1)}" r="${((s.idx?2.3:2.8)*sc).toFixed(2)}"/>`,lab:{X:t.X,Y:t.Y,s:sc,idx:s.idx,v,i,col:s.col}});});
    });
    sides.sort((p,q)=>p.c-q.c).forEach(s=>{out+=s.html;});
    tops.forEach(h=>{out+=h;});
    // value labels: A always, B only when its cap is not on top of A's
    const labsV=[];verts.forEach(v=>{if(v.lab)labsV.push(v.lab);});
    verts.sort((p,q)=>p.c-q.c).forEach(v=>{out+=v.html;});
    labs.filter(l=>l.z>=0).forEach(l=>{out+=l.html;});
    labsV.forEach(l=>{if(l.idx===1){const a=labsV.find(x=>x.idx===0&&x.i===l.i);if(a&&Math.hypot(a.X-l.X,a.Y-l.Y)<11)return;}
      out+=`<text class="rax r3v" x="${l.X.toFixed(1)}" y="${(l.Y-5*l.s-1).toFixed(1)}" text-anchor="middle" style="font-size:${(fs*1.05*clamp(l.s,.85,1.2)).toFixed(2)}px;font-weight:700;fill:${l.col}">${Math.round(l.v)}</text>`;});
    g.innerHTML=out;tipsNow=tips;
  }
  // the page's look (o.look): the same geometry, values and depth order as above, drawn in the page's own idiom
  function look(now,P,ringPts,polyAt,cyw,syw,tips){
    const H=L==="hud",f1=v=>v.toFixed(1),c0=P(0,0,0),at=(a,r,y)=>P(Math.cos(a)*r,y||0,Math.sin(a)*r);
    const ln=(p,q,x)=>`<line x1="${f1(p.X)}" y1="${f1(p.Y)}" x2="${f1(q.X)}" y2="${f1(q.Y)}" ${x}/>`;
    const arc=(r,a0,a1,n)=>{const out=[];for(let j=0;j<=n;j++)out.push(at(a0+(a1-a0)*j/n,r));return out;};
    const t=RM()?0:now/1000;let out="";
    if(H){
      // glowing floor, double bezel with 120 ticks, two turning arcs, dotted rings, spokes, the cage, a centre reticle
      out+=`<g color="${C.a}"><polygon points="${pxy(ringPts(R*1.28,0,72))}" fill="url(#r3gd)"/></g>`;
      out+=`<polygon class="rg o" points="${pxy(ringPts(R*1.15,0,120))}"/><polygon class="rg" points="${pxy(ringPts(R*1.07,0,120))}"/>`;
      for(let k=0;k<120;k++){const a=k/120*TAU,ax=k%12===6,r2=R*(ax?1.15:k%3===0?1.11:1.088);
        out+=ln(at(a,R*1.07),at(a,r2),ax?`stroke="${C.a}" stroke-opacity=".9" stroke-width="1.2"`:`class="rtk"${k%3?' stroke-opacity=".45"':""}`);}
      [[R*1.2,t*.22,50*DEG,`stroke-opacity=".6" stroke-width="1.3"`],[R*1.2,t*.22+Math.PI,50*DEG,`stroke-opacity=".6" stroke-width="1.3"`],[R*1.235,-t*.13,140*DEG,`stroke-opacity=".32" stroke-dasharray="1 2.4"`]]
        .forEach(([r,a0,w,x])=>{out+=`<polyline points="${pxy(arc(r,a0,a0+w,24))}" fill="none" stroke="${C.a}" ${x}/>`;});
      [2,4,6,8].forEach(v=>{out+=`<polygon class="rg" stroke-dasharray="1 2.5" points="${pxy(polyAt(new Array(N).fill(v),0,0))}"/>`;});
      out+=`<polygon class="rg o" points="${pxy(polyAt(new Array(N).fill(10),0,0))}"/>`;
      for(let i=0;i<N;i++){const p=at(ang(i),R),q=at(ang(i),R,TOPY);out+=ln(c0,p,'class="rg"')+ln(p,q,'class="rg" stroke-dasharray="1 3"');}
      out+=`<polygon class="rg" stroke-dasharray="1 3" points="${pxy(polyAt(new Array(N).fill(10),TOPY,0))}"/>`;
      [[2.6,8,0,0],[-2.6,-8,0,0],[0,0,2.6,8],[0,0,-2.6,-8]].forEach(([x0,x1,z0,z1])=>{out+=ln(P(x0,0,z0),P(x1,0,z1),`stroke="${C.a}" stroke-opacity=".75"`);});
      out+=`<polygon points="${pxy(ringPts(4.2,0,24))}" fill="none" stroke="${C.a}" stroke-opacity=".5"/>`;
    }else{
      // a warm blurred shadow, an ivory plate with a double rim and 60 beads (clay at the axes), dotted rings, hairline spokes
      out+=`<polygon points="${pxy(ringPts(R*1.06,-28,48))}" fill="#5B3A1E" fill-opacity=".2" filter="url(#r3blur)"/>`;
      out+=`<polygon points="${pxy(ringPts(R*1.18,0,120))}" fill="url(#r3pl)" stroke="currentColor" stroke-opacity=".22" stroke-width=".8"/>`;
      out+=`<polygon points="${pxy(ringPts(R*1.085,0,120))}" fill="none" stroke="currentColor" stroke-opacity=".16" stroke-width=".7"/>`;
      for(let k=0;k<60;k++){const ax=k%6===3,p=at(k/60*TAU,R*1.135);out+=`<circle cx="${f1(p.X)}" cy="${f1(p.Y)}" r="${((ax?1.7:.75)*p.s).toFixed(2)}" fill="${ax?C.a:"currentColor"}" fill-opacity="${ax?.9:.3}"/>`;}
      out+=`<polygon points="${pxy(polyAt(new Array(N).fill(10),0,0))}" fill="${C.a}" fill-opacity=".035" stroke="currentColor" stroke-opacity=".34" stroke-width=".9"/>`;
      [2,4,6,8].forEach(v=>{out+=`<polygon points="${pxy(polyAt(new Array(N).fill(v),0,0))}" fill="none" stroke="currentColor" stroke-opacity=".34" stroke-width="1.15" stroke-dasharray="0 3.2" stroke-linecap="round"/>`;});
      for(let i=0;i<N;i++)out+=ln(c0,at(ang(i),R),'stroke="currentColor" stroke-opacity=".13" stroke-width=".7"');
    }
    if(o.avg)out+=`<polygon points="${pxy(polyAt(o.avg,0,0))}" fill="none" stroke="currentColor" stroke-opacity=".5" stroke-width="1" stroke-dasharray="2 3"/>`;
    if(hit!=null)out+=ln(c0,at(ang(hit),R),`stroke="${C.a}" stroke-opacity=".8" stroke-width="1.3"`);
    // sweep: a radar beam with a bright leading edge (hud) or a soft band of daylight (porcelain); still when motion is reduced
    if(!RM()){
      if(H){const f=now/6000*TAU;for(let k=0;k<12;k++){const a0=f-(k+1)*6*DEG,a1=f-k*6*DEG;out+=`<polygon points="${pxy([c0,at(a0,R),at((a0+a1)/2,R),at(a1,R)])}" fill="${C.a}" fill-opacity="${(.17*Math.pow(1-k/12,1.6)).toFixed(3)}"/>`;}
        out+=ln(c0,at(f,R*1.07),`stroke="${C.a}" stroke-opacity=".9" stroke-width="1.1" filter="url(#r3glow)"`);}
      else{const f=now/11000*TAU;for(let k=0;k<14;k++){const a0=f+(k-7)*5*DEG,a1=a0+5*DEG;out+=`<polygon points="${pxy([c0,at(a0,R),at((a0+a1)/2,R),at(a1,R)])}" fill="${C.a}" fill-opacity="${(.085*Math.pow(Math.sin(Math.PI*(k+.5)/14),2)).toFixed(3)}"/>`;}}
    }
    if(!H)out+=`<circle cx="${f1(c0.X)}" cy="${f1(c0.Y)}" r="${(2*c0.s).toFixed(2)}" fill="${C.a}"/>`;
    const series=[];if(dataB)series.push({v:dataB,col:C.b,dash:dashB,idx:1});series.push({v:dataA,col:C.a,dash:dashA,idx:0});
    // footprints: a dashed outline on the floor (hud) or a warm blurred shadow (porcelain)
    series.forEach(s=>{out+=H?`<polygon points="${pxy(polyAt(s.v,0,.05))}" fill="${s.col}" fill-opacity=".05" stroke="${s.col}" stroke-opacity=".55" stroke-width=".8" stroke-dasharray="2 3"/>`
      :`<polygon points="${pxy(s.v.map((v,i)=>{const r=R*Math.max(v,.05)/10,a=ang(i);return P(Math.cos(a)*r+7,0,Math.sin(a)*r+8);}))}" fill="#5B3A1E" fill-opacity=".16" filter="url(#r3blur)"/>`;});
    // axis names (numbered on the hud); the far ones behind the prisms, the near ones in front
    const labs=[];
    for(let i=0;i<N;i++){const p=at(ang(i),R*1.25),dx=p.X-CX,f=clamp((p.z1/(R*1.25)+1)/2,0,1),op=(.42+.58*Math.pow(f,.8)).toFixed(2),anc=Math.abs(dx)<7?"middle":dx>0?"start":"end";
      const fz=fs*clamp(p.s,.82,1.18),num=H?`<text class="rax" x="${f1(p.X)}" y="${f1(p.Y-fz*.75)}" text-anchor="${anc}" style="font-size:${(fz*.85).toFixed(2)}px;fill:${C.a}" opacity="${(op*.85).toFixed(2)}">${pad2(i+1)}</text>`:"";
      labs.push({z:p.z1,html:num+`<text class="rax" x="${f1(p.X)}" y="${f1(p.Y+fs*(H?.7:.35))}" text-anchor="${anc}" style="font-size:${fz.toFixed(2)}px" opacity="${op}">${esc(o.labels[i])}</text>`});}
    (o.ringLabels||[]).forEach(v=>{const p=P(Math.cos(ang(0))*R*v/10+2,0,Math.sin(ang(0))*R*v/10);out+=`<text class="rax" x="${f1(p.X+4)}" y="${f1(p.Y+3)}" style="font-size:${(fs*.9).toFixed(2)}px" opacity=".7">${v}</text>`;});
    labs.filter(l=>l.z<0).forEach(l=>{out+=l.html;});
    // prisms: sides depth sorted across both series, then the tops (glowing glass or glaze), then stems and caps
    const sides=[],tops=[],verts=[],labsV=[];
    series.forEach(s=>{
      const base=s.v.map((v,i)=>{const r=R*Math.max(v,.05)/10,a=ang(i);return[Math.cos(a)*r,Math.sin(a)*r];});
      let a2=0;for(let i=0;i<N;i++){const p=base[i],q=base[(i+1)%N];a2+=p[0]*q[1]-q[0]*p[1];}
      const sg=a2>=0?1:-1;
      for(let i=0;i<N;i++){const p=base[i],q=base[(i+1)%N],ex=q[0]-p[0],ez=q[1]-p[1],len=Math.hypot(ex,ez);if(len<1e-3)continue;
        const nx=sg*ez/len,nz=-sg*ex/len,nx1=nx*cyw+nz*syw,nz1=-nx*syw+nz*cyw;if(nz1<=0.001)continue;
        const quad=[P(p[0],0,p[1]),P(q[0],0,q[1]),P(q[0],T,q[1]),P(p[0],T,p[1])],c=(quad[0].c+quad[1].c+quad[2].c+quad[3].c)/4,lit=clamp(.55+.35*nz1-.3*nx1,.25,1);
        const fo=H?(s.idx?.1:.15)*lit+.025:(s.idx?.14:.22)*lit+.06;
        sides.push({c,html:`<polygon points="${pxy(quad)}" fill="${s.col}" fill-opacity="${fo.toFixed(3)}" stroke="${s.col}" stroke-opacity="${H?.4:.45}" stroke-width=".6" stroke-linejoin="round"/>`});}
      const tp=polyAt(s.v,T,.05),dash=s.dash?' stroke-dasharray="5 4"':"";
      tops.push(H?`<polygon points="${pxy(tp)}" fill="${s.col}" fill-opacity="${s.idx?.06:.11}" stroke="${s.col}" stroke-width="1.3" stroke-linejoin="round"${dash}/>`
        :`<polygon points="${pxy(tp)}" fill="url(#r3t${s.idx?"b":"a"})" stroke="${s.col}" stroke-width="1.4" stroke-linejoin="round"${dash}/><polygon points="${pxy(polyAt(s.v.map(v=>v*.93),T+.02,.05))}" fill="none" stroke="#fff" stroke-opacity=".75" stroke-width=".8" stroke-linejoin="round"/>`);
      s.v.forEach((v,i)=>{const r=R*Math.max(v,.05)/10,a=ang(i),x=Math.cos(a)*r,z=Math.sin(a)*r,b=P(x,T,z),tt=P(x,T+v*HS,z),sc=b.s;
        tips.push({X:tt.X,Y:tt.Y,ser:s.idx,i,v});tips.push({X:b.X,Y:b.Y,ser:s.idx,i,v});
        if(v>=.2){if(H){const dx=tt.X-b.X,dy=tt.Y-b.Y,l=Math.hypot(dx,dy)||1,nx=-dy/l,ny=dx/l,w0=1.7*sc,w1=.45*sc;
            verts.push({c:(b.c+tt.c)/2,html:`<polygon points="${f1(b.X+nx*w0)},${f1(b.Y+ny*w0)} ${f1(b.X-nx*w0)},${f1(b.Y-ny*w0)} ${f1(tt.X-nx*w1)},${f1(tt.Y-ny*w1)} ${f1(tt.X+nx*w1)},${f1(tt.Y+ny*w1)}" fill="url(#r3b${s.idx?"b":"a"})"/>`});}
          else verts.push({c:(b.c+tt.c)/2,html:ln(b,tt,`stroke="${s.col}" stroke-width="${(1.05*sc).toFixed(2)}" stroke-linecap="round" stroke-opacity=".75"`)});}
        const d=(s.idx?2.8:3.5)*sc;
        verts.push({c:tt.c+.01,html:H?`<polygon points="${f1(tt.X)},${f1(tt.Y-d)} ${f1(tt.X+d)},${f1(tt.Y)} ${f1(tt.X)},${f1(tt.Y+d)} ${f1(tt.X-d)},${f1(tt.Y)}" fill="#01060c" fill-opacity=".55" stroke="${s.col}" stroke-width=".9"/><circle cx="${f1(tt.X)}" cy="${f1(tt.Y)}" r="${(1.25*sc).toFixed(2)}" fill="${s.idx?s.col:C.da}"/>`
          :`<circle cx="${f1(tt.X)}" cy="${f1(tt.Y)}" r="${((s.idx?2.6:3.2)*sc).toFixed(2)}" fill="url(#r3bd)" stroke="${s.col}" stroke-width="${(1.1*sc).toFixed(2)}"/>`});
        labsV.push({X:tt.X,Y:tt.Y,s:sc,idx:s.idx,v,i,col:s.col});});
    });
    sides.sort((p,q)=>p.c-q.c).forEach(s=>{out+=s.html;});
    out+=H?`<g filter="url(#r3glow)">${tops.join("")}</g>`:tops.join("");
    verts.sort((p,q)=>p.c-q.c).forEach(v=>{out+=v.html;});
    labs.filter(l=>l.z>=0).forEach(l=>{out+=l.html;});
    labsV.forEach(l=>{if(l.idx===1){const a=labsV.find(x=>x.idx===0&&x.i===l.i);if(a&&Math.hypot(a.X-l.X,a.Y-l.Y)<11)return;}
      out+=`<text class="rax r3v" x="${f1(l.X)}" y="${f1(l.Y-(H?6:6.5)*l.s-1)}" text-anchor="middle" style="font-size:${(fs*(H?1.25:1.3)*clamp(l.s,.85,1.2)).toFixed(2)}px;fill:${l.col}">${Math.round(l.v)}</text>`;});
    return out;
  }
  // loop: draws only when something changes or moves (drag, inertia, tween, sway, sweep); idle frames are throttled
  const active=()=>drag||twn||Math.abs(vy)>1e-3||Math.abs(vp)>1e-3;
  const kick=()=>{if(!raf)raf=requestAnimationFrame(tick);};
  function tick(now){
    raf=0;const dt=Math.min(.05,(now-(lastT||now))/1000);lastT=now;const act=active();
    if(!dirty&&!act&&now-lastR<42){kick();return;}
    if(drag===null&&(Math.abs(vy)>1e-3||Math.abs(vp)>1e-3)){yaw+=vy*dt;pitch=clamp(pitch+vp*dt,PMIN,PMAX);const f=Math.exp(-dt*3.4);vy*=f;vp*=f;if(Math.abs(vy)<1e-3&&Math.abs(vp)<1e-3)vy=vp=0;}
    if(twn){const t=clamp((now-twn.t0)/twn.d,0,1),e=1-Math.pow(1-t,3);yaw=twn.y0+(twn.y1-twn.y0)*e;pitch=twn.p0+(twn.p1-twn.p0)*e;if(t>=1)twn=null;}
    else if(autoOn&&!RM()&&!hover&&!focus&&!drag){ph+=dt*TAU/PERIOD;yaw=Y0+AMP*Math.sin(ph);}
    render(now);dirty=false;lastR=now;
    if(vis&&!document.hidden&&(!RM()||active()))kick();
    else if(vis&&!document.hidden&&RM()&&dirty)kick();
  }
  if("IntersectionObserver" in window)new IntersectionObserver(es=>{vis=es[es.length-1].isIntersecting;if(vis){dirty=true;kick();}}).observe(svg);
  document.addEventListener("visibilitychange",()=>{if(!document.hidden){dirty=true;kick();}});
  rmq.addEventListener&&rmq.addEventListener("change",()=>{dirty=true;kick();});
  // interaction
  const stopAuto=()=>{autoOn=false;};
  const toVB=e=>{const r=svg.getBoundingClientRect(),vb=svg.viewBox.baseVal;return[(e.clientX-r.left)*vb.width/r.width+vb.x,(e.clientY-r.top)*vb.height/r.height+vb.y,r,vb];};
  function nearest(e,rad){const[x,y]=toVB(e);let b=null,bd=rad;tipsNow.forEach(t=>{const d=Math.hypot(t.X-x,t.Y-y);if(d<bd){bd=d;b=t;}});return b;}
  function showTip(t){
    if(!t){tipEl.hidden=true;if(hit!=null){hit=null;dirty=true;kick();}return;}
    tipEl.textContent=o.tip?o.tip(t.ser,t.i,t.v):`${o.labels[t.i]} ${t.v}`;tipEl.hidden=false;
    const r=svg.getBoundingClientRect(),h=host.getBoundingClientRect(),vb=svg.viewBox.baseVal,sx=r.width/vb.width,sy=r.height/vb.height;
    let px=r.left-h.left+(t.X-vb.x)*sx+12,py=r.top-h.top+(t.Y-vb.y)*sy-32;const w=tipEl.offsetWidth;if(px+w>h.width-2)px=px-w-24;px=Math.max(2,px);py=Math.max(2,py);
    tipEl.style.left=px+"px";tipEl.style.top=py+"px";if(hit!==t.i){hit=t.i;dirty=true;kick();}
  }
  function resetView(){
    stopAuto();vy=vp=0;let y1=Y0;const k=Math.round((yaw-Y0)/TAU);y1=Y0+k*TAU;
    if(RM()){yaw=y1;pitch=P0;twn=null;}else twn={t0:performance.now(),d:480,y0:yaw,y1,p0:pitch,p1:P0};dirty=true;kick();
  }
  const nudge=(dy,dp)=>{stopAuto();twn=null;yaw+=dy*DEG;pitch=clamp(pitch+dp*DEG,PMIN,PMAX);dirty=true;kick();};
  let vlast=null;
  svg.addEventListener("pointerdown",e=>{
    if(e.pointerType==="mouse"&&e.button!==0)return;
    drag={id:e.pointerId,x:e.clientX,y:e.clientY,lx:e.clientX,ly:e.clientY,t:performance.now(),moved:false,touch:e.pointerType!=="mouse"};vy=vp=0;twn=null;vlast=null;
    try{svg.setPointerCapture(e.pointerId);}catch(_){}
  });
  svg.addEventListener("pointermove",e=>{
    if(drag&&drag.id===e.pointerId){
      const dx=e.clientX-drag.lx,dy=e.clientY-drag.ly,now=performance.now();
      if(!drag.moved&&Math.hypot(e.clientX-drag.x,e.clientY-drag.y)>5){drag.moved=true;stopAuto();svg.classList.add("drag");showTip(null);}
      if(drag.moved){const r=svg.getBoundingClientRect(),k=380/Math.max(r.width,1)*.0085;yaw+=dx*k;if(!drag.touch)pitch=clamp(pitch+dy*k*.85,PMIN,PMAX);
        if(vlast){const h=Math.max(.008,(now-vlast.t)/1000);vy=vy*.6+(dx*k/h)*.4;vp=drag.touch?0:vp*.6+(dy*k*.85/h)*.4;}vlast={t:now};dirty=true;kick();}
      drag.lx=e.clientX;drag.ly=e.clientY;return;
    }
    if(e.pointerType==="mouse"){hover=true;showTip(nearest(e,15));}
  });
  const endDrag=(e,cancel)=>{
    if(!drag||drag.id!==e.pointerId)return;const d=drag;drag=null;svg.classList.remove("drag");try{svg.releasePointerCapture(e.pointerId);}catch(_){}
    if(d.moved){if(cancel||RM()||(vlast&&performance.now()-vlast.t>90))vy=vp=0;kick();return;}
    if(cancel)return;
    // a tap: a second tap close to the first resets the view; on touch a tap on a pillar shows its value for a moment
    const now=performance.now();
    if(now-tapT<380&&Math.hypot(e.clientX-tapX,e.clientY-tapY)<30){tapT=0;resetView();showTip(null);return;}
    tapT=now;tapX=e.clientX;tapY=e.clientY;
    if(d.touch){const t=nearest(e,20);showTip(t);clearTimeout(tipTimer);if(t)tipTimer=setTimeout(()=>showTip(null),2600);}
  };
  svg.addEventListener("pointerup",e=>endDrag(e,false));
  svg.addEventListener("pointercancel",e=>endDrag(e,true));
  svg.addEventListener("pointerleave",e=>{if(e.pointerType==="mouse"){hover=false;showTip(null);kick();}});
  svg.addEventListener("dblclick",e=>{e.preventDefault();resetView();});
  svg.addEventListener("focus",()=>{focus=true;});svg.addEventListener("blur",()=>{focus=false;kick();});
  svg.addEventListener("keydown",e=>{
    const k=e.key;if(k==="ArrowLeft")nudge(-9,0);else if(k==="ArrowRight")nudge(9,0);else if(k==="ArrowUp")nudge(0,5);else if(k==="ArrowDown")nudge(0,-5);else if(k==="Home"||k==="Escape")resetView();else return;
    e.preventDefault();e.stopPropagation();
  });
  ctl.addEventListener("click",e=>{const b=e.target.closest("button");if(!b)return;if(b.dataset.k==="rs")resetView();else if(e.detail===0)nudge(0,b.dataset.k==="up"?6:-6);});
  let rep=0;
  ctl.addEventListener("pointerdown",e=>{const b=e.target.closest("button");if(!b||b.dataset.k==="rs")return;const s=b.dataset.k==="up"?1.3:-1.3;nudge(0,s);clearInterval(rep);rep=setInterval(()=>nudge(0,s),55);});
  const stopRep=()=>clearInterval(rep);["pointerup","pointercancel","pointerleave"].forEach(n=>ctl.addEventListener(n,stopRep));
  readColours(performance.now());
  const api={
    set(a,b,m){dataA=a.map(v=>clamp(+v||0,0,10));dataB=b?b.map(v=>clamp(+v||0,0,10)):null;dashA=!!(m&&m.aDash);dashB=!!(m&&m.bDash);dirty=true;kick();},
    alt(text){descEl.textContent=text;},
    reset:resetView,
    view(){return{yaw:yaw/DEG,pitch:pitch/DEG,auto:autoOn&&!RM()};},
    setView(y,p){stopAuto();twn=null;yaw=y*DEG;pitch=clamp(p*DEG,PMIN,PMAX);dirty=true;kick();},
    tips(){return tipsNow.map(t=>({...t}));},
    values(){return{a:[...dataA],b:dataB?[...dataB]:null};}
  };
  svg.__r3=api;kick();return api;
}
