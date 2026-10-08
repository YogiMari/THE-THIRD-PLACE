// Field Atlas shared script — the part of the page script that Field Atlas Nocturne and Field Atlas Aubade
// have in common. scripts/field_atlas_nocturne.py (build) inserts it into each template's <script> where
// the template marks it. It runs in the page's own closure, after the data constants (DATA, GEO, LL, IMG,
// ROUTES, EXTRA ...) and PAGE_URL are defined, and reaches the page's map objects (GL, V, proj, FR ...)
// only when called. What differs between the two editions (CSS, staging, camera, selection flight) stays
// in the templates. Do not add page-specific code here.
const LON0=139.8827,LAT0=35.7331,KX=Math.cos(LAT0*Math.PI/180)*10,KZ=10;
const AXE=["GROUND","LAYOUT","FACILITY","OPERATION","COMFORT","VIEW","PLACE","EXPERIENCE","DISTANCE","PARTNER"];
const $=s=>document.querySelector(s);
const esc=s=>String(s).replace(/[&<>"]/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]));
const RM=matchMedia("(prefers-reduced-motion: reduce)").matches;
const get=r=>DATA.find(d=>d.rank===r);
const q8=d=>d.axes.slice(0,8).reduce((a,b)=>a+b,0);
const pv=d=>d.axes.reduce((a,b)=>a+b,0);
const ease=t=>t<.5?4*t*t*t:1-Math.pow(-2*t+2,3)/2, eout=t=>1-Math.pow(1-t,3);
const clamp=(v,a,b)=>Math.max(a,Math.min(b,v));
const pad=(n,k=2)=>String(n).padStart(k,"0");
// straight-line distance (km) and bearing (deg) from Koiwa
function nav(r){return navLL(LL[r]);}
function navLL(p){if(!p)return null;const R=6371,toR=Math.PI/180,[lon,lat]=p,f1=LAT0*toR,f2=lat*toR,dl=(lon-LON0)*toR;
  const a=Math.sin((f2-f1)/2)**2+Math.cos(f1)*Math.cos(f2)*Math.sin(dl/2)**2,km=2*R*Math.asin(Math.sqrt(a));
  const y=Math.sin(dl)*Math.cos(f2),x=Math.cos(f1)*Math.sin(f2)-Math.sin(f1)*Math.cos(f2)*Math.cos(dl),brg=(Math.atan2(y,x)/toR+360)%360;
  return{km,brg,lat,lon};}
const fmtLL=(lat,lon)=>`${lat.toFixed(3)}N ${lon.toFixed(3)}E`;
// OP-010 Part C: ground icons, the five lineages, what each axis is scored from, early check-in tiers
const GROUND={"🪨":"Gravel","⛰":"Rock","🌱":"Grass","🌲":"Forest","🟫":"Soil","🧱":"Brick Chips"};
const EMO=g=>g==="⛰"?"⛰\uFE0F":g; // ⛰ needs the emoji selector to draw in colour
const gtxt=d=>(d.ground||[]).map(g=>EMO(g)+" "+GROUND[g]).join(" · ");
const LINE=[["Site",0],["Infrastructure",2],["Stay",4],["Identity",6],["Relation",8]];
const BASIS=["事実（地面の種類・状態）","事実（区画面積・車の横付け等）","事実と品質の判断（設備・清潔さ・温水）","事実（アーリーチェックインの区分から決まる）","判断（場内動線・区画間隔・静けさ）","判断（景観）","判断（土地の個性・周辺環境）","判断（その場所でしかできない体験）","計算（移動時間）","パートナーの感想"];
const TIERS=[["A","早い",10],["B","可",8],["C","条件付き",6],["D","不可",2]];
const AVG=AXE.map((_,i)=>DATA.reduce((s,d)=>s+d.axes[i],0)/Math.max(DATA.length,1));
const avgSum=(a,b)=>AVG.slice(a,b).reduce((x,y)=>x+y,0);
// DB-001 Field Log: the nearest planned camp
const LOG=EXTRA.log||{},BENCH=EXTRA.bench||[];
const today=()=>new Date(Date.now()+9*3600e3).toISOString().slice(0,10);
const day0=s=>(String(s).match(/\d{4}-\d{2}-\d{2}/)||[])[0];
const daysTo=s=>Math.round((Date.parse(s+"T00:00:00Z")-Date.parse(today()+"T00:00:00Z"))/864e5);
const dLabel=n=>n>0?"D-"+n:n===0?"TODAY":"D+"+(-n);
const NEXT=(()=>{let best=null;for(const r in LOG)LOG[r].forEach(e=>{const d=day0(e.date);if(e.status==="Planned"&&d&&get(+r)&&(!best||d<best.d))best={r:+r,d,e};});return best;})();

let state={a:1,b:null,sort:"pv",view:"oblique",vis:"all",gr:null};
try{const s=JSON.parse(localStorage.getItem("fa-nav1")||"null");if(s){if(get(s.a))state.a=s.a;if(s.b===null||get(s.b))state.b=s.b;if(["q","pv","t"].includes(s.sort))state.sort=s.sort;if(["all","v","u"].includes(s.vis))state.vis=s.vis;if(GROUND[s.gr])state.gr=s.gr;}}catch(e){}
if(state.b===state.a)state.b=null;
function save(){try{localStorage.setItem("fa-nav1",JSON.stringify({a:state.a,b:state.b,sort:state.sort,vis:state.vis,gr:state.gr}));}catch(e){}}
const shown=d=>(state.vis==="all"||(state.vis==="v")===d.visited)&&(!state.gr||(d.ground||[]).includes(state.gr));
const SORTS={pv:(x,y)=>pv(y)-pv(x)||x.rank-y.rank,q:(x,y)=>q8(y)-q8(x)||x.rank-y.rank,t:(x,y)=>x.hours-y.hours||x.rank-y.rank};
function sorted(){return DATA.filter(shown).sort(SORTS[state.sort]);}
// MD-002 §Site Record, elevation (GSI), surroundings (OSM + OSRM), gear names (MD-004)
const SITE=EXTRA.site||{},ELEV=EXTRA.elev||{},SURR=EXTRA.surr||{},GEAR=EXTRA.gear||{},HOME_ELEV=EXTRA.home_elev;
const tempDiff=m=>HOME_ELEV==null||m==null?null:-(m-HOME_ELEV)*.6/100; // 0.6 ℃ per 100 m, a rough guide
const fmtT=t=>`${t>=0?"+":"−"}${Math.abs(t).toFixed(1)}℃`;
const gearIds=t=>[...new Set(String(t).match(/\b[A-Z]{3}-\d{3}[a-z]?\b/g)||[])];
const SURR_L=[["ic","高速IC"],["conv","コンビニ"],["super","スーパー"],["bath","温泉・入浴"],["hosp","病院"]];
// cold guide: the JMA normal (1991-2020) of the daily lowest temperature, in the month of the planned camp, at the nearest AMeDAS station;
// and the same value moved by the height difference between the station and the field (0.6 ℃ per 100 m, a rough guide)
const CLIM=EXTRA.climate||{};
const campDay=r=>(LOG[r]||[]).map(e=>e.status==="Planned"?day0(e.date):null).find(Boolean);
const fmtC=v=>`${v<0?"−":""}${Math.abs(v).toFixed(1)}℃`;
function coldOf(r){const c=CLIM[r],ds=campDay(r);if(!c||!ds)return null;const mo=+ds.slice(5,7),t=c.tmin[mo-1];if(t==null)return null;
  const el=ELEV[r],dh=el==null?null:el-c.elev;return{c,ds,mo,t,el,dh,adj:dh==null?null:t-dh*.6/100};}
// sunrise and sunset in minutes from JST midnight (NOAA equations, solarDay below; sea-level horizon)
function sunTimes(ds,lat,lon){const s=solarDay(ds,lat,lon,9);return s&&s.rise!=null&&s.set!=null?{rise:s.rise,set:s.set}:null;}
const hm=m=>{const t=Math.round(m);return `${Math.floor(t/60)}:${pad(t%60)}`;};
// moon age at 21:00 JST of the date, from the new moon of 2000-01-06 18:14 UTC
function moonAt(ds){const age=(((Date.parse(ds+"T12:00:00Z")-Date.UTC(2000,0,6,18,14))/864e5)%29.530588853+29.530588853)%29.530588853;
  const lit=(1-Math.cos(2*Math.PI*age/29.530588853))/2;
  const nm=age<1.85||age>=27.68?"新月":age<5.54?"三日月":age<9.23?"上弦":age<12.92?"十日夜":age<16.61?"満月":age<20.3?"寝待月":age<23.99?"下弦":"有明月";
  return{age,lit,nm};}
function siteHTML(A){
  const r=A.rank,st=SITE[r],el=ELEV[r],td=tempDiff(el);
  const gn=st?st.ground.replace(/^[🪨⛰🌱🌲🟫🧱\uFE0F\s]+/u,"").replace("（MD-002既記録）","").replace(/^[。・\s]+/,""):"";
  const gl=[gtxt(A),gn].filter(x=>x&&x!=="—").join(" · ")||(st?st.ground:"");
  const rows=(st?[["GROUND",gl],["AREA",st.area],["PARKING",st.parking]]:[]).map(([k,v])=>`<dt>${k}</dt><dd>${esc(v)}</dd>`).join("")+
    (el!=null?`<dt>ELEV</dt><dd>${el.toLocaleString()} m${td!=null?` · 小岩より約 ${fmtT(td)}`:""}</dd>`:"");
  return rows?`<span class="k">SITE · MD-002 SITE RECORD</span><dl class="kv">${rows}</dl><span class="srcl">${st?"出典："+esc(st.source)+" · ":""}基準 80㎡（車別）／100㎡（車込）。気温差は標高差×0.6℃/100mの目安（標高：国土地理院）</span>`:"";}
function skyHTML(A){
  const ll=LL[A.rank];if(!ll)return "";
  const plan=(LOG[A.rank]||[]).map(e=>e.status==="Planned"?day0(e.date):null).find(Boolean),ds=plan||today();
  const s=sunTimes(ds,ll[1],ll[0]),m=moonAt(ds);
  return `<span class="k">SKY · ${esc(ds)}${plan?" · NEXT CAMP":" · TODAY"}</span><dl class="kv"><dt>SUN</dt><dd>${s?`日の出 ${hm(s.rise)} · 日の入り ${hm(s.set)}`:"—"}</dd><dt>MOON</dt><dd>月齢 ${m.age.toFixed(1)}（${m.nm}・明るさ ${Math.round(m.lit*100)}%）${m.lit<.25?" · 月明かりが少ない夜":""}</dd></dl><span class="srcl">計算値（日の出・日の入りは海面基準、月齢は21時）。山の陰や天候は含みません</span>`;}
function surrHTML(A){
  const sv=SURR[A.rank];if(!sv)return "";
  const li=SURR_L.map(([k,l])=>{const v=sv[k];return `<li><b>${l}</b><span>${v?esc((v.name||"（名称未登録）").replace(/;/g,"・"))+(v.onsen?" ♨":""):"—"}</span><em>${v?`${v.km} km · ${v.min}分`:"30km圏に登録なし"}</em></li>`;}).join("");
  return `<span class="k">SURROUNDINGS · 周辺環境</span><ul class="sv">${li}</ul><span class="srcl">OpenStreetMapに登録された最寄り（直線で近い3件のうち車で最短）。道のりと時間はOSRM（渋滞なし）。登録の無い施設は出ない参考値です</span>`;}
function coldHTML(A){const o=coldOf(A.rank);if(!o)return "";const c=o.c;
  const rows=`<dt>STATION</dt><dd>気象庁アメダス ${esc(c.station)}（${esc(c.pref)}・標高 ${c.elev.toLocaleString()} m）</dd><dt>MIN TEMP</dt><dd>${o.mo}月上旬の平年 日最低気温 ${fmtC(o.t)}</dd>`+
    (o.adj!=null?`<dt>ADJUSTED</dt><dd>約 ${fmtC(o.adj)}（標高差 ${o.dh>=0?"+":"−"}${Math.abs(o.dh)} m の補正・目安）</dd>`:"");
  return `<span class="k">COLD · ${esc(o.ds)} · NEXT CAMP</span><dl class="kv">${rows}</dl><span class="srcl">${esc(c.period)}年の平年値（${o.mo}月上旬＝1〜10日の日最低気温の平均）。補正は標高差×0.6℃/100mの目安で、当日の気温や天気予報ではありません。出典：<a href="${esc(c.url)}" target="_blank" rel="noopener">気象庁 平年値（${esc(c.station)}）</a></span>`;}
function gearHTML(cfg){const ids=gearIds(cfg).filter(g=>GEAR[g]);
  return ids.length?`<dl class="gear">${ids.map(g=>`<dt>${g}</dt><dd>${esc(GEAR[g].brand||"")} ${esc(GEAR[g].product||"")}<small>${esc(GEAR[g].status||"")}</small></dd>`).join("")}</dl><span class="srcl">装備名：MD-004 Equipment Registry</span>`:"";}
// deep link: #f=<rank> opens that field
try{const m=location.hash.match(/f=(\d+)/);if(m&&get(+m[1])){state.a=+m[1];if(state.b===state.a)state.b=null;}}catch(e){}
function setHash(){try{history.replaceState(null,"","#f="+state.a);}catch(e){}}
async function copyLink(btn){const u=PAGE_URL+"#f="+state.a,lab=btn.textContent;
  try{await navigator.clipboard.writeText(u);btn.textContent="コピーしました";}catch(e){try{window.prompt("このリンクをコピーしてください",u);}catch(_){}}
  setTimeout(()=>{btn.textContent=lab;},1800);}

/* ---------- info bubble: opens over the destination when the selection flight lands ---------- */
let bubOn=false,bubAt=0;
function bubbleHTML(d){
  const r=d.rank,rt=ROUTES[r],el=ELEV[r],td=tempDiff(el),st=SITE[r],sv=SURR[r],e=d.early,lg=(LOG[r]||[]).find(x=>x.status==="Planned"),k=lg&&day0(lg.date);
  const row=(a,b)=>b?`<dt>${a}</dt><dd>${b}</dd>`:"";
  return `<button type="button" class="bx" aria-label="閉じる">×</button>
  <div class="bh">${IMG[r]?`<img src="${IMG[r]}" alt="">`:""}<div><span class="bk">RANK ${pad(r)} · ${pv(d)}/100${d.visited?"":" · 未訪問"}</span><b class="bn">${esc(d.name)}</b><span class="bg">${esc(d.tag)}</span></div></div>
  ${lg?`<div class="bnx">NEXT CAMP · ${esc(lg.date)}${k?" · "+dLabel(daysTo(k)):""}</div>`:""}
  <dl>${row("TRAVEL",`${d.hours.toFixed(1)} H${rt?` · ROAD ${rt.km} KM`:""}`)}${row("GROUND",d.ground&&d.ground.length?esc(gtxt(d)):"")}${row("EARLY",`<span class="led t-${e.tier}">${esc(e.label)}</span> ${esc(e.detail)}`)}${row("AREA",st&&st.area?esc(st.area):"")}${row("ELEV",el!=null?`${el.toLocaleString()} m${td!=null?` · 小岩より約 ${fmtT(td)}`:""}`:"")}${row("COLD",(o=>o?`${o.mo}月上旬の平年 最低 ${o.adj!=null?"約 "+fmtC(o.adj):fmtC(o.t)}`:"")(coldOf(r)))}${row("ONSEN",sv&&sv.bath?`${esc((sv.bath.name||"（名称未登録）").replace(/;/g,"・"))} · ${sv.bath.km} km · ${sv.bath.min}分`:"")}</dl>`;}
function showBubble(){const d=get(state.a);if(!GL||!d||!GEO[d.rank])return;const bub=$("#bub");
  bub.innerHTML=`<div class="bub-in">${bubbleHTML(d)}</div><i class="bub-tail" aria-hidden="true"></i>`;bub.setAttribute("aria-label",d.name+"の情報");
  bub.hidden=false;bub.style.visibility="hidden";bubOn=true;bub.querySelector(".bx").onclick=e=>{e.stopPropagation();hideBubble();};}
function hideBubble(){bubOn=false;bubAt=0;const bub=$("#bub");bub.hidden=true;bub.innerHTML="";}
document.addEventListener("keydown",e=>{if(e.key==="Escape"&&bubOn)hideBubble();});
// keeps the bubble on the destination pin; flips below the pin near the top edge and stays inside the map sideways
function placeBubble(lift){
  if(bubAt&&performance.now()>=bubAt){bubAt=0;showBubble();}
  if(!bubOn)return;const g=GEO[state.a],bub=$("#bub");if(!g){hideBubble();return;}
  const p=proj(V(g[0],lift+.05,g[1]));if(!p.ok){bub.style.visibility="hidden";return;}
  // stay within the part of the map not covered by the header, panels and cards
  if(!FR||performance.now()-FRt>500){FR=freeRect();FRt=performance.now();}
  const f=FR,bw=bub.offsetWidth,bh=bub.offsetHeight,L=Math.max(8,f.L0-22),R=Math.min(f.w-8,f.R0+22),top=Math.max(8,f.T0-22),bot=Math.min(f.h-8,f.B0+22),gap=30;
  // above the pin if it fits, else below, else beside it (whichever side has room)
  let mode="above";
  if(p.y-bh-gap<top){mode=p.y+gap+bh<=bot?"below":p.x+gap+bw<=R?"right":p.x-gap-bw>=L?"left":(p.y-top<bot-p.y?"below":"above");}
  let bx,by;
  if(mode==="above"||mode==="below"){const lo=L+bw/2,x=clamp(p.x,lo,Math.max(lo,R-bw/2));bx=x-bw/2;by=mode==="above"?p.y-bh-gap:p.y+gap;bub.style.setProperty("--tx",(p.x-x).toFixed(1)+"px");bub.style.setProperty("--ty","0px");}
  else{by=clamp(p.y-bh/2,top,Math.max(top,bot-bh));bx=mode==="right"?p.x+gap:p.x-gap-bw;bub.style.setProperty("--ty",(p.y-(by+bh/2)).toFixed(1)+"px");bub.style.setProperty("--tx","0px");}
  if(bub.dataset.mode!==mode)bub.dataset.mode=mode;
  bub.style.transform=`translate(${bx.toFixed(1)}px,${by.toFixed(1)}px)`;bub.style.visibility="";}

/* ---------- telemetry ---------- */
$("#tFld").textContent=`${DATA.length} · VISITED ${DATA.filter(d=>d.visited).length}`;
function clock(){try{$("#tClk").textContent=new Date().toLocaleString("sv-SE",{timeZone:"Asia/Tokyo"}).replace(",","");}catch(e){$("#tClk").textContent=new Date().toISOString().slice(0,19).replace("T"," ");}}
clock();setInterval(clock,1000);

/* ---------- shared function declarations (hoisted; text identical in both editions) ---------- */
function markRows(){rows.querySelectorAll(".row").forEach(r=>{const k=+r.dataset.r;r.classList.toggle("on",k===state.a);r.classList.toggle("vs",k===state.b);r.querySelector(".pick").setAttribute("aria-pressed",String(k===state.a));r.querySelector(".vsb").setAttribute("aria-pressed",String(k===state.b));});
  const on=rows.querySelector(".row.on");if(on){const t=on.offsetTop,h=on.offsetHeight;if(t<rows.scrollTop)rows.scrollTop=t-8;else if(t+h>rows.scrollTop+rows.clientHeight)rows.scrollTop=t+h-rows.clientHeight+8;}}
function resort(){[["#sPV","pv"],["#sQ","q"],["#sT","t"]].forEach(([s,k])=>$(s).setAttribute("aria-pressed",String(state.sort===k)));
  filt.querySelectorAll("button").forEach(b=>b.setAttribute("aria-pressed",String(b.dataset.v?b.dataset.v===state.vis:b.dataset.g===state.gr)));
  buildRows();markRows();save();}
function step(d){const l=sorted();if(!l.length)return;const i=l.findIndex(x=>x.rank===state.a);setA(l[i<0?0:(i+d+l.length)%l.length].rank);}
function lock(S){const el=$("#ret"+S);el.classList.remove("lock");void el.offsetWidth;el.classList.add("lock");}
function domain(u){try{return new URL(u).hostname.replace(/^www\./,"");}catch(e){return "";}}
function el(n,a,p){const e=document.createElementNS(NS,n);for(const k in a)e.setAttribute(k,a[k]);(p||svg).appendChild(e);return e;}
function adv(R,now){let done=true;for(let i=0;i<10;i++){const t=clamp((now-R.t0-i*75)/900,0,1);if(t<1)done=false;R.cur[i]=R.from[i]+(R.to[i]-R.from[i])*eout(t);}return done;}
function radarFrame(now){const d1=adv(RA,now),d2=adv(RB,now);drawRadar(now);if(!(d1&&d2)||now<scrUntil)radRaf=requestAnimationFrame(radarFrame);}
function viewBtns(){$("#vObl").setAttribute("aria-pressed",String(state.view==="oblique"));$("#vTop").setAttribute("aria-pressed",String(state.view==="top"));}
// the part of the map not covered by instruments
function freeRect(){
  const w=mapEl.clientWidth||1,h=mapEl.clientHeight||1,wide=window.innerWidth>900;
  let L0=16,R0=w-16,T0=16,B0=h-16;
  if(wide){const mr=mapEl.getBoundingClientRect(),lr=$(".index").getBoundingClientRect(),ar=$(".analysis").getBoundingClientRect();
    L0=lr.right-mr.left+30;R0=ar.left-mr.left-30;T0=$(".strip").getBoundingClientRect().bottom-mr.top+30;
    const tops=[...document.querySelectorAll(".tc")].filter(c=>!c.hidden).map(c=>c.getBoundingClientRect().top);B0=(tops.length?Math.min(...tops):h)-mr.top-30;}
  return{w,h,L0,R0,T0,B0,aw:Math.max(120,R0-L0),ah:Math.max(120,B0-T0)};
}
function frameBox(x0,x1,z0,z1,phi,pad){
  const f=freeRect(),asp=f.w/f.h,ex=Math.max(x1-x0,4),ez=Math.max(z1-z0,4)*Math.max(.55,Math.cos(phi));
  const dist=Math.max(ex/(vis*asp*f.aw/f.w),ez/(vis*f.ah/f.h),9)*pad,wpp=dist*vis/f.h;
  const cx=(x0+x1)/2-((f.L0+f.R0)/2-f.w/2)*wpp,cz=(z0+z1)/2-((f.T0+f.B0)/2-f.h/2)*wpp/Math.max(.55,Math.cos(phi));
  return{tx:cx,ty:0,tz:cz,dist,phi,theta:0};
}
function kanto(){const [x0,z1]=P(137.75,34.72),[x1,z0]=P(140.95,37.75);return frameBox(x0,x1,z0,z1,.84,1.0);}
function glowTex(){const c=document.createElement("canvas");c.width=c.height=64;const g=c.getContext("2d"),gr=g.createRadialGradient(32,32,0,32,32,32);
  gr.addColorStop(0,"rgba(255,255,255,1)");gr.addColorStop(.2,"rgba(255,255,255,.6)");gr.addColorStop(1,"rgba(255,255,255,0)");g.fillStyle=gr;g.fillRect(0,0,64,64);return new THREE.CanvasTexture(c);}
function tapTo(fn){return el=>{if(!el)return;let x=0,y=0,t=0,last=0;const run=()=>{const n=performance.now();if(n-last<600)return;last=n;fn();};
  el.addEventListener("pointerdown",e=>{x=e.clientX;y=e.clientY;t=1;e.stopPropagation();});
  el.addEventListener("pointerup",e=>{if(t&&Math.hypot(e.clientX-x,e.clientY-y)<12){e.preventDefault();run();}t=0;e.stopPropagation();});
  el.addEventListener("click",e=>{e.preventDefault();run();});
  el.addEventListener("keydown",e=>{if(e.key==="Enter"||e.key===" "){e.preventDefault();run();}});};}
function mkLabel(cls,html){const e=document.createElement("div");e.className="lb "+cls;e.innerHTML=html;labBox.appendChild(e);return e;}
function proj(v){tv.copy(v).project(camera);return{x:(tv.x*.5+.5)*mapEl.clientWidth,y:(-tv.y*.5+.5)*mapEl.clientHeight,ok:tv.z<1&&Math.abs(tv.x)<1.25&&Math.abs(tv.y)<1.25};}
function place(e,v,anchor){const p=proj(v);if(!p.ok){e.style.visibility="hidden";return p;}e.style.visibility="";e.style.transform=`translate(${p.x.toFixed(1)}px,${p.y.toFixed(1)}px) ${anchor||""}`;return p;}
function applyCam(){const sp=Math.sin(cam.phi);camera.position.set(cam.tx+cam.dist*sp*Math.sin(cam.theta),cam.ty+cam.dist*Math.cos(cam.phi),cam.tz+cam.dist*sp*Math.cos(cam.theta));camera.lookAt(cam.tx,cam.ty,cam.tz);camera.updateMatrixWorld();}
function setRay(e){const r=canvas.getBoundingClientRect();mv.set((e.clientX-r.left)/r.width*2-1,-((e.clientY-r.top)/r.height)*2+1);ray.setFromCamera(mv,camera);}
// Picking is done in screen space, not by casting a ray at an invisible column: a column tall enough to grab a pin
// also covers the pins behind it, so a neighbour in front kept winning. Each pin is scored by its distance on screen
// from the pointer to its head (full weight) or to its stem (a little less); the nearest one within reach wins, and a
// tie within 3 px goes to the pin nearer the camera. Fingers get a wider reach than a mouse.
// Heads that sit within a few pixels of each other (the Kanto view stacks some) cannot be told apart by position, so
// tapping the same spot again moves on to the next pin under it (pickTap).
const _pa=new THREE.Vector3(),_pb=new THREE.Vector3();
function pickAll(e){
  const r=canvas.getBoundingClientRect(),px=e.clientX-r.left,py=e.clientY-r.top,reach=(e.pointerType==="touch"||e.t)?34:22,out=[];
  for(const p of pins){
    if(!live(p.rank))continue;
    p.grp.updateWorldMatrix(true,false);
    _pa.set(0,p.h,0).applyMatrix4(p.grp.matrixWorld).project(camera);_pb.set(0,0,0).applyMatrix4(p.grp.matrixWorld).project(camera);
    if(_pa.z>=1||_pb.z>=1)continue;
    const hx=(_pa.x*.5+.5)*r.width,hy=(-_pa.y*.5+.5)*r.height,bx=(_pb.x*.5+.5)*r.width,by=(-_pb.y*.5+.5)*r.height;
    const dx=bx-hx,dy=by-hy,l2=dx*dx+dy*dy,t=l2>1e-6?Math.max(0,Math.min(1,((px-hx)*dx+(py-hy)*dy)/l2)):0;
    const sc=Math.min(Math.hypot(px-hx,py-hy),Math.hypot(px-(hx+dx*t),py-(hy+dy*t))+6);
    if(sc<=reach)out.push({rank:p.rank,sc,z:_pa.z});
  }
  out.sort((a,b)=>Math.abs(a.sc-b.sc)<3?a.z-b.z:a.sc-b.sc);
  return out;
}
function pick(e){const l=pickAll(e);return l.length?l[0].rank:null;}
let _tap=null;
function pickTap(e){
  const l=pickAll(e);if(!l.length){_tap=null;return null;}
  const near=l.filter(c=>c.sc-l[0].sc<=8).map(c=>c.rank),now=performance.now();
  if(_tap&&now-_tap.t<3000&&Math.hypot(e.clientX-_tap.x,e.clientY-_tap.y)<6&&near.length>1&&near.includes(_tap.rank)){
    _tap={x:e.clientX,y:e.clientY,t:now,rank:near[(near.indexOf(_tap.rank)+1)%near.length]};return _tap.rank;}
  _tap={x:e.clientX,y:e.clientY,t:now,rank:near[0]};return near[0];
}
function hover(e){const r=pick(e),hp=new THREE.Vector3();setRay(e);
  ground.constant=-pinG.position.y;if(ray.ray.intersectPlane(ground,hp))$("#tCur").textContent=fmtLL(LAT0-hp.z/KZ,LON0+hp.x/KX);
  canvas.classList.toggle("hot",!!r);hovered=r&&r!==state.a&&r!==state.b?r:null;L.h.hidden=!hovered;
  if(hovered){const d=get(hovered),n=nav(hovered);L.h.innerHTML=`<span class="n">${esc(d.name)}</span><span class="s">${pv(d)}/100 · ${d.hours.toFixed(1)}H${ROUTES[hovered]?" · ROAD "+ROUTES[hovered].km+"KM":""}</span>`;}}
function resize(){if(!GL)return;const w=mapEl.clientWidth,h=mapEl.clientHeight;if(!w||!h)return;renderer.setSize(w,h,false);camera.aspect=w/h;camera.updateProjectionMatrix();}
function xhair(p,n){const on=!!p;["#xh","#xv","#xtH","#xtV"].forEach(s=>$(s).classList.toggle("on",on));if(!p)return;
  $("#xh").style.transform=`translateY(${p.y.toFixed(1)}px)`;$("#xv").style.transform=`translateX(${p.x.toFixed(1)}px)`;
  const w=mapEl.clientWidth,h=mapEl.clientHeight;
  $("#xtH").textContent=n?n.lat.toFixed(3)+"N":"";$("#xtV").textContent=n?n.lon.toFixed(3)+"E":"";
  if(!FR||performance.now()-FRt>500){FR=freeRect();FRt=performance.now();}const f=FR;$("#xtH").style.transform=`translate(${(f.L0-20).toFixed(0)}px,${(p.y-16).toFixed(1)}px)`;$("#xtV").style.transform=`translate(${(p.x+6).toFixed(1)}px,${(f.T0-18).toFixed(0)}px)`;}

/* ======================================================================================================
   Atlas tools — added to every Field Atlas page that takes this script. Everything here is computed in the
   page from the data already on it (MD-002 scores, DB-001 Field Log, locations, GSI elevation / terrain grid);
   nothing is typed in and nothing is fetched. What a page changes about it lives in its template:
   CSS variables --fa-* (colours of the panel) and FA.theme (colours of the 3D overlays and how far the light
   and sky follow the time and season).
     1  time of day and season    the same place from morning to night and through the year: sun height,
                                  sky, light and ground tint (visual only; no weather)
     2  今日の一手                 one field, picked by fixed rules from the data (reason shown in one line)
     3  visited trail             the viewer marks fields visited; kept in this browser (localStorage), drawn in order
     4  terrain                   contour lines and hill shading from the GSI DEM grid (terrain.json)
     5  sun band                  sunrise / sunset / day length for the selected field and a date (NOAA equations)
     6  route comparison          straight-line distance and bearing between the two selected fields
   ====================================================================================================== */
const D2R=Math.PI/180,sst=(a,b,x)=>{const t=clamp((x-a)/(b-a),0,1);return t*t*(3-2*t);};
const FA={ready:false,gl:null,terr:null,trail:[],contour:false,relief:false,showTrail:true,sunDate:null,open:false,B:null,
  env:{on:false,h:+new Date(Date.now()+9*3600e3).toISOString().slice(11,13),mo:+new Date(Date.now()+9*3600e3).toISOString().slice(5,7)},
  // a template overrides these (Object.assign(FA.theme,{...})): night / day / warm = sky colours the light moves toward;
  // nightAmt / dayAmt / warmAmt = how far (0-1); landAmt = how much the season tints the ground; veil = strength of the screen tint;
  // contour / shade / trail / link = colours of the overlays
  theme:{night:0x070b1c,day:0x8fb4d6,warm:0xff9a5c,nightAmt:.8,dayAmt:0,warmAmt:.45,landAmt:.25,veil:1,
    contour:0x777777,contourOp:.55,contourMajor:0x444444,shadow:0x20180c,hi:0xffffff,shadeA:.5,hiA:.35,hyps:null,hypsA:.3,trail:0xd97757,link:0x4f82b5}};

/* --- NOAA Solar Calculator equations (Jean Meeus, Astronomical Algorithms; NOAA GML, gml.noaa.gov/grad/solcalc/calcdetails.html) ---
   Julian century T -> geometric mean longitude L0, mean anomaly M, eccentricity e, equation of centre C, apparent longitude,
   obliquity -> declination; equation of time; hour angle at zenith 90.833° (sunrise / sunset; 96° = civil twilight).
   Times are minutes after local midnight (tz = hours east of UTC). Accuracy about one minute at these latitudes. */
function solarAt(jd){
  const T=(jd-2451545)/36525,L0=((280.46646+T*(36000.76983+T*.0003032))%360+360)%360,M=357.52911+T*(35999.05029-.0001537*T),
    e=.016708634-T*(.000042037+.0000001267*T),Mr=M*D2R,
    C=Math.sin(Mr)*(1.914602-T*(.004817+.000014*T))+Math.sin(2*Mr)*(.019993-.000101*T)+Math.sin(3*Mr)*.000289,
    om=125.04-1934.136*T,lam=L0+C-.00569-.00478*Math.sin(om*D2R),
    eps=23+(26+(21.448-T*(46.815+T*(.00059-T*.001813)))/60)/60+.00256*Math.cos(om*D2R),
    dec=Math.asin(Math.sin(eps*D2R)*Math.sin(lam*D2R)),y=Math.tan(eps*D2R/2)**2,L=L0*D2R,
    eot=4/D2R*(y*Math.sin(2*L)-2*e*Math.sin(Mr)+4*e*y*Math.sin(Mr)*Math.cos(2*L)-.5*y*y*Math.sin(4*L)-1.25*e*e*Math.sin(2*Mr));
  return{dec,eot};
}
const jdAt=(ds,localMin,tz)=>{const [Y,M,D]=ds.split("-").map(Number);return Date.UTC(Y,M-1,D)/864e5+2440587.5+(localMin-tz*60)/1440;};
function solarDay(ds,lat,lon,tz){
  const at=m=>solarAt(jdAt(ds,m,tz)),noon0=720-4*lon+tz*60,cross=(zen,sign)=>{let t=noon0+sign*360;
    for(let k=0;k<3;k++){const s=at(t),c=Math.cos(zen*D2R)/(Math.cos(lat*D2R)*Math.cos(s.dec))-Math.tan(lat*D2R)*Math.tan(s.dec);
      if(c<-1||c>1)return null;t=720-4*(lon-sign*Math.acos(c)/D2R)-s.eot+tz*60;}
    return t;};
  const sn=at(noon0),noon=noon0-sn.eot,rise=cross(90.833,-1),set=cross(90.833,1);
  return{rise,set,noon,len:rise==null||set==null?null:set-rise,dawn:cross(96,-1),dusk:cross(96,1),noonEl:90-Math.abs(lat-sn.dec/D2R)};
}
// sun height and compass direction (degrees) at a local time of day
function sunAt(ds,localMin,lat,lon,tz){
  const s=solarAt(jdAt(ds,localMin,tz)),tst=((localMin+s.eot+4*lon-60*tz)%1440+1440)%1440,ha=tst/4-180,
    cz=Math.sin(lat*D2R)*Math.sin(s.dec)+Math.cos(lat*D2R)*Math.cos(s.dec)*Math.cos(ha*D2R),zen=Math.acos(clamp(cz,-1,1));
  let az=Math.acos(clamp((Math.sin(lat*D2R)*Math.cos(zen)-Math.sin(s.dec))/(Math.cos(lat*D2R)*Math.sin(zen)||1e-9),-1,1))/D2R;
  az=ha>0?(az+180)%360:(540-az)%360;return{el:90-zen/D2R,az};
}
// great-circle distance (km, haversine, R = 6371) and initial bearing between two [lon,lat] points
function gc(p,q){const R=6371,[l1,f1]=p,[l2,f2]=q,a1=f1*D2R,a2=f2*D2R,dl=(l2-l1)*D2R,
  a=Math.sin((a2-a1)/2)**2+Math.cos(a1)*Math.cos(a2)*Math.sin(dl/2)**2,
  y=Math.sin(dl)*Math.cos(a2),x=Math.cos(a1)*Math.sin(a2)-Math.sin(a1)*Math.cos(a2)*Math.cos(dl);
  return{km:2*R*Math.asin(Math.sqrt(a)),brg:(Math.atan2(y,x)/D2R+360)%360};}
const COMP=["北","北北東","北東","東北東","東","東南東","南東","南南東","南","南南西","南西","西南西","西","西北西","北西","北北西"];
const compOf=b=>COMP[Math.round(b/22.5)%16];
const hmDur=m=>`${Math.floor(m/60)}時間${pad(Math.round(m%60))}分`;
const fmtKm=k=>k<10?k.toFixed(1):String(Math.round(k));

/* --- saved in this browser only (every access wrapped; the page works without it) --- */
function faLoad(){
  try{const s=JSON.parse(localStorage.getItem("fa-tools1")||"null");if(s){FA.contour=!!s.contour;FA.relief=!!s.relief;FA.showTrail=s.showTrail!==false;
    if(s.env&&typeof s.env==="object"){FA.env.on=!!s.env.on;if(s.env.h>=0&&s.env.h<=24)FA.env.h=+s.env.h;if(s.env.mo>=1&&s.env.mo<=12)FA.env.mo=+s.env.mo|0;}}}catch(e){}
  try{const t=JSON.parse(localStorage.getItem("fa-trail1")||"[]"),out=[];if(Array.isArray(t))t.forEach(x=>{if(x&&get(x.r)&&!out.some(y=>y.r===x.r))out.push({r:x.r,t:String(x.t||"").slice(0,10)});});FA.trail=out;}catch(e){}
}
function faSave(){try{localStorage.setItem("fa-tools1",JSON.stringify({contour:FA.contour,relief:FA.relief,showTrail:FA.showTrail,env:FA.env}));}catch(e){}}
function faSaveTrail(){try{localStorage.setItem("fa-trail1",JSON.stringify(FA.trail));}catch(e){}}

/* --- 1 time of day and season: light, sky and ground tint (nothing about weather) --- */
const SEAS=["冬","冬","春","春","春","夏","夏","夏","秋","秋","秋","冬"];
// ground tint by month: snow-grey, thaw, young green, fresh green, deep green, ripening, russet, bare
const SEAS_C=[0xdde7f2,0xd3e0ee,0xcbdcb0,0xe3c4cc,0x93c476,0x5fa05a,0x4e9250,0x5a9448,0xa39a45,0xc98036,0xb0623a,0xc9cfd6];
function envOf(){
  const e=FA.env,ds=`${today().slice(0,4)}-${pad(e.mo)}-15`,s=sunAt(ds,e.h*60,LAT0,LON0,9),dl=sst(-4,14,s.el),w=sst(-8,-1,s.el)*(1-sst(5,22,s.el));
  return{ds,el:s.el,az:s.az,dl,w,night:1-dl,morning:e.h<12,sea:SEAS[e.mo-1],tint:SEAS_C[e.mo-1]};
}
function faBase(){
  if(FA.B)return FA.B;const B={clear:new THREE.Color(),fog:scene.fog?scene.fog.color.clone():null,sea:[],lights:[],land:[]};
  renderer.getClearColor(B.clear);
  scene.traverse(o=>{if(o.isLight)B.lights.push({l:o,c:o.color.clone(),g:o.groundColor?o.groundColor.clone():null,i:o.intensity,p:o.isDirectionalLight?o.position.clone():null});
    else if(o.isMesh&&o.geometry&&o.geometry.type==="PlaneGeometry"&&o.geometry.parameters.width===1000&&o.material.color)B.sea.push({m:o.material,c:o.material.color.clone()});});
  const seen=new Set();mapG.children.forEach(o=>{if(!o.isMesh)return;[].concat(o.material).forEach((m,i)=>{if(!seen.has(m)){seen.add(m);B.land.push({m,c:m.color.clone(),side:i===1});}});});
  return FA.B=B;
}
function faApply(){
  if(!GL||!scene)return;const B=faBase(),th=FA.theme,veil=FA.veil;
  if(!FA.env.on){renderer.setClearColor(B.clear,1);if(B.fog)scene.fog.color.copy(B.fog);B.sea.forEach(s=>s.m.color.copy(s.c));B.land.forEach(l=>l.m.color.copy(l.c));
    B.lights.forEach(l=>{l.l.color.copy(l.c);if(l.g)l.l.groundColor.copy(l.g);l.l.intensity=l.i;if(l.p)l.l.position.copy(l.p);});veil.style.background="none";return;}
  const e=envOf(),night=new THREE.Color(th.night),day=new THREE.Color(th.day),warm=new THREE.Color(th.warm),tint=new THREE.Color(e.tint);
  const sky=c0=>{const c=c0.clone();c.lerp(night,e.night*th.nightAmt);c.lerp(day,e.dl*th.dayAmt);c.lerp(warm,e.w*th.warmAmt);return c;};
  renderer.setClearColor(sky(B.clear),1);if(B.fog)scene.fog.color.copy(sky(B.fog));B.sea.forEach(s=>s.m.color.copy(sky(s.c)));
  B.land.forEach(l=>{l.m.color.copy(l.c).lerp(tint,th.landAmt*(l.side?.35:1));});
  let key=true;
  B.lights.forEach(l=>{const L=l.l;L.color.copy(l.c).lerp(night,e.night*.6).lerp(warm,e.w*.7);if(l.g)L.groundColor.copy(l.g).lerp(night,e.night*.5);
    if(l.p&&key){key=false;const el=Math.max(e.el,6)*D2R,az=e.az*D2R;L.position.set(Math.sin(az)*Math.cos(el)*90,Math.sin(el)*90,-Math.cos(az)*Math.cos(el)*90);L.intensity=l.i*(.12+.95*e.dl)*(1+.25*e.w);}
    else L.intensity=l.i*(.3+.7*e.dl);});
  const k=th.veil,r=c=>`${c.r*255|0},${c.g*255|0},${c.b*255|0}`;
  veil.style.background=`radial-gradient(ellipse 90% 60% at ${e.morning?18:82}% 100%,rgba(${r(warm)},${(e.w*.38*k).toFixed(3)}),transparent 70%),linear-gradient(rgba(${r(night)},${(e.night*.30*k).toFixed(3)}),rgba(${r(night)},${(e.night*.30*k).toFixed(3)}))`;
}
function envLabel(){
  const e=envOf(),h=FA.env.h,t=`${pad(Math.floor(h))}:${pad(Math.round((h%1)*60)%60)}`;
  const ph=e.el<-6?"夜":e.el<0?(e.morning?"夜明け前":"日没後"):e.el<8?(e.morning?"朝焼け":"夕焼け"):e.el<30?(e.morning?"朝":"夕方"):"日中";
  return `${t} · ${ph} · 太陽高度 ${e.el>=0?"+":"−"}${Math.abs(e.el).toFixed(0)}° · ${FA.env.mo}月（${e.sea}）`;
}

/* --- 4 terrain: contour lines and hill shading from the GSI DEM grid --- */
function faTerrainData(){
  if(FA.terr!==null)return FA.terr||null;const T=EXTRA.terrain;if(!T){FA.terr=false;return null;}
  const bin=atob(T.data),g=new Uint8Array(bin.length);for(let i=0;i<g.length;i++)g[i]=bin.charCodeAt(i);return FA.terr={...T,g};
}
const gx=lon=>(lon-LON0)*KX,gz=lat=>-(lat-LAT0)*KZ;
function faBuildTerrain(){
  const T=faTerrainData();if(!T||FA.gl.terr)return;const th=FA.theme,{nx,ny,step,lon0,lat1,unit_m:U,g}=T,Y=DEPTH+.012,grp=new THREE.Group();FA.gl.terr=grp;mapG.add(grp);
  const el=(i,j)=>{const v=g[j*nx+i];return v?(v-1)*U:-U;};
  // hill shading: NW light at 45°, the height exaggerated so the relief reads at this scale
  const S=3,W=nx*S,H=ny*S,cv=document.createElement("canvas");cv.width=W;cv.height=H;const cx=cv.getContext("2d"),img=cx.createImageData(W,H);
  const bil=(fx,fy,f)=>{fx=clamp(fx,0,nx-1.001);fy=clamp(fy,0,ny-1.001);const i=fx|0,j=fy|0,a=fx-i,b=fy-j;return f(i,j)*(1-a)*(1-b)+f(i+1,j)*a*(1-b)+f(i,j+1)*(1-a)*b+f(i+1,j+1)*a*b;};
  const eh=(i,j)=>Math.max(0,el(i,j)),lm=(i,j)=>g[j*nx+i]?1:0,mPerX=step*111320*Math.cos(LAT0*D2R),mPerY=step*110574,ZF=5,zen=45*D2R,azm=(360-315+90)*D2R;
  const sh=new THREE.Color(th.shadow),hi=new THREE.Color(th.hi),h0=th.hyps&&new THREE.Color(th.hyps[0]),h1=th.hyps&&new THREE.Color(th.hyps[1]);
  for(let py=0;py<H;py++)for(let px=0;px<W;px++){
    const x=(px+.5)/S-.5,y=(py+.5)/S-.5,land=bil(x,y,lm),k=(py*W+px)*4;if(land<.4){img.data[k+3]=0;continue;}
    const dzdx=(bil(x+.5,y,eh)-bil(x-.5,y,eh))/mPerX,dzdy=(bil(x,y-.5,eh)-bil(x,y+.5,eh))/mPerY,slope=Math.atan(ZF*Math.hypot(dzdx,dzdy)),asp=Math.atan2(dzdy,-dzdx),
      s=Math.cos(zen)*Math.cos(slope)+Math.sin(zen)*Math.sin(slope)*Math.cos(azm-asp),d=s-Math.cos(zen);
    let r=0,gg=0,b=0,a=0;
    if(h0){const t=clamp(bil(x,y,eh)/2200,0,1),c=h0.clone().lerp(h1,t);r=c.r;gg=c.g;b=c.b;a=th.hypsA;}
    const c2=d<0?sh:hi,a2=d<0?clamp(-d*1.5,0,1)*th.shadeA:clamp(d*2.2,0,1)*th.hiA,ao=a2+a*(1-a2);
    if(ao>0){r=(c2.r*a2+r*a*(1-a2))/ao;gg=(c2.g*a2+gg*a*(1-a2))/ao;b=(c2.b*a2+b*a*(1-a2))/ao;}
    img.data[k]=r*255;img.data[k+1]=gg*255;img.data[k+2]=b*255;img.data[k+3]=ao*clamp((land-.4)/.3,0,1)*255;}
  cx.putImageData(img,0,0);
  const tex=new THREE.CanvasTexture(cv);tex.minFilter=THREE.LinearFilter;tex.generateMipmaps=false;
  const wU=nx*step*KX,hU=ny*step*KZ,pl=new THREE.Mesh(new THREE.PlaneGeometry(wU,hU),new THREE.MeshBasicMaterial({map:tex,transparent:true,depthWrite:false,polygonOffset:true,polygonOffsetFactor:-2,polygonOffsetUnits:-2}));
  pl.rotation.x=-Math.PI/2;pl.position.set(gx(lon0+nx*step/2),DEPTH+.008,gz(lat1-ny*step/2));FA.gl.shade=pl;mapG.add(pl);
  // contour lines every 200 m (every 1000 m heavier): marching squares on the grid
  const pt=(i,j,a,b)=>[gx(lon0+(i+.5+a)*step),gz(lat1-(j+.5+b)*step)],minor=[],major=[];
  let maxE=0;for(let i=0;i<g.length;i++)if(g[i]>maxE)maxE=g[i];maxE=(maxE-1)*U;
  for(let L=200;L<=maxE;L+=200){const out=L%1000===0?major:minor;
    for(let j=0;j<ny-1;j++)for(let i=0;i<nx-1;i++){
      const a=el(i,j),b=el(i+1,j),c=el(i+1,j+1),d=el(i,j+1),code=(a>=L?1:0)|(b>=L?2:0)|(c>=L?4:0)|(d>=L?8:0);if(code===0||code===15)continue;
      const t=(u,v)=>(L-u)/(v-u),E={T:()=>pt(i,j,t(a,b),0),R:()=>pt(i,j,1,t(b,c)),B:()=>pt(i,j,t(d,c),1),L:()=>pt(i,j,0,t(a,d))},hiC=(a+b+c+d)/4>=L;
      const P=({1:[["L","T"]],2:[["T","R"]],3:[["L","R"]],4:[["R","B"]],5:hiC?[["L","B"],["T","R"]]:[["L","T"],["R","B"]],6:[["T","B"]],7:[["L","B"]],8:[["L","B"]],9:[["T","B"]],
        10:hiC?[["L","T"],["R","B"]]:[["T","R"],["L","B"]],11:[["R","B"]],12:[["L","R"]],13:[["T","R"]],14:[["L","T"]]})[code];
      P.forEach(([p,q])=>{const A=E[p](),B2=E[q]();out.push(A[0],Y,A[1],B2[0],Y,B2[1]);});}}
  const mk=(arr,col,op)=>{const gm=new THREE.BufferGeometry();gm.setAttribute("position",new THREE.BufferAttribute(new Float32Array(arr),3));
    const ln=new THREE.LineSegments(gm,new THREE.LineBasicMaterial({color:col,transparent:true,opacity:op,depthWrite:false}));grp.add(ln);return ln;};
  mk(minor,th.contour,th.contourOp);mk(major,th.contourMajor,Math.min(1,th.contourOp*1.5));
}

/* --- 3 trail, 6 route link: tubes laid on the map --- */
function faClear(g){g.children.slice().forEach(c=>{g.remove(c);if(c.geometry)c.geometry.dispose();if(c.material)c.material.dispose();});}
function faTube(g,a,b,r,mat,dash){
  const len=a.distanceTo(b);if(len<1e-4)return;const n=dash?Math.max(1,Math.round(len/dash)):1;
  for(let i=0;i<n;i++){const t0=i/n,t1=dash?(i+.55)/n:1,p=a.clone().lerp(b,t0),q=a.clone().lerp(b,Math.min(t1,1)),m=new THREE.Mesh(new THREE.TubeGeometry(new THREE.LineCurve3(p,q),1,r,5,false),mat);g.add(m);}
}
function faDraw(){
  if(!FA.gl)return;const th=FA.theme;faClear(FA.gl.trail);faClear(FA.gl.link);
  const tm=new THREE.MeshBasicMaterial({color:th.trail,transparent:true,opacity:.92,depthWrite:false});
  const pts=FA.trail.filter(x=>GEO[x.r]).map(x=>V(GEO[x.r][0],.14,GEO[x.r][1]));
  for(let i=0;i+1<pts.length;i++)faTube(FA.gl.trail,pts[i],pts[i+1],.034,tm,0);
  pts.forEach(p=>{const s=new THREE.Sprite(new THREE.SpriteMaterial({map:GLOW,color:th.trail,transparent:true,opacity:.9,depthWrite:false}));s.position.copy(p);s.scale.set(.9,.9,1);FA.gl.trail.add(s);});
  FA.gl.trail.visible=FA.showTrail;
  FA.trailLabs.forEach(l=>l.remove());FA.trailLabs=FA.trail.filter(x=>GEO[x.r]).map((x,i)=>mkLabel("fa-tn",String(i+1)));
  const A=state.a,B=state.b;FA.linkLab.hidden=true;
  if(A&&B&&GEO[A]&&GEO[B]&&LL[A]&&LL[B]){faTube(FA.gl.link,V(GEO[A][0],.18,GEO[A][1]),V(GEO[B][0],.18,GEO[B][1]),.022,new THREE.MeshBasicMaterial({color:th.link,transparent:true,opacity:.95,depthWrite:false}),.34);
    const r=gc(LL[A],LL[B]);FA.linkLab.innerHTML=`${fmtKm(r.km)} KM<small>STRAIGHT-LINE</small>`;FA.linkLab.hidden=false;}
}
function faFrame(now,lift){
  if(!FA.gl)return;const ok=bootDone||RM,gl=FA.gl;
  if(gl.terr)gl.terr.visible=FA.contour&&ok;if(gl.shade)gl.shade.visible=FA.relief&&ok;
  gl.trail.visible=FA.showTrail&&ok;gl.link.visible=ok;
  FA.trailLabs.forEach((l,i)=>{const x=FA.trail.filter(y=>GEO[y.r])[i];l.hidden=!(FA.showTrail&&ok&&x);if(!l.hidden){place(l,V(GEO[x.r][0],lift+.14,GEO[x.r][1]),"translate(-50%,-50%)");}});
  const A=state.a,B=state.b;if(A&&B&&GEO[A]&&GEO[B]&&!FA.linkLab.hidden&&ok)place(FA.linkLab,V((GEO[A][0]+GEO[B][0])/2,lift+.3,(GEO[A][1]+GEO[B][1])/2),"translate(-50%,-120%)");else FA.linkLab.style.visibility="hidden";
}

/* --- 2 今日の一手 --- */
// Fixed rules, in this order; the first that yields a field wins. Uses only the MD-002 scores and Early check-in, the DB-001
// Field Log, positions, and today's date (JST). Season fit and weather are not in the data, so they are not used.
function faMove(){
  const ds=today(),marked=new Set(FA.trail.map(x=>x.r)),by=(x,y)=>pv(y)-pv(x)||x.hours-y.hours||x.rank-y.rank,sun=d=>{const s=LL[d.rank]&&sunTimes(ds,LL[d.rank][1],LL[d.rank][0]);return s?`今日の日没は ${hm(s.set)}（日長 ${hmDur(s.set-s.rise)}）`:"";};
  if(NEXT){const n=daysTo(NEXT.d);if(n>=0&&n<=14&&get(NEXT.r)){const d=get(NEXT.r),c=coldOf(d.rank);
    return{d,rule:1,why:`DB-001にキャンプの予定（${NEXT.e.date}、${dLabel(n)}）があります。${c?`寒さの目安は${c.adj!=null?"約 "+fmtC(c.adj):fmtC(c.t)}。`:""}${sun(d)}。`};}}
  const ok=d=>GEO[d.rank]&&!d.visited&&!marked.has(d.rank);
  let pool=DATA.filter(d=>ok(d)&&d.hours<=2&&(d.early.tier==="A"||d.early.tier==="B")).sort(by),rule=2;
  if(pool.length){const d=pool[0];return{d,rule,why:`未訪問で最もResonanceが高い近場（${pv(d)}/100・暫定値）。移動 ${d.hours.toFixed(1)}H、アーリーチェックインは「${d.early.label}」。${sun(d)}。`};}
  pool=DATA.filter(ok).sort(by);
  if(pool.length){const d=pool[0];return{d,rule:3,why:`近場に条件の合う未訪問がないため、未訪問で最もResonanceが高いこの1件（${pv(d)}/100・暫定値）。移動 ${d.hours.toFixed(1)}H、アーリー「${d.early.label}」。`};}
  pool=DATA.filter(d=>GEO[d.rank]&&!marked.has(d.rank)).sort(by);
  if(pool.length){const d=pool[0];return{d,rule:4,why:`未訪問がすべて埋まっているため、足跡に付けていない中でResonanceが最も高い1件（${pv(d)}/100）。`};}
  return null;
}
function moveHTML(){
  const m=faMove();if(!m)return "";
  return `<span class="k">TODAY'S MOVE · 今日の一手</span><div class="fa-move"><div><b class="fa-mn">${esc(m.d.name)}</b><span class="fa-mr">${esc(m.why)}</span></div><button type="button" class="fa-btn" data-fa="pick" data-r="${m.d.rank}">${m.d.rank===state.a?"選択中":"選ぶ"}</button></div>`+
    `<span class="srcl">選び方：①DB-001の予定が14日以内ならその場所 ②未訪問（MD-002）で足跡に未登録・移動2時間以内・アーリーが「早い」か「可」の中でResonance最高（同点は移動時間、順位の順）。季節の向き不向きと天気はデータにないため使っていません。${today()}（JST）時点。</span>`;
}

/* --- 5 sun band --- */
function sunBandHTML(r,tag,ds){
  const ll=LL[r];if(!ll)return "";const s=solarDay(ds,ll[1],ll[0],9);if(!s||s.rise==null)return `<span class="fa-dim">${esc(tag)}：この日は日の出・日の入りがありません</span>`;
  const X=m=>(clamp(m,0,1440)/1440*240).toFixed(1),cur=FA.env.on?`<line x1="${X(FA.env.h*60)}" x2="${X(FA.env.h*60)}" y1="0" y2="26" class="fa-cur"/>`:"";
  const svg=`<svg class="fa-band" viewBox="0 0 240 34" role="img" aria-label="${esc(get(r).name)}の${esc(ds)}の日照"><rect x="0" y="4" width="240" height="14" class="fa-n"/>${s.dawn!=null?`<rect x="${X(s.dawn)}" y="4" width="${X(s.dusk)-X(s.dawn)}" height="14" class="fa-t"/>`:""}<rect x="${X(s.rise)}" y="4" width="${X(s.set)-X(s.rise)}" height="14" class="fa-d"/>`+
    [0,6,12,18,24].map(h=>`<line x1="${h/24*240}" x2="${h/24*240}" y1="18" y2="22" class="fa-tk"/><text x="${h/24*240}" y="31" class="fa-tx" text-anchor="${h===0?"start":h===24?"end":"middle"}">${h}</text>`).join("")+
    `<line x1="${X(s.noon)}" x2="${X(s.noon)}" y1="2" y2="20" class="fa-nn"/>${cur}</svg>`;
  return `<div class="fa-bandw"><span class="fa-bt">${esc(tag)} · ${esc(get(r).name)}</span>${svg}<dl class="kv"><dt>日の出</dt><dd>${hm(s.rise)}　<span class="fa-dim">日の入り</span> ${hm(s.set)}</dd><dt>日長</dt><dd>${hmDur(s.len)}　<span class="fa-dim">南中</span> ${hm(s.noon)}（高度 ${s.noonEl.toFixed(0)}°）</dd>${s.dawn!=null?`<dt>薄明</dt><dd>市民薄明 ${hm(s.dawn)}〜${hm(s.dusk)}</dd>`:""}</dl></div>`;
}
function sunSecHTML(){
  const A=state.a,plan=campDay(A),ds=FA.sunDate||plan||today(),lab=FA.sunDate?"DATE":plan?"NEXT CAMP":"TODAY";
  return `<span class="k">SUN BAND · 日照帯</span><div class="fa-row"><label class="fa-dl">日付 <input type="date" class="fa-date" value="${esc(ds)}" min="2000-01-01" max="2099-12-31"></label><button type="button" class="fa-btn" data-fa="sunauto">${plan?"次のキャンプ":"今日"}</button><span class="fa-dim">${lab}</span></div>`+
    sunBandHTML(A,"DEST",ds)+(state.b?sunBandHTML(state.b,"VS",ds):"")+
    `<span class="srcl">緯度経度と日付から計算した値（NOAA Solar Calculatorの式、日本標準時、海面の水平線）。山の陰や天候は含みません。天気・予報は、静的なページでは取得できないため載せていません。</span>`;
}

/* --- 6 route comparison --- */
function routeSecHTML(){
  const A=get(state.a),B=state.b?get(state.b):null;
  if(!B||!LL[A.rank]||!LL[B.rank])return `<span class="k">ROUTE · 2点の比較（直線）</span><span class="fa-dim">「VS」か Compare で2つ目のフィールドを選ぶと、2点の直線距離と方位を示します。</span>`;
  const ab=gc(LL[A.rank],LL[B.rank]),ba=gc(LL[B.rank],LL[A.rank]),ha=nav(A.rank),hb=nav(B.rank);
  return `<span class="k">ROUTE · 2点の比較（直線）</span><dl class="kv"><dt>A → B</dt><dd><b class="fa-big">${fmtKm(ab.km)}</b> km　方位 ${pad(Math.round(ab.brg),3)}°（${compOf(ab.brg)}）</dd><dt>B → A</dt><dd>方位 ${pad(Math.round(ba.brg),3)}°（${compOf(ba.brg)}）</dd>`+
    `<dt>小岩 → A</dt><dd>${fmtKm(ha.km)} km　${pad(Math.round(ha.brg),3)}°</dd><dt>小岩 → B</dt><dd>${fmtKm(hb.km)} km　${pad(Math.round(hb.brg),3)}°</dd></dl>`+
    `<span class="fa-dim">A ${esc(A.name)} ／ B ${esc(B.name)}</span><span class="srcl">STRAIGHT-LINE：大圏（ハーヴァーサイン、地球半径6371 km）の直線距離と初期方位です。道路の距離や所要時間ではありません（小岩からの道のりと移動時間は各カードのROADとTRAVELを参照）。</span>`;
}

/* --- 3 trail panel --- */
function trailSecHTML(){
  const A=state.a,on=FA.trail.some(x=>x.r===A),list=FA.trail.filter(x=>get(x.r)&&LL[x.r]);let tot=0;
  const li=list.map((x,i)=>{const leg=i?gc(LL[list[i-1].r],LL[x.r]).km:0;tot+=leg;return `<li><button type="button" class="fa-lk" data-fa="pick" data-r="${x.r}"><b>${i+1}</b>${esc(get(x.r).name)}</button><em>${i?"+"+fmtKm(leg)+" km":x.t||"START"}</em></li>`;}).join("");
  return `<span class="k">TRAIL · 足跡</span><div class="fa-row"><button type="button" class="fa-btn${on?" on":""}" data-fa="mark" aria-pressed="${on}">${on?"この場所の足跡を外す":"この場所を訪問済みにする"}</button><button type="button" class="fa-btn" data-fa="trail" aria-pressed="${FA.showTrail}">${FA.showTrail?"地図に表示中":"地図で非表示"}</button></div>`+
    (list.length?`<ol class="fa-tl">${li}</ol><div class="fa-row"><span class="fa-dim">${list.length}か所 · 直線の合計 <b>${fmtKm(tot)}</b> km</span><button type="button" class="fa-btn" data-fa="undo">1つ戻す</button><button type="button" class="fa-btn" data-fa="clear">全部消す</button></div>`:`<span class="fa-dim">まだありません。行った場所を「訪問済みにする」順に結んで、地図に線を引きます。</span>`)+
    `<span class="srcl">このブラウザの中だけのメモです（MD-002の「訪問済み」とは別物で、他の端末には移りません）。区間は直線距離で、道のりや所要時間ではありません。</span>`;
}

/* --- panel, sections, events --- */
const FA_CSS=`
.fa-tp{position:absolute;z-index:7;width:min(310px,calc(100% - 24px));padding:12px 14px 14px;display:grid;gap:11px;background:var(--fa-bg,#fff);color:var(--fa-fg,#111);border:1px solid var(--fa-line,rgba(0,0,0,.15));border-radius:var(--fa-r,12px);box-shadow:var(--fa-shadow,0 12px 34px rgba(0,0,0,.28));font-family:var(--fa-font,inherit);font-size:12px;line-height:1.6}
.fa-tp[hidden]{display:none}
.fa-tp h3{margin:0;display:flex;align-items:center;gap:8px;font-family:var(--fa-head,inherit);font-weight:var(--fa-hw,500);font-size:14px;letter-spacing:var(--fa-hls,0);color:var(--fa-fg)}
.fa-tp h3 .fa-x{margin-left:auto}
.fa-x{background:transparent;border:0;color:var(--fa-soft);font-size:18px;line-height:1;cursor:pointer;padding:2px 6px}
.fa-ctl{display:grid;gap:5px}
.fa-ctl>label,.fa-lab{display:flex;justify-content:space-between;gap:8px;font-size:10px;letter-spacing:.14em;text-transform:uppercase;color:var(--fa-soft)}
.fa-ctl output{letter-spacing:0;text-transform:none;font-size:11.5px;color:var(--fa-fg);text-align:right}
.fa-tp input[type=range]{width:100%;accent-color:var(--fa-acc,#d97757);margin:0;height:22px}
.fa-tp input[type=date],.fa-sec input[type=date]{font:inherit;font-size:12px;color:var(--fa-fg);background:transparent;border:1px solid var(--fa-line);border-radius:var(--fa-rs,8px);padding:2px 6px;color-scheme:var(--fa-scheme,light)}
.fa-btns{display:flex;flex-wrap:wrap;gap:5px}
.fa-btn{flex:none;white-space:nowrap;font:inherit;font-size:11px;letter-spacing:.04em;color:var(--fa-fg);background:transparent;border:1px solid var(--fa-line);border-radius:var(--fa-rs,99px);padding:3px 11px;cursor:pointer;min-height:26px}
.fa-btn:hover{border-color:var(--fa-acc);color:var(--fa-acc)}
.fa-btn[aria-pressed="true"],.fa-btn.on{background:var(--fa-acc);border-color:var(--fa-acc);color:var(--fa-on,#fff)}
.fa-btn:disabled{opacity:.4;cursor:not-allowed}
.fa-note{font-size:10.5px;color:var(--fa-soft)}
.fa-sec .fa-row{display:flex;flex-wrap:wrap;align-items:center;gap:6px 8px}
.fa-dim{color:var(--fa-soft);font-size:11px}
.fa-move{display:flex;gap:12px;align-items:flex-start;justify-content:space-between}
.fa-move>div{display:grid;gap:3px;min-width:0}
.fa-mn{font-size:14px;line-height:1.4;color:var(--fa-fg)}
.fa-mr{font-size:11.5px;line-height:1.7;color:var(--fa-soft)}
.fa-big{font-size:18px;font-variant-numeric:tabular-nums}
.fa-tl{list-style:none;margin:0;padding:0;display:grid;gap:2px}
.fa-tl li{display:flex;justify-content:space-between;gap:8px;align-items:baseline;border-bottom:1px dashed var(--fa-line);padding:2px 0}
.fa-tl em{font-style:normal;font-size:10.5px;color:var(--fa-soft);white-space:nowrap}
.fa-lk{font:inherit;font-size:11.5px;text-align:left;background:transparent;border:0;color:var(--fa-fg);cursor:pointer;padding:2px 0;display:flex;gap:7px;align-items:baseline}
.fa-lk b{min-width:1.4em;font-weight:600;color:var(--fa-acc)}
.fa-bandw{display:grid;gap:3px;margin-top:2px}
.fa-bt{font-size:9.5px;letter-spacing:.12em;color:var(--fa-soft);text-transform:uppercase}
.fa-band{width:100%;height:auto;display:block;overflow:visible}
.fa-n{fill:var(--fa-night,#2b2f44)} .fa-t{fill:var(--fa-twi,#e0a070)} .fa-d{fill:var(--fa-day,#f3d27a)}
.fa-tk{stroke:var(--fa-soft);stroke-width:1} .fa-tx{fill:var(--fa-soft);font-size:8px}
.fa-nn{stroke:var(--fa-fg);stroke-width:1;stroke-dasharray:2 2;opacity:.7} .fa-cur{stroke:var(--fa-acc);stroke-width:2}
.lb.fa-tn{display:grid;place-items:center;width:18px;height:18px;border-radius:50%;background:var(--fa-acc);color:var(--fa-on,#fff);font:600 10px/1 var(--fa-font,inherit);box-shadow:0 0 0 2px var(--fa-bg,#fff);pointer-events:none}
.lb.fa-link{padding:1px 8px;border-radius:99px;background:var(--fa-bg);color:var(--fa-fg);border:1px solid var(--fa-acc2,var(--fa-acc));font:600 11px/1.4 var(--fa-font,inherit);text-align:center;pointer-events:none}
.lb.fa-link small{display:block;font-size:7.5px;letter-spacing:.14em;color:var(--fa-soft);font-weight:500}
.fa-veil{position:absolute;inset:0;pointer-events:none}
@media (max-width:900px){.fa-tp{position:relative;width:auto;box-shadow:none;order:0}.fa-tp[hidden]{display:grid!important}.fa-tp .fa-x{display:none}#zTools{display:none}}
`;
function faMount(){
  const st=document.createElement("style");st.textContent=FA_CSS;document.head.appendChild(st);
  const app=$("#app"),map=$("#map"),veil=document.createElement("div");veil.className="fa-veil";FA.veil=veil;map.insertBefore(veil,$(".labels")||map.firstChild);
  const tp=document.createElement("section");tp.className="fa-tp";tp.id="faPanel";tp.hidden=true;tp.setAttribute("aria-label","Atlas tools");
  tp.innerHTML=`<h3>Atlas tools<button type="button" class="fa-x" aria-label="閉じる">×</button></h3>
    <div class="fa-ctl"><label for="faH">時刻 <output id="faHo"></output></label><input type="range" id="faH" min="0" max="24" step="0.25"><div class="fa-btns"><button type="button" class="fa-btn" data-fa="now">いま</button><button type="button" class="fa-btn" data-fa="sunrise">朝</button><button type="button" class="fa-btn" data-fa="noon">昼</button><button type="button" class="fa-btn" data-fa="sunset">夕</button><button type="button" class="fa-btn" data-fa="night">夜</button></div></div>
    <div class="fa-ctl"><label for="faM">季節 <output id="faMo"></output></label><input type="range" id="faM" min="1" max="12" step="1"><div class="fa-btns"><button type="button" class="fa-btn" data-fa="season" data-m="4">春</button><button type="button" class="fa-btn" data-fa="season" data-m="7">夏</button><button type="button" class="fa-btn" data-fa="season" data-m="10">秋</button><button type="button" class="fa-btn" data-fa="season" data-m="1">冬</button><button type="button" class="fa-btn" data-fa="envoff">標準に戻す</button></div></div>
    <div class="fa-ctl"><span class="fa-lab">地図</span><div class="fa-btns"><button type="button" class="fa-btn" data-fa="contour" aria-pressed="false">等高線</button><button type="button" class="fa-btn" data-fa="relief" aria-pressed="false">陰影</button><button type="button" class="fa-btn" data-fa="trail" aria-pressed="true">足跡</button></div></div>
    <span class="fa-note">時刻と季節は、光・空・地面の色だけを変えます（その日の天気ではありません）。太陽高度は小岩の緯度経度と、その月15日の日付から計算しています。等高線・陰影は国土地理院の標高データ（約2 km格子）です。</span>`;
  map.insertAdjacentElement("afterend",tp);
  const zoom=$(".zoom");if(zoom){const b=document.createElement("button");b.type="button";b.id="zTools";b.setAttribute("aria-label","時刻・季節・地形のツール");b.title="時刻・季節・地形";b.textContent="◐";zoom.insertBefore(b,zoom.firstChild);b.onclick=()=>{FA.open=!FA.open;faPlace();};}
  tp.querySelector(".fa-x").onclick=()=>{FA.open=false;faPlace();};
  const an=$(".analysis"),hh=an.querySelector(".hh"),selSec=$("#selB").closest(".sec");
  const mk=(id,after)=>{const d=document.createElement("div");d.className="sec fa-sec";d.id=id;after.insertAdjacentElement("afterend",d);return d;};
  mk("faMove",hh);mk("faSun",selSec.previousElementSibling);const rt=mk("faRoute",selSec);mk("faTrail",rt);
  [tp,an].forEach(r=>r.addEventListener("click",faClick));
  an.addEventListener("change",e=>{if(e.target.classList.contains("fa-date")&&e.target.value){FA.sunDate=e.target.value;faRefresh();}});
  $("#faH").addEventListener("input",e=>{FA.env.on=true;FA.env.h=+e.target.value;faEnv();});$("#faM").addEventListener("input",e=>{FA.env.on=true;FA.env.mo=+e.target.value;faEnv();});
  window.addEventListener("resize",faPlace);if(!GL)tp.querySelectorAll("[data-fa=contour],[data-fa=relief],input[type=range],[data-fa=now],[data-fa=sunrise],[data-fa=noon],[data-fa=sunset],[data-fa=night],[data-fa=season],[data-fa=envoff]").forEach(x=>x.disabled=true);
}
function faPlace(){
  const tp=$("#faPanel"),z=$(".zoom"),b=$("#zTools"),wide=window.innerWidth>900;tp.hidden=wide&&!FA.open;if(b)b.setAttribute("aria-pressed",String(FA.open));
  if(wide&&FA.open&&z){const a=$("#app").getBoundingClientRect(),r=z.getBoundingClientRect();tp.style.top=Math.max(8,r.top-a.top)+"px";tp.style.right=(a.right-r.left+10)+"px";tp.style.left="auto";}
  else{tp.style.top=tp.style.right=tp.style.left="";}
}
function faEnv(){faSave();faApply();faPanel();faRefresh(true);}
function faPanel(){
  const e=FA.env;$("#faH").value=e.h;$("#faM").value=e.mo;$("#faHo").textContent=e.on?envLabel().split(" · ").slice(0,2).join(" · "):"標準（デザインの既定）";$("#faMo").textContent=e.on?`${e.mo}月（${SEAS[e.mo-1]}）`:"標準";
  $("#faPanel").querySelectorAll("[data-fa=contour]").forEach(b=>b.setAttribute("aria-pressed",String(FA.contour)));$("#faPanel").querySelectorAll("[data-fa=relief]").forEach(b=>b.setAttribute("aria-pressed",String(FA.relief)));
  $("#faPanel").querySelectorAll("[data-fa=trail]").forEach(b=>b.setAttribute("aria-pressed",String(FA.showTrail)));
}
function faClick(ev){
  const b=ev.target.closest("[data-fa]");if(!b||b.tagName==="INPUT")return;const k=b.dataset.fa,e=FA.env,ds=`${today().slice(0,4)}-${pad(e.mo)}-15`;
  const setT=h=>{e.on=true;e.h=Math.round(clamp(h,0,24)*4)/4;faEnv();};
  if(k==="pick"){setA(+b.dataset.r);return;}
  if(k==="now"){const n=new Date(Date.now()+9*3600e3);e.on=true;e.mo=n.getUTCMonth()+1;setT(n.getUTCHours()+n.getUTCMinutes()/60);}
  else if(k==="sunrise"||k==="sunset"||k==="noon"){const s=solarDay(ds,LAT0,LON0,9);if(s)setT((k==="sunrise"?s.rise:k==="sunset"?s.set-15:s.noon)/60);}
  else if(k==="night")setT(1);
  else if(k==="season"){e.on=true;e.mo=+b.dataset.m;faEnv();}
  else if(k==="envoff"){e.on=false;faEnv();}
  else if(k==="contour"||k==="relief"){FA[k]=!FA[k];if(GL&&FA.gl)faBuildTerrain();faSave();faPanel();}
  else if(k==="trail"){FA.showTrail=!FA.showTrail;faSave();faPanel();faRefresh();}
  else if(k==="mark"){const A=state.a,i=FA.trail.findIndex(x=>x.r===A);if(i>=0)FA.trail.splice(i,1);else FA.trail.push({r:A,t:today()});faSaveTrail();faDraw();faRefresh();}
  else if(k==="undo"){FA.trail.pop();faSaveTrail();faDraw();faRefresh();}
  else if(k==="clear"){FA.trail=[];faSaveTrail();faDraw();faRefresh();}
  else if(k==="sunauto"){FA.sunDate=null;faRefresh();}
}
// re-draws the sections that follow the selection; called from each template's startRadar
function faRefresh(keepDraw){
  if(!FA.ready)return;
  const set=(id,h)=>{const e=$("#"+id);if(e){e.innerHTML=h;e.hidden=!h;}};
  set("faMove",moveHTML());set("faSun",sunSecHTML());set("faRoute",routeSecHTML());set("faTrail",trailSecHTML());
  if(!keepDraw)faDraw();
}
function faStart(){
  faLoad();faMount();FA.trailLabs=[];FA.linkLab=mkLabel("fa-link","");FA.linkLab.hidden=true;
  if(GL){FA.gl={trail:new THREE.Group(),link:new THREE.Group(),terr:null,shade:null};pinG.add(FA.gl.trail,FA.gl.link);}
  FA.ready=true;faPlace();faPanel();faApply();if(GL&&(FA.contour||FA.relief))faBuildTerrain();faRefresh();
}
