import { $, ElementFinder } from 'protractor';

export class PaymentStep {
  private paymentStep: ElementFinder;

  constructor () {
    this.paymentStep = $('#cart_navigation > button > span');
  }

  public async advance(): Promise<void> {
    await this.paymentStep.click();
  }
}
