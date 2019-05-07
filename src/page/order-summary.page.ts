import { $, ElementFinder } from 'protractor';

export class OrderSummary {
  private orderSummary: ElementFinder;

  constructor () {
    this.orderSummary = $('.cart_navigation span');
  }

  public async advance(): Promise<void> {
    await this.orderSummary.click();
  }
}
