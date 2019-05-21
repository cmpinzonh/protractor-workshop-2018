import { by, ElementFinder, browser, ExpectedConditions, element } from 'protractor';

export class ProductListPage {
  private productListButton: ElementFinder;

  constructor () {
    this.productListButton = element(
      by.cssContainingText('.button-container a', 'Proceed to checkout'));
  }

  public async goToCheckout(): Promise<void> {
    await browser.wait(
      ExpectedConditions.elementToBeClickable(
        this.productListButton),
      3000);
    await this.productListButton.click();
  }
}
