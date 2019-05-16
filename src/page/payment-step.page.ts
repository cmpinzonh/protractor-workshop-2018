import { $, ElementFinder, browser, ExpectedConditions } from 'protractor';

export class PaymentStepPage {
  private confirmOrderButton: ElementFinder;

  constructor () {
    // this.confirmOrderButton = $('#cart_navigation > button > span');
    // Selector propuesto
    this.confirmOrderButton = $('.cart_navigation .btn.button-medium');
  }

  public async confirmOrder(): Promise<void> {
    await browser.wait(
      ExpectedConditions.elementToBeClickable(
        this.confirmOrderButton),
      3000);
    await this.confirmOrderButton.click();
  }
}
