import { $, ElementFinder } from 'protractor';

export class AddToCart {
  private addCart: ElementFinder;

  constructor () {
    this.addCart = $('#center_column a.button.ajax_add_to_cart_button.btn.btn-default');
  }

  public async addToCart(): Promise<void> {
    await this.addCart.click();
  }
}
