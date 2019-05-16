import { $, ElementFinder, browser, ExpectedConditions } from 'protractor';

export class AddressStepPage {
  private addressStepButton: ElementFinder;

  constructor () {
    // this.addressStepButton = $('#center_column > form > p > button > span');
    // Selector propuesto
    this.addressStepButton = $('.cart_navigation .button.btn.btn-default.button-medium');
  }

  public async selectAddress(): Promise<void> {
    await browser.wait(
      ExpectedConditions.elementToBeClickable(
        this.addressStepButton),
      3000);
    await this.addressStepButton.click();
  }
}
