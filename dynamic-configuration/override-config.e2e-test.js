const assert = require('assert');

Feature('Dynamic Configuration');

Scenario('should override browser in config per scenario try#1 @dynamic-configuration', async ({ I }) => {
    I.amOnPage('/');
    const isChrome = await I.executeScript(() => !!window.chrome);

    assert(isChrome, 'should check that browser is chrome');
}).config({"browser": "firefox"});

Scenario('should override browser in config per scenario try#2 @dynamic-configuration', async ({ I }) => {
    I.amOnPage('/');
    const isChrome = await I.executeScript(() => !!window.chrome);

    assert(isChrome, 'should check that browser is chrome');
}).config({"Playwright": {"browser": "firefox"}});

Scenario('should override browser in config per scenario try#3 @dynamic-configuration', async ({ I }) => {
    I.amOnPage('/');
    const isChrome = await I.executeScript(() => !!window.chrome);

    assert(isChrome, 'should check that browser is chrome');
}).config({ "helpers": {"Playwright": {"browser": "webkit"}}});
