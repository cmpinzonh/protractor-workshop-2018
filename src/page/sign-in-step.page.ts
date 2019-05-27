import { ElementFinder, browser, ExpectedConditions, element, by } from 'protractor';

export class SignInStepPage {
  private signInButton: ElementFinder;

  constructor () {
    this.signInButton = element(by.id('SubmitLogin'));
  }

  public async signIn(): Promise<void> {
    await browser.wait(
      ExpectedConditions.elementToBeClickable(
        this.signInButton),
      3000);
    await this.signInButton.click();
  }
}
