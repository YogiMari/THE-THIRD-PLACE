// Field Atlas core — what both Field Atlas pages share: the field helpers (get, pv, nav ...), OP-010 tables,
// DB-001 Field Log / Site Record / elevation / cold-guide lookups, sunrise-sunset-moon (NOAA equations), great-circle
// distance, and the tools that need no map: 今日の一手, sun band, route comparison (straight line) and the visited trail.
// scripts/field_atlas_nocturne.py (build, inside the SHARED_JS marker) inserts it. It runs in the page's own closure after the data constants (DATA, EXTRA, LL ...) and
// reaches `state` (state.a = selected rank, state.b = compared rank or null) only when called. Not page-specific code.
const D2R=Math.PI/180;
const LON0=139.8827,LAT0=35.7331,KX=Math.cos(LAT0*Math.PI/180)*10,KZ=10;
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
const AVG=Array.from({length:10},(_,i)=>DATA.reduce((s,d)=>s+d.axes[i],0)/Math.max(DATA.length,1));
const avgSum=(a,b)=>AVG.slice(a,b).reduce((x,y)=>x+y,0);
// DB-001 Field Log: the nearest planned camp
const LOG=EXTRA.log||{},BENCH=EXTRA.bench||[];
const today=()=>new Date(Date.now()+9*3600e3).toISOString().slice(0,10);
const day0=s=>(String(s).match(/\d{4}-\d{2}-\d{2}/)||[])[0];
const daysTo=s=>Math.round((Date.parse(s+"T00:00:00Z")-Date.parse(today()+"T00:00:00Z"))/864e5);
const dLabel=n=>n>0?"D-"+n:n===0?"TODAY":"D+"+(-n);
const NEXT=(()=>{let best=null;for(const r in LOG)LOG[r].forEach(e=>{const d=day0(e.date);if(e.status==="Planned"&&d&&get(+r)&&(!best||d<best.d))best={r:+r,d,e};});return best;})();

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
const FA={mapOnly:false,ready:false,gl:null,terr:null,trail:[],contour:false,relief:false,showTrail:true,sunDate:null,open:false,B:null,
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
// great-circle distance (km, haversine, R = 6371) and initial bearing between two [lon,lat] points
function gc(p,q){const R=6371,[l1,f1]=p,[l2,f2]=q,a1=f1*D2R,a2=f2*D2R,dl=(l2-l1)*D2R,
  a=Math.sin((a2-a1)/2)**2+Math.cos(a1)*Math.cos(a2)*Math.sin(dl/2)**2,
  y=Math.sin(dl)*Math.cos(a2),x=Math.cos(a1)*Math.sin(a2)-Math.sin(a1)*Math.cos(a2)*Math.cos(dl);
  return{km:2*R*Math.asin(Math.sqrt(a)),brg:(Math.atan2(y,x)/D2R+360)%360};}
const COMP=["北","北北東","北東","東北東","東","東南東","南東","南南東","南","南南西","南西","西南西","西","西北西","北西","北北西"];
const compOf=b=>COMP[Math.round(b/22.5)%16];
const hmDur=m=>`${Math.floor(m/60)}時間${pad(Math.round(m%60))}分`;
const fmtKm=k=>k<10?k.toFixed(1):String(Math.round(k));
/* --- visited trail: a personal memo kept in this browser only (localStorage key fa-trail1; every access wrapped) --- */
function faLoadTrail(){
  try{const t=JSON.parse(localStorage.getItem("fa-trail1")||"[]"),out=[];if(Array.isArray(t))t.forEach(x=>{if(x&&get(x.r)&&!out.some(y=>y.r===x.r))out.push({r:x.r,t:String(x.t||"").slice(0,10)});});FA.trail=out;}catch(e){}
}
function faSaveTrail(){try{localStorage.setItem("fa-trail1",JSON.stringify(FA.trail));}catch(e){}}
// the four trail buttons (mark / undo / clear); returns true when it handled the key
function faTrailAction(k){
  if(k==="mark"){const A=state.a,i=FA.trail.findIndex(x=>x.r===A);if(i>=0)FA.trail.splice(i,1);else FA.trail.push({r:A,t:today()});}
  else if(k==="undo")FA.trail.pop();
  else if(k==="clear")FA.trail=[];
  else return false;
  faSaveTrail();return true;
}

/* --- 2 今日の一手 --- */
// Fixed rules, in this order; the first that yields a field wins. Uses only the MD-002 scores and Early check-in, the DB-001
// Field Log, positions, and today's date (JST). Season fit is not in the data, so it is not used.
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
    `<span class="srcl">選び方：①DB-001の予定が14日以内ならその場所 ②未訪問（MD-002）で足跡に未登録・移動2時間以内・アーリーが「早い」か「可」の中でResonance最高（同点は移動時間、順位の順）。季節の向き不向きはデータにないため使っていません。${today()}（JST）時点。</span>`;
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
    `<span class="srcl">緯度経度と日付から計算した値（NOAA Solar Calculatorの式、日本標準時、海面の水平線）。山の陰は含みません。</span>`;
}

