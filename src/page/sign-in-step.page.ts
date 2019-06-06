import { ElementFinder, browser, ExpectedConditions, element, by, $ } from 'protractor';

export class SignInStepPage {
  private emailField: ElementFinder;
  private passwordFiled: ElementFinder;
  private signInButton: ElementFinder;

  constructor () {
    this.emailField = $('#email');
    this.passwordFiled = $('#passwd');
    this.signInButton = element(by.id('SubmitLogin'));
  }

  public async signIn(email: string, password: string): Promise<void> {
    await browser.wait(
      ExpectedConditions.elementToBeClickable(
        this.signInButton),
      3000);
    await this.emailField.sendKeys(email);
    await this.passwordFiled.sendKeys(password);
    await this.signInButton.click();
  }
}
