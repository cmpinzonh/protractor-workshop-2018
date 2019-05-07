import { $, ElementFinder } from 'protractor';

export class ProductList {
  private productList: ElementFinder;

  constructor () {
    this.productList = $('[style*="display: block;"] .button-container > a');
  }

  public async advance(): Promise<void> {
    await this.productList.click();
  }
}
