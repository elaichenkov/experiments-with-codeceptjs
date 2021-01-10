const { firefox, webkit, chromium } = require('playwright');

(async () => {
    const browser = await chromium.launch({headless: true});
    const page = await browser.newPage();

    await page.goto('https://github.com/');
    // const ulElementHandle = await page.$('button.btn-mktg-fluid');
    // const bg = await ulElementHandle.evaluate(ulElement => getComputedStyle(ulElement).getPropertyValue('background-color'));
    page.on('console', msg => console.log('MESSAGE =======', msg.text()))
    function toCamelCase(name) {
        if (typeof name !== 'string') {
          return name;
        }
        return name.replace(/-(\w)/gi, (_word, letter) => {
          return letter.toUpperCase();
        });
      };

      async function grabCssPropertyFromAll(cssProperty) {
        const els = await page.$$('button.btn-mktg-fluid');


        // const res = await Promise.all(els.map(el => el.$eval('xpath=.', el => getComputedStyle(el).getPropertyValue('background-color'), el)));
        // const cssValues = await Promise.all(els.map(el => el.$eval('xpath=.', (o) => {
        //   console.log('======PROPERTY=====: ', )
        //   return getComputedStyle(el).getPropertyValue('background-color')
        // }, { el })));

        // console.log('RES: ', cssValues[0]);
        const button1 = await page.$('.button1');
        const button2 = await page.$('.button2');

        const res = await Promise.all(els.map(el => el.$eval('xpath=.', (el, cssProperty) => getComputedStyle(el).getPropertyValue(cssProperty),cssProperty)));
          // return JSON.parse(JSON.stringify(getComputedStyle(el)))
        // const cssValues = res.map(props => props[toCamelCase(cssProperty)]);
        // const cssValues = res.map(props => props[toCamelCase(cssProperty)]);
        // const cssValues = res.map(props => props.getPropertyValue(cssProperty));

        // console.log('KEYS: ', Object.keys(res));
        // console.log('VALUES: ', res[0]['backgroundColor']);


        return res;
      }

     const bg = await grabCssPropertyFromAll('background-color')
    // console.log('N: ', browser);

    console.log('BG: ', bg);
    await browser.close();
})();