import { $, ElementFinder, browser, ExpectedConditions } from 'protractor';

export class OrderSummaryPage {
  private orderSummaryButton: ElementFinder;

  constructor () {
    this.orderSummaryButton = $('.standard-checkout');
  }

  public async proceedToCheckout(): Promise<void> {
    await browser.wait(
      ExpectedConditions.elementToBeClickable(
        this.orderSummaryButton),
      3000);
    await this.orderSummaryButton.click();
  }
}
