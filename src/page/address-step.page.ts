import { $, ElementFinder } from 'protractor';

export class AddressStep {
  private addressStep: ElementFinder;

  constructor () {
    this.addressStep = $('#center_column > form > p > button > span');
  }

  public async advance(): Promise<void> {
    await this.addressStep.click();
  }
}
