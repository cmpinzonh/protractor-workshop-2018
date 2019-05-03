import { $, browser } from 'protractor';
import { MenuContentPage, AddToCartContentPage, ProductListPage } from '../src/page';

describe('Buy a t-shirt', () => {
  const menuContentPage: MenuContentPage = new MenuContentPage();
  const addressContentPage: AddToCartContentPage = new AddToCartContentPage();
  const productListPage: ProductListPage = new ProductListPage();
  beforeEach(() => {
    jasmine.DEFAULT_TIMEOUT_INTERVAL = 120000;
  });

  it('then should be bought a t-shirt', async () => {
    await browser.get('http://automationpractice.com/');
    await(browser.sleep(3000));
    await menuContentPage.goToTShirtMenu();
    /** Clase de add to cart */
    await(browser.sleep(3000));
    await addressContentPage.goToTAdd();
    /** Clase de Product list, ir a checkout */
    await(browser.sleep(3000));
    await productListPage.goToProductList();

    await(browser.sleep(3000));
    await $('.cart_navigation span').click();
    await(browser.sleep(3000));

    await $('#email').sendKeys('aperdomobo@gmail.com');
    await $('#passwd').sendKeys('WorkshopProtractor');
    await $('#SubmitLogin > span').click();
    await(browser.sleep(3000));

    await $('#center_column > form > p > button > span').click();
    await(browser.sleep(3000));

    await $('#cgv').click();
    await(browser.sleep(3000));

    await $('#form > p > button > span').click();
    await(browser.sleep(3000));
    await $('#HOOK_PAYMENT > div:nth-child(1) > div > p > a').click();
    await(browser.sleep(3000));
    await $('#cart_navigation > button > span').click();
    await(browser.sleep(3000));

    await expect($('#center_column > div > p > strong').getText())
      .toBe('Your order on My Store is complete.');
  });
});
