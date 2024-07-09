const puppeteer = require("puppeteer");

module.exports = (async () => {
  const browser = await puppeteer.launch({
    headless: true,
    args: ["--no-sandbox", "--disable-setuid-sandbox"],
  });
  const page = await browser.newPage();

  await page.goto("https://digitalapps.navyfederal.org");

  const anti = await page.cookies();

  await browser.close();

  return anti;
})();