/* --- 6 route comparison --- */
function routeSecHTML(){
  const A=get(state.a),B=state.b?get(state.b):null;
  if(!B||!LL[A.rank]||!LL[B.rank])return `<span class="k">ROUTE · 2点の比較（直線）</span><span class="fa-dim">比べる相手（VS / Compare）で2つ目のフィールドを選ぶと、2点の直線距離と方位を示します。</span>`;
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
    (list.length?`<ol class="fa-tl">${li}</ol><div class="fa-row"><span class="fa-dim">${list.length}か所 · 直線の合計 <b>${fmtKm(tot)}</b> km</span><button type="button" class="fa-btn" data-fa="undo">1つ戻す</button><button type="button" class="fa-btn" data-fa="clear">全部消す</button></div>`:`<span class="fa-dim">まだありません。行った場所を「訪問済みにする」順に並べ、区間の直線距離を示します。${FA.noMap?"":"地図には順に結んだ線を引きます。"}</span>`)+
    `<span class="srcl">このブラウザの中だけのメモです（MD-002の「訪問済み」とは別物で、他の端末には移りません）。区間は直線距離で、道のりや所要時間ではありません。</span>`;
}

/* --- styles of the tool sections (today's move, sun band, route, trail); a page supplies the colours as CSS variables --fa-fg --fa-soft --fa-line --fa-acc --fa-on ... --- */
const FA_SEC_CSS=`
.fa-sec input[type=date]{font:inherit;font-size:12px;color:var(--fa-fg);background:transparent;border:1px solid var(--fa-line);border-radius:var(--fa-rs,8px);padding:2px 6px;color-scheme:var(--fa-scheme,light)}
.fa-btns{display:flex;flex-wrap:wrap;gap:5px}
.fa-btn{flex:none;white-space:nowrap;font:inherit;font-size:11px;letter-spacing:.04em;color:var(--fa-fg);background:transparent;border:1px solid var(--fa-line);border-radius:var(--fa-rs,99px);padding:3px 11px;cursor:pointer;min-height:26px}
.fa-btn:hover{border-color:var(--fa-acc);color:var(--fa-acc)}
.fa-btn[aria-pressed="true"],.fa-btn.on{background:var(--fa-acc);border-color:var(--fa-acc);color:var(--fa-on,#fff)}
.fa-btn:disabled{opacity:.4;cursor:not-allowed}
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
`;

/* --- the four sections that follow the selection (a page puts them in #faMove #faSun #faRoute #faTrail) --- */
function faSections(){
  const set=(id,h)=>{const e=$("#"+id);if(e){e.innerHTML=h;e.hidden=!h;}};
  set("faMove",moveHTML());set("faSun",sunSecHTML());set("faRoute",routeSecHTML());set("faTrail",trailSecHTML());
}
