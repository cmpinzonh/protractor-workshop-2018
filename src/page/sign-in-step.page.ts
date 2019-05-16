import { $, ElementFinder, browser, ExpectedConditions } from 'protractor';

export class SignInStepPage {
  private signInButton: ElementFinder;

  constructor () {
    // this.signInButton = $('#SubmitLogin > span');
    // Selector propuesto
    this.signInButton = $('#SubmitLogin');
  }

  public async signIn(): Promise<void> {
    await browser.wait(
      ExpectedConditions.elementToBeClickable(
        this.signInButton),
      3000);
    await this.signInButton.click();
  }
}
