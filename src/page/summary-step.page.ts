import { $, ElementFinder, browser, ExpectedConditions } from 'protractor';

export class SummaryStepPage {
  private confirmOrderText: ElementFinder;

  constructor () {
    // this.confirmOrderText = $('#center_column > div > p > strong');
    // Selector propuesto
    this.confirmOrderText = $('#center_column .dark');
  }

  public async confirmOrder(): Promise<string> {
    await browser.wait(
      ExpectedConditions.textToBePresentInElement(
        this.confirmOrderText, 'Your order on My Store is complete.'),
      3000);
    return this.confirmOrderText.getText();
  }
}
