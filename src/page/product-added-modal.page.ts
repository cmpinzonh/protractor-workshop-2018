import { $, ElementFinder, browser, ExpectedConditions } from 'protractor';

export class AddToCartPage {
  private addToCartButton: ElementFinder;

  constructor () {
    this.addToCartButton = $('[title = "Add to cart"]');
  }

  public async addToCart(): Promise<void> {
    await browser.wait(
      ExpectedConditions.elementToBeClickable(
        this.addToCartButton),
      3000);
    await this.addToCartButton.click();
  }
}
