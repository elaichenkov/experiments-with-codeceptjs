Feature('Multiple session');

Scenario('should start multiple sessions with different browsers @multiple-session', ({ I }) => {
    I.amOnPage('/');

    session('user', { browser: 'firefox' }, () => {
        I.amOnPage('/help');
        I.saveScreenshot('github-help.png');
    });
});