import { Config, browser } from 'protractor';
import { reporter } from './helpers/reporter';

export const config: Config = {
  sauceUser: process.env.SAUCE_USERNAME,
  sauceKey: process.env.SAUCE_ACCESS_KEY,
  framework: 'jasmine',
  specs: ['../test/**/*.spec.js'],
  getPageTimeout: 3000,
  SELENIUM_PROMISE_MANAGER: false,
  jasmineNodeOpts: {
    defaultTimeoutInterval: 120000
  },
  capabilities: {
    name: 'UI Workshop',
    browserName: 'chrome',
    chromeOptions: {
      args: ['--disable-popup-blocking', '--no-default-browser-check', '--window-size=800,600'],
      prefs: { credentials_enable_service: false }
    }
  },
  onPrepare: () => {
    browser.manage().timeouts().implicitlyWait(0);
    reporter();
    browser.ignoreSynchronization = true;
  }
};
