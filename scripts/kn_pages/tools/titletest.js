const {chromium}=require('/opt/node22/lib/node_modules/playwright');
(async()=>{const b=await chromium.launch();for(const p of ['chronicle','pantheon','journey','discovery']){
const pg=await b.newPage({viewport:{width:1200,height:800}});const errs=[];pg.on('pageerror',e=>errs.push(e.message));
await pg.goto('file://'+process.cwd()+'/out/'+p+'.html');await pg.waitForTimeout(500);
const seq=[];for(let i=0;i<7;i++){seq.push(await pg.evaluate(()=>document.documentElement.dataset.skin));
 await pg.evaluate(()=>{const T=document.querySelector('.masthead')||document.querySelector('h1.mast')||document.querySelector('.mast h1');T.scrollIntoView();});const bb=await pg.evaluate(()=>{const T=document.querySelector('.masthead')||document.querySelector('h1.mast')||document.querySelector('.mast h1');const r=T.getBoundingClientRect();return [r.x+r.width/2,Math.min(r.y+r.height/2,700)]});await pg.mouse.click(bb[0],bb[1]);await pg.waitForTimeout(80);}
console.log(p,seq.join('>'),errs.length?errs:'noerr');}
await b.close();})();
