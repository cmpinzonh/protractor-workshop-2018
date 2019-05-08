import { $, ElementFinder } from 'protractor';

export class ProductListPage {
  private productListButton: ElementFinder;

  constructor () {
    this.productListButton = $('[style*="display: block;"] .button-container > a');
  }

  public async goToCheckout(): Promise<void> {
    await this.productListButton.click();
  }
}
