import { $, ElementFinder } from 'protractor';

export class SummaryStepPage {
  private confirmOrderText: ElementFinder;

  constructor () {
    this.confirmOrderText = $('#center_column .dark');
  }

  public async confirmOrder(): Promise<string> {
    return this.confirmOrderText.getText();
  }
}
