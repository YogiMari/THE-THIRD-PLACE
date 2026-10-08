const { chromium } = require('playwright');
(async()=>{const b=await chromium.launch({args:['--no-sandbox']});
 for(const p of ['chronicle','pantheon','journey','discovery']){const pg=await b.newPage();await pg.goto('file://'+process.cwd()+'/out/'+p+'.html#s1');await pg.waitForTimeout(800);
  const r=await pg.evaluate(()=>({n:document.querySelectorAll('#xcred li').length,skin:document.documentElement.dataset.skin,imgs:[...document.querySelectorAll('.x-new .im')].length}));
  console.log(p,JSON.stringify(r));await pg.close();}
 await b.close();})();
