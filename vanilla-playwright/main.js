const { firefox, webkit, chromium } = require('playwright');

(async () => {
    const browser = await webkit.launch({headless: false});
    const page = await browser.newPage();

    await page.goto('https://appr.tc/');
    await page.click('#join-button');

    await page.screenshot({path: './grant-permissions.png'});
    await browser.close();
})();
