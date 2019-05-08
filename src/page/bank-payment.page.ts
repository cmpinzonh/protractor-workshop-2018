import { $, ElementFinder } from 'protractor';

export class BankPaymentStepPage {
  private bankPaymentButton: ElementFinder;

  constructor () {
    this.bankPaymentButton = $('#HOOK_PAYMENT > div:nth-child(1) > div > p > a');
  }

  public async selectBankPayment(): Promise<void> {
    await this.bankPaymentButton.click();
  }
}
