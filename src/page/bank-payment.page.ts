import { $, ElementFinder } from 'protractor';

export class BankPaymentStep {
  private bankPaymentStep: ElementFinder;

  constructor () {
    this.bankPaymentStep = $('#HOOK_PAYMENT > div:nth-child(1) > div > p > a');
  }

  public async advance(): Promise<void> {
    await this.bankPaymentStep.click();
  }
}
