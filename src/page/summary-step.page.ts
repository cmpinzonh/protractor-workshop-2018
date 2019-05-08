import { $, ElementFinder } from 'protractor';

export class SummaryStepPage {
  private confirmOrderButton: ElementFinder;

  constructor () {
    this.confirmOrderButton = $('#center_column > div > p > strong');
  }

  public async confirmOrder(): Promise<string> {
    return this.confirmOrderButton.getText();
  }
}
