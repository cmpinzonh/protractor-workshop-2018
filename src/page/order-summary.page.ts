import { $, ElementFinder, browser, ExpectedConditions } from 'protractor';

export class OrderSummaryPage {
  private orderSummaryButton: ElementFinder;

  constructor () {
    // this.orderSummaryButton = $('.cart_navigation span');
    // Selector propuesto
    this.orderSummaryButton = $('.btn.btn-default.button.standard-checkout');
  }

  public async proceedToCheckout(): Promise<void> {
    await browser.wait(
      ExpectedConditions.elementToBeClickable(
        this.orderSummaryButton),
      3000);
    await this.orderSummaryButton.click();
  }
}
