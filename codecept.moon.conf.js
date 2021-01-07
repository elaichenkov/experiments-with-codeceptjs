const { setHeadlessWhen } = require('@codeceptjs/configure');

setHeadlessWhen(process.env.HEADLESS);

exports.config = {
  tests: '*/*.e2e-test.js',
  output: './output',
  helpers: {
    Playwright: {
      url: 'http://github.com',
      show: true,
      browser: 'firefox',
      chromium: {
        browserWSEndpoint: 'ws://localhost:4444/playwright/chromium?headless=false&name=ChromiumTest'
      },
      firefox: {
        browserWSEndpoint: 'ws://localhost:4444/playwright/firefox?headless=false&name=FirefoxTest',
      },
      webkit: {
        browserWSEndpoint: 'ws://localhost:4444/playwright/webkit?headless=false&name=WebkitTest'
      }
    }
  },
  include: {
    I: './steps_file.js'
  },
  bootstrap: null,
  mocha: {},
  name: 'experiments-with-codeceptjs',
  plugins: {
    pauseOnFail: {},
    retryFailedStep: {
      enabled: true
    },
    tryTo: {
      enabled: true
    },
    screenshotOnFail: {
      enabled: true
    }
  }
}