const { chromium } = require('playwright');

const MOON_HOST = 'localhost';
const PORT = '4444'
const REMOTE_URL = `${MOON_HOST}:${PORT}`;

async function test(name) {
    console.log(`Running test: ${name}`);

    const browser = await chromium.connect({
        timeout: 0,
        wsEndpoint: `ws://${REMOTE_URL}/playwright/chromium`,
    });

    const page = await browser.newPage();
    await page.goto('https://github.com');
    await page.screenshot({ path: `temp-screenshots/${name}-screenshot.png`});
    await browser.close();
    
    console.log(`Test ${name} has been finished`);
}

test('should open github page').then(console.log('Session has been stopped'));