import { $, ElementFinder } from 'protractor';

export class SignInStepPage {
  private signInButton: ElementFinder;

  constructor () {
    this.signInButton = $('#SubmitLogin > span');
  }

  public async signIn(): Promise<void> {
    await this.signInButton.click();
  }
}
