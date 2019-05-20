import { $, ElementFinder, browser, ExpectedConditions } from 'protractor';

export class ProductListPage {
  private productListButton: ElementFinder;

  constructor () {
    this.productListButton = $('.button-container .btn.btn-default.button.button-medium');
  }

  public async goToCheckout(): Promise<void> {
    await browser.wait(
      ExpectedConditions.elementToBeClickable(
        this.productListButton),
      3000);
    await this.productListButton.click();
  }
}
