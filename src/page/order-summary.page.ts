import { $, ElementFinder } from 'protractor';

export class OrderSummaryPage {
  private orderSummaryButton: ElementFinder;

  constructor () {
    this.orderSummaryButton = $('.cart_navigation span');
  }

  public async proceedToCheckout(): Promise<void> {
    await this.orderSummaryButton.click();
  }
}
