import { $, browser } from 'protractor';
import { MenuContentPage, AddToCartPage, ProductListPage, OrderSummaryPage,
        SignInStepPage, AddressStepPage, ShippingStepPage,
        BankPaymentStepPage, PaymentStepPage, SummaryStepPage } from '../src/page';

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
describe('Given a shopping page', () => {
  beforeAll(async () => {
    await browser.get('http://automationpractice.com/');
  });

  describe('When looking to buy a tshirt', () => {
    beforeAll(async () => {
      await menuContentPage.goToTShirtMenu();
      await addToCartPage.addToCart();
      await productListPage.goToCheckout();
      await orderSummaryPage.proceedToCheckout();
    });

    describe('and login into the app', () => {
      beforeAll(async () => {

        await $('#email').sendKeys('aperdomobo@gmail.com');
        await $('#passwd').sendKeys('WorkshopProtractor');
        await signInStep.signIn();
      });

      describe('and select an address', () => {
        beforeAll(async () => {

          await addressStepPage.selectAddress();
        });

        describe('and select a payment method', () => {
          beforeAll(async () => {

            await shippingStepPage.selectShipping();
            await bankPaymentStepPage.selectBankPayment();
            await paymentStepPage.confirmOrder();
          });

          it('the order should be complete', async () => {

            expect(await summaryStep.confirmOrder())
            .toBe('Your order on My Store is complete.');
          });
        });
      });
    });
  });
});
