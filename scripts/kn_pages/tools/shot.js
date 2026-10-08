// usage: node shot.js <html> <skin> <width> <outprefix> [cols]
const { chromium } = require('playwright');
(async()=>{
 const [,,file,skin,width,out,cols]=process.argv; const W=+width;
 const b=await chromium.launch({args:['--no-sandbox','--use-gl=swiftshader','--enable-unsafe-swiftshader']});
 const pg=await b.newPage({viewport:{width:W,height:W>700?900:844}});
 const errs=[]; pg.on('pageerror',e=>errs.push(e.message)); pg.on('console',m=>{if(m.type()==='error')errs.push(m.text())});
 await pg.goto('file://'+file+'#'+skin); await pg.waitForTimeout(2500);
 // reveal everything
 await pg.addStyleTag({content:'.rv{opacity:1!important;transform:none!important;animation:none!important}.skinbar{display:none!important}'});
 const H=await pg.evaluate(()=>document.documentElement.scrollHeight);
 await pg.waitForTimeout(500);
 await pg.screenshot({path:out+'_full.png',fullPage:true});
 console.log(skin,W,'height',H,'errors',JSON.stringify(errs.slice(0,4)));
 await b.close();
})();
