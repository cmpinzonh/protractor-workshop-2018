import { $, ElementFinder, browser, ExpectedConditions } from 'protractor';

export class BankPaymentStepPage {
  private bankPaymentButton: ElementFinder;

  constructor () {
    this.bankPaymentButton = $('#HOOK_PAYMENT > div:nth-child(1) > div > p > a');
  }

  public async selectBankPayment(): Promise<void> {
    await browser.wait(
      ExpectedConditions.elementToBeClickable(
        this.bankPaymentButton),
      3000);
    await this.bankPaymentButton.click();
  }
}
