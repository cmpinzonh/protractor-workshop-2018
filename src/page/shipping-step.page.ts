import { $, ElementFinder, browser, ExpectedConditions } from 'protractor';

export class ShippingStepPage {
  private acceptTermsButton: ElementFinder;
  private proceedToCheckoutButton: ElementFinder;

  constructor () {
    this.acceptTermsButton = $('#cgv');

    // this.proceedToCheckoutButton = $('#form > p > button > span');
    // Selector propuesto
    this.proceedToCheckoutButton = $('.cart_navigation .btn.standard-checkout');
  }

  public async selectShipping(): Promise<void> {
    await this.acceptTermsButton.click();
    await browser.wait(
      ExpectedConditions.elementToBeSelected(
        this.acceptTermsButton),
      3000);
    await browser.wait(
      ExpectedConditions.elementToBeClickable(
        this.proceedToCheckoutButton),
      3000);
    await this. proceedToCheckoutButton.click();
  }
}
