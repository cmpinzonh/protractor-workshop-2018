import { element, by, ElementFinder, browser, ExpectedConditions } from 'protractor';

export class PaymentStepPage {
  private confirmOrderButton: ElementFinder;

  constructor () {
    this.confirmOrderButton = element(
      by.cssContainingText('.button-medium', 'I confirm my order'));
  }

  public async confirmOrder(): Promise<void> {
    await browser.wait(
      ExpectedConditions.elementToBeClickable(
        this.confirmOrderButton),
      3000);
    await this.confirmOrderButton.click();
  }
}
