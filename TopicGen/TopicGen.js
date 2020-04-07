const puppeteer = require('puppeteer');
let w = Number(process.argv[2]) | 0;
if (w == 0) w = 350;

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  page.setViewport( {width:w,height:1080} );
  await page.goto('file:///Users/abe/Projects/Tools/TopicGen/Temp.html');
  await page.screenshot({path: 'GeneratedImages/Rendered.png'});

  await browser.close();
})();
