import { $, ElementFinder, browser } from 'protractor';

export class ShippingStep {
  private shippingStep1: ElementFinder;
  private shippingStep2: ElementFinder;

  constructor () {
    this.shippingStep1 = $('#cgv');

    this.shippingStep2 = $('#form > p > button > span');
  }

  public async advance(): Promise<void> {
    await this.shippingStep1.click();
    await(browser.sleep(3000));
    await this.shippingStep2.click();
  }
}
