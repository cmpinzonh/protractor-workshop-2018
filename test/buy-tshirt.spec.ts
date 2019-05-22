import { $, browser } from 'protractor';
import { MenuContentPage, AddToCartPage, ProductListPage, OrderSummaryPage,
        SignInStepPage, AddressStepPage, ShippingStepPage,
        BankPaymentStepPage, PaymentStepPage, SummaryStepPage } from '../src/page';

describe('Given a shopping page', () => {
  beforeAll(async () => {
    await browser.get('http://automationpractice.com/');
  });

  describe('When looking to buy a tshirt', () => {
    beforeAll(async () => {
      const menuContentPage: MenuContentPage = new MenuContentPage();
      const addToCartPage: AddToCartPage = new AddToCartPage();
      const productListPage: ProductListPage = new ProductListPage();
      const orderSummaryPage: OrderSummaryPage = new OrderSummaryPage();

      await menuContentPage.goToTShirtMenu();
      await addToCartPage.addToCart();
      await productListPage.goToCheckout();
      await orderSummaryPage.proceedToCheckout();
    });

    describe('and login into the app', () => {
      beforeAll(async () => {
        const signInStep: SignInStepPage = new SignInStepPage();

        await $('#email').sendKeys('aperdomobo@gmail.com');
        await $('#passwd').sendKeys('WorkshopProtractor');
        await signInStep.signIn();
      });

      describe('and select a payment method', () => {
        beforeAll(async () => {
          const addressStepPage: AddressStepPage = new AddressStepPage();
          const shippingStepPage: ShippingStepPage = new ShippingStepPage();
          const bankPaymentStepPage: BankPaymentStepPage = new BankPaymentStepPage();
          const paymentStepPage: PaymentStepPage = new PaymentStepPage();

          await addressStepPage.selectAddress();
          await shippingStepPage.selectShipping();
          await bankPaymentStepPage.selectBankPayment();
          await paymentStepPage.confirmOrder();
        });

        it('the order should be complete', async () => {
          const summaryStep: SummaryStepPage = new SummaryStepPage();

          expect(await summaryStep.confirmOrder())
          .toBe('Your order on My Store is complete.');
        });
      });
    });
  });
});
