const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  page.setViewport( {width:350,height:1080} );
  await page.goto('file:///Users/abe/Projects/Tools/TopicGen/Temp.html');
  await page.screenshot({path: 'GeneratedImages/Rendered.png'});

  await browser.close();
})();
