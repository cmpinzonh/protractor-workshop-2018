import { $, ElementFinder, browser } from 'protractor';

export class ShippingStepPage {
  private tosButton : ElementFinder;
  private proceedButton: ElementFinder;

  constructor () {
    this.tosButton = $('#cgv');

    this.proceedButton = $('#form > p > button > span');
  }

  public async selectShipping(): Promise<void> {
    await this.tosButton.click();
    await(browser.sleep(3000));
    await this.proceedButton.click();
  }
}
