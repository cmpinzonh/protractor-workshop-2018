import { $, ElementFinder } from 'protractor';

export class AddToCartContentPage {
  private add: ElementFinder;

  constructor () {
    this.add =  $('#center_column a.button.ajax_add_to_cart_button.btn.btn-default');
  }

  public async goToTAdd(): Promise<void> {
    await this.add.click();
  }
}
