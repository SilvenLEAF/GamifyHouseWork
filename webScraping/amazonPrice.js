const puppeteer = require('puppeteer');



const amazonPrice = async (url, xPath) => {
  
  // launch the browser
  const browser = await puppeteer.launch({ headless: false, timeout: 30000 });
  const page = await browser.newPage();
  await page.goto(url);



  const [el] = await page.$x(xPath);
  const rawPrice = await el.getProperty('textContent');
  const priceValue = await rawPrice.jsonValue();


  const price = parseInt(priceValue.replace(',', ''));

  if(price <50000){
    console.log('BUY it right NOW');
  } else {
    console.log('Do NOT buy it');
  }
  
  await browser.close();
}


/* ------------------------------------
.                TESTING
------------------------------------  */
const myUrl = "https://www.amazon.in/laptops/s?k=laptops"
const myXPath = "/html/body/div[1]/div[2]/div[1]/div[2]/div/span[3]/div[2]/div[4]/div/span/div/div/div/div/div[2]/div[2]/div/div[2]/div[1]/div/div[1]/div[1]/div/div/a/span[1]/span[2]/span[2]"
amazonPrice(myUrl, myXPath);