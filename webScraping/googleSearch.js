const puppeteer = require('puppeteer');



const googleSearch = async (input) => {
  const url = "https://www.google.com/";

  // launch the browser
  const browser = await puppeteer.launch({ headless: false, timeout: 30000 });
  const page = await browser.newPage();
  await page.goto(url);



  await page.type('.gLFyf.gsfi', input);
  await page.keyboard.press('Enter');

  await page.waitForNavigation();
  
  
  console.log('New page URL: ', page.url());
  await browser.close();
}


/* ------------------------------------
.                TESTING
------------------------------------  */
googleSearch('TypeScript');