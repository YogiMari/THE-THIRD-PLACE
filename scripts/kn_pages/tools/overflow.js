const { chromium } = require('playwright');
(async()=>{
 const b=await chromium.launch({args:['--no-sandbox']});
 for(const page of ['chronicle','pantheon','journey','discovery']){
  for(const skin of ['orig','s1','s2','s3','s4','s5']){
   const pg=await b.newPage({viewport:{width:390,height:844}});
   await pg.goto('file://'+process.cwd()+'/out/'+page+'.html#'+skin); await pg.waitForTimeout(900);
   const r=await pg.evaluate(()=>{
     const W=innerWidth, sw=document.documentElement.scrollWidth, bad=[];
     document.querySelectorAll('body *').forEach(e=>{ if(e.closest('.skinbar')) return; const rc=e.getBoundingClientRect(); if(rc.width>0&&rc.right>W+3&&getComputedStyle(e).position!=='fixed'){ // skip things inside horizontal scrollers
        let p=e.parentElement,sc=false; while(p&&p!==document.body){const o=getComputedStyle(p).overflowX; if(o==='auto'||o==='scroll'||o==='hidden'||o==='clip'){sc=true;break;} p=p.parentElement;} if(!sc) bad.push((e.className&&e.className.baseVal===undefined?e.className:e.tagName)+':'+Math.round(rc.right)); }});
     return {sw,bad:bad.slice(0,4)};});
   console.log(page,skin,r.sw,JSON.stringify(r.bad));
   await pg.close();
  }}
 await b.close();})();
