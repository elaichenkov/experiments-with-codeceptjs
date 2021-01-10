Feature('Grab css property');

Scenario('should get background color', async ({ I }) => {
    I.amOnPage("https://github.com/")
    const bgColor = await I.grabCssPropertyFrom("button.btn-mktg-fluid", "background-color")
    I.say(bgColor)
});