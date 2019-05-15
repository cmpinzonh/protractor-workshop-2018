import { $, ElementFinder, browser, ExpectedConditions } from 'protractor';

export class AddToCartPage {
  private addToCartButton: ElementFinder;

  constructor () {
    this.addToCartButton = $('#center_column a.button.ajax_add_to_cart_button.btn.btn-default');
  }

  public async addToCart(): Promise<void> {
    await browser.wait(
      ExpectedConditions.elementToBeClickable(
        this.addToCartButton),
      3000);
    await this.addToCartButton.click();
  }
}
