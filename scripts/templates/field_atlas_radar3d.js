// Field Atlas Radar3D — the 10-axis Atlas Resonance radar as a small 3D scene (SVG, own projection, no WebGL).
// One source for every Field Atlas page: scripts/field_atlas_nocturne.py (build) and scripts/field_atlas_radar.py
// insert it where a template marks it (the map pages at their SHARED_JS marker, the Radar page at its CORE_JS marker).
// It reads nothing from the page except what is passed in, so Nocturne, Aubade, Cartograph, Contour, Gloaming and
// Radar all use it unchanged. Colours are not typed here: the page's own radar classes (.rg .rtk .rax .rpa .rpb
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
function Radar3D(svg,o){
  const NS="http://www.w3.org/2000/svg",N=o.labels.length,DEG=Math.PI/180,TAU=Math.PI*2;
  const R=100,T=9,HS=4.4,TOPY=10*HS,D=640,CX=o.cx,CY=o.cy,K=o.rad/R;
  const Y0=-12*DEG,P0=50*DEG,PMIN=12*DEG,PMAX=86*DEG,AMP=34*DEG,PERIOD=18;
  const rmq=matchMedia("(prefers-reduced-motion: reduce)"),RM=()=>rmq.matches;
  const host=svg.parentElement;
  if(getComputedStyle(host).position==="static")host.style.position="relative";
  let yaw=Y0,pitch=P0,vy=0,vp=0,ph=0,autoOn=true,hover=false,focus=false,drag=null,twn=null,hoverTip=null;
  let dataA=new Array(N).fill(0),dataB=null,dashA=false,dashB=false,dirty=true,vis=true,raf=0,lastT=0,lastR=0,tipsNow=[],tapT=0,tapX=0,tapY=0,colT=-1e9,tipTimer=0,hit=null;
  let C={a:"#d97757",b:"#4f82b5",lab:"#777"},fs=8.6;
  // static markup: defs, one dynamic group, a text alternative
  svg.classList.add("r3");svg.setAttribute("tabindex","0");svg.setAttribute("aria-keyshortcuts","ArrowLeft ArrowRight ArrowUp ArrowDown Home");
  svg.innerHTML=`<desc id="r3desc"></desc><defs><radialGradient id="r3gd" cx="50%" cy="50%" r="50%"><stop offset="0" stop-color="currentColor" stop-opacity=".13"/><stop offset=".72" stop-color="currentColor" stop-opacity=".05"/><stop offset="1" stop-color="currentColor" stop-opacity="0"/></radialGradient><radialGradient id="r3gs" cx="50%" cy="50%" r="50%"><stop offset="0" stop-color="#000" stop-opacity=".26"/><stop offset=".6" stop-color="#000" stop-opacity=".12"/><stop offset="1" stop-color="#000" stop-opacity="0"/></radialGradient></defs><g id="r3g"></g>`;
  svg.setAttribute("aria-describedby","r3desc");
  const g=svg.querySelector("#r3g"),descEl=svg.querySelector("#r3desc");
  const st=document.createElement("style");st.textContent=`svg.r3{touch-action:pan-y;cursor:grab;-webkit-user-select:none;user-select:none;-webkit-tap-highlight-color:transparent;outline:none}
svg.r3.drag{cursor:grabbing}svg.r3:focus-visible{outline:2px solid currentColor;outline-offset:3px;border-radius:6px}
svg.r3 text{pointer-events:none;-webkit-user-select:none;user-select:none}
.r3-ctl{position:absolute;right:2px;bottom:2px;display:flex;gap:4px;z-index:2}
.r3-btn{width:30px;height:30px;padding:0;border:1px solid currentColor;border-radius:50%;background:transparent;color:inherit;font:600 14px/1 system-ui,sans-serif;cursor:pointer;opacity:.7;display:grid;place-items:center;touch-action:manipulation}
.r3-btn:hover,.r3-btn:focus-visible{opacity:1}
.r3-tip{position:absolute;z-index:3;pointer-events:none;padding:4px 8px;border-radius:6px;font:500 11.5px/1.4 system-ui,"Hiragino Sans",sans-serif;white-space:nowrap;box-shadow:0 4px 14px rgba(0,0,0,.28)}`;
  document.head.appendChild(st);
  // controls: reset, tilt up / down (tilt is for touch, where a vertical drag scrolls the page)
  const ctl=document.createElement("div");ctl.className="r3-ctl";
  ctl.innerHTML=`<button type="button" class="r3-btn" data-k="up" aria-label="傾きを上げる（真上から見る）" title="真上から">▲</button><button type="button" class="r3-btn" data-k="dn" aria-label="傾きを下げる（横から見る）" title="横から">▼</button><button type="button" class="r3-btn" data-k="rs" aria-label="視点をリセット" title="視点をリセット（ダブルクリック）">↺</button>`;
  host.appendChild(ctl);
  let tipEl=o.tipEl;const ownTip=!tipEl;if(!tipEl){tipEl=document.createElement("div");tipEl.className="r3-tip";tipEl.hidden=true;host.appendChild(tipEl);}
  const clamp=(v,a,b)=>Math.max(a,Math.min(b,v));
  const esc=s=>String(s).replace(/[&<>"]/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]));
  // colours of the page's own radar classes
  function readColours(now){
    colT=now;const mk=(tag,cls)=>{const e=document.createElementNS(NS,tag);e.setAttribute("class",cls);e.style.visibility="hidden";svg.appendChild(e);const cs=getComputedStyle(e),r={s:cs.stroke,f:cs.fill,fs:parseFloat(cs.fontSize)};svg.removeChild(e);return r;};
    const a=mk("path","rpa"),b=mk("path","rpb"),t=mk("text","rax"),ok=v=>v&&v!=="none"&&v!=="";
    C={a:ok(a.s)?a.s:a.f,b:ok(b.s)?b.s:b.f,lab:ok(t.f)?t.f:"#777"};if(t.fs>0)fs=t.fs;
    svg.style.color=C.lab;ctl.style.color=C.lab;
    const m=C.lab.match(/\d+(\.\d+)?/g)||[0,0,0],lum=(.299*m[0]+.587*m[1]+.114*m[2])/255;if(ownTip){tipEl.style.background=C.lab;tipEl.style.color=lum>.55?"#0b0b0b":"#fff";}
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
