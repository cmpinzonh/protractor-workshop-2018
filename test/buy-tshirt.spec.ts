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

    await addToCartPage.addToCart();

    await productListPage.goToCheckout();

    await orderSummaryPage.proceedToCheckout();

    await $('#email').sendKeys('aperdomobo@gmail.com');
    await $('#passwd').sendKeys('WorkshopProtractor');
    await signInStep.signIn();

    await addressStepPage.selectAddress();

    await shippingStepPage.selectShipping();

    await bankPaymentStepPage.selectBankPayment();

    await paymentStepPage.confirmOrder();

    expect(await summaryStep.confirmOrder())
      .toBe('Your order on My Store is complete.');
  });
});
