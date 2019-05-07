import { $, ElementFinder } from 'protractor';

export class SummaryStep {
  private summaryStep: ElementFinder;

  constructor () {
    this.summaryStep = $('#center_column > div > p > strong');
  }

  public async advance(): Promise<void> {
    let text;
    text =  await this.summaryStep.getText();
    return text;
  }
}
