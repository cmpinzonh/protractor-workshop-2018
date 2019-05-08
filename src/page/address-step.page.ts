import { $, ElementFinder } from 'protractor';

export class AddressStepPage {
  private addressStepButton: ElementFinder;

  constructor () {
    this.addressStepButton = $('#center_column > form > p > button > span');
  }

  public async selectAddress(): Promise<void> {
    await this.addressStepButton.click();
  }
}
