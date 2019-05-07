import { $, ElementFinder } from 'protractor';

export class SignInStep {
  private signInStep: ElementFinder;

  constructor () {
    this.signInStep = $('#SubmitLogin > span');
  }

  public async advance(): Promise<void> {
    await this.signInStep.click();
  }
}
