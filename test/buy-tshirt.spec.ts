import { $, browser } from 'protractor';
import { MenuContentPage, AddToCartPage, ProductListPage, OrderSummaryPage,
        SignInStepPage, AddressStepPage, ShippingStepPage,
        BankPaymentStepPage, PaymentStepPage, SummaryStepPage } from '../src/page';

describe('Buy a t-shirt', () => {
  const menuContentPage: MenuContentPage = new MenuContentPage();
  const addToCartPage: AddToCartPage = new AddToCartPage();
  const productListPage: ProductListPage = new ProductListPage();
  const orderSummaryPage: OrderSummaryPage = new OrderSummaryPage();
  const signInStep: SignInStepPage = new SignInStepPage();
  const addressStepPage: AddressStepPage = new AddressStepPage();
  const shippingStepPage: ShippingStepPage = new ShippingStepPage();
  const bankPaymentStepPage: BankPaymentStepPage = new BankPaymentStepPage();
  const paymentStepPage: PaymentStepPage = new PaymentStepPage();
  const summaryStep: SummaryStepPage = new SummaryStepPage();

  it('then should be bought a t-shirt', async () => {
    await browser.get('http://automationpractice.com/');

    await menuContentPage.goToTShirtMenu();
    await(browser.sleep(3000));

    await addToCartPage.addToCart();
    await(browser.sleep(3000));

    await productListPage.goToCheckout();
    await(browser.sleep(3000));

    await orderSummaryPage.proceedToCheckout();
    await(browser.sleep(3000));

    await $('#email').sendKeys('aperdomobo@gmail.com');
    await $('#passwd').sendKeys('WorkshopProtractor');
    await signInStep.signIn();
    await(browser.sleep(3000));

    await addressStepPage.selectAddress();
    await(browser.sleep(3000));

    await shippingStepPage.selectShipping();
    await(browser.sleep(3000));

    await bankPaymentStepPage.selectBankPayment();
    await(browser.sleep(3000));

    await paymentStepPage.confirmOrder();
    await(browser.sleep(3000));

    expect(await summaryStep.confirmOrder())
      .toBe('Your order on My Store is complete.');
  });
});
