import { $, browser } from 'protractor';
import { MenuContentPage, AddToCart, ProductList, OrderSummary,
        SignInStep, AddressStep, ShippingStep,
        BankPaymentStep, PaymentStep } from '../src/page';

describe('Buy a t-shirt', () => {
  const menuContentPage: MenuContentPage = new MenuContentPage();
  const addToCart: AddToCart = new AddToCart();
  const productList: ProductList = new ProductList();
  const orderSummary: OrderSummary = new OrderSummary();
  const signInStep: SignInStep = new SignInStep();
  const addressStep: AddressStep = new AddressStep();
  const shippingStep: ShippingStep = new ShippingStep();
  const bankPaymentStep: BankPaymentStep = new BankPaymentStep();
  const paymentStep: PaymentStep = new PaymentStep();

  beforeEach(() => {
    jasmine.DEFAULT_TIMEOUT_INTERVAL = 120000;
  });

  it('then should be bought a t-shirt', async () => {
    await browser.get('http://automationpractice.com/');
    await(browser.sleep(3000));

    await menuContentPage.goToTShirtMenu();
    await(browser.sleep(3000));

    await addToCart.addToCart();
    await(browser.sleep(3000));

    await productList.advance();
    await(browser.sleep(3000));

    await orderSummary.advance();
    await(browser.sleep(3000));

    await $('#email').sendKeys('aperdomobo@gmail.com');
    await $('#passwd').sendKeys('WorkshopProtractor');
    await signInStep.advance();
    await(browser.sleep(3000));

    await addressStep.advance();
    await(browser.sleep(3000));

    await shippingStep.advance();
    await(browser.sleep(3000));

    await bankPaymentStep.advance();
    await(browser.sleep(3000));

    await paymentStep.advance();
    await(browser.sleep(3000));

    await expect($('#center_column > div > p > strong').getText())
      .toBe('Your order on My Store is complete.');
  });
});
