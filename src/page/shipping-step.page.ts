import { $, ElementFinder, browser } from 'protractor';

export class ShippingStepPage {
  private acceptTermsButton : ElementFinder;
  private  proceedToCheckoutButton: ElementFinder;

  constructor () {
    this.acceptTermsButton = $('#cgv');

    this. proceedToCheckoutButton = $('#form > p > button > span');
  }

  public async selectShipping(): Promise<void> {
    await this.acceptTermsButton.click();
    await(browser.sleep(3000));
    await this. proceedToCheckoutButton.click();
  }
}
