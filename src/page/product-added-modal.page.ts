import { $$, ElementFinder, browser, ElementArrayFinder } from 'protractor';

export class AddToCartPage {
  private products: ElementArrayFinder;

  constructor () {
    this.products = $$('.product-container');
  }

  private findByProduct(productName: string): ElementFinder {
    return this.products
      .filter((item: ElementFinder) =>
        item
          .$('.product-name')
          .getText()
          .then((text: string) => text.includes(productName)))
      .first();
  }

  public async addToCart(productName: string): Promise<void> {
    const card = this.findByProduct(productName);

    await browser.actions().mouseMove(card.$('img')).perform();
    await card.$('[title = "Add to cart"]').click();
  }
}
