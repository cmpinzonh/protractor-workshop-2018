import { $, ElementFinder, browser, ExpectedConditions } from 'protractor';

export class BankPaymentStepPage {
  private bankPaymentButton: ElementFinder;

  constructor () {
    this.bankPaymentButton = $('.bankwire');
  }

  public async selectBankPayment(): Promise<void> {
    await browser.wait(
      ExpectedConditions.elementToBeClickable(
        this.bankPaymentButton),
      3000);
    await this.bankPaymentButton.click();
  }
}
