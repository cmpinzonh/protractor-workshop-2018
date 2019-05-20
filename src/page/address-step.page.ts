import { $, ElementFinder, browser, ExpectedConditions } from 'protractor';

export class AddressStepPage {
  private addressStepButton: ElementFinder;

  constructor () {
    this.addressStepButton = $('.cart_navigation .button-medium');
  }

  public async selectAddress(): Promise<void> {
    await browser.wait(
      ExpectedConditions.elementToBeClickable(
        this.addressStepButton),
      3000);
    await this.addressStepButton.click();
  }
}
