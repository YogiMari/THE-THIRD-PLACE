// Field Atlas shared script — the part of the page script that Field Atlas Navigator and Field Atlas Ivory
// have in common. scripts/field_atlas_navigator.py (build) inserts it into each template's <script> where
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
// sunrise and sunset (NOAA approximation, sea-level horizon) in minutes from JST midnight
function sunTimes(ds,lat,lon){
  const [Y,M,D]=ds.split("-").map(Number),N=Math.round((Date.UTC(Y,M-1,D)-Date.UTC(Y,0,0))/864e5),g=2*Math.PI/365*(N-1+(3-12)/24);
  const eq=229.18*(.000075+.001868*Math.cos(g)-.032077*Math.sin(g)-.014615*Math.cos(2*g)-.040849*Math.sin(2*g));
  const dec=.006918-.399912*Math.cos(g)+.070257*Math.sin(g)-.006758*Math.cos(2*g)+.000907*Math.sin(2*g)-.002697*Math.cos(3*g)+.00148*Math.sin(3*g);
  const r=Math.PI/180,c=Math.cos(90.833*r)/(Math.cos(lat*r)*Math.cos(dec))-Math.tan(lat*r)*Math.tan(dec);
  if(c<-1||c>1)return null;const ha=Math.acos(c)/r;
  return{rise:720-4*(lon+ha)-eq+540,set:720-4*(lon-ha)-eq+540};
}
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
function pick(e){setRay(e);const h=ray.intersectObjects(hits.filter(o=>live(o.userData.rank)))[0];return h?h.object.userData.rank:null;}
function hover(e){const r=pick(e),hp=new THREE.Vector3();
  ground.constant=-pinG.position.y;if(ray.ray.intersectPlane(ground,hp))$("#tCur").textContent=fmtLL(LAT0-hp.z/KZ,LON0+hp.x/KX);
  canvas.classList.toggle("hot",!!r);hovered=r&&r!==state.a&&r!==state.b?r:null;L.h.hidden=!hovered;
  if(hovered){const d=get(hovered),n=nav(hovered);L.h.innerHTML=`<span class="n">${esc(d.name)}</span><span class="s">${pv(d)}/100 · ${d.hours.toFixed(1)}H${ROUTES[hovered]?" · ROAD "+ROUTES[hovered].km+"KM":""}</span>`;}}
function resize(){if(!GL)return;const w=mapEl.clientWidth,h=mapEl.clientHeight;if(!w||!h)return;renderer.setSize(w,h,false);camera.aspect=w/h;camera.updateProjectionMatrix();}
function xhair(p,n){const on=!!p;["#xh","#xv","#xtH","#xtV"].forEach(s=>$(s).classList.toggle("on",on));if(!p)return;
  $("#xh").style.transform=`translateY(${p.y.toFixed(1)}px)`;$("#xv").style.transform=`translateX(${p.x.toFixed(1)}px)`;
  const w=mapEl.clientWidth,h=mapEl.clientHeight;
  $("#xtH").textContent=n?n.lat.toFixed(3)+"N":"";$("#xtV").textContent=n?n.lon.toFixed(3)+"E":"";
  if(!FR||performance.now()-FRt>500){FR=freeRect();FRt=performance.now();}const f=FR;$("#xtH").style.transform=`translate(${(f.L0-20).toFixed(0)}px,${(p.y-16).toFixed(1)}px)`;$("#xtV").style.transform=`translate(${(p.x+6).toFixed(1)}px,${(f.T0-18).toFixed(0)}px)`;}
