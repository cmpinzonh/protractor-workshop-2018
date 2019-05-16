import { $, ElementFinder, ExpectedConditions, browser } from 'protractor';

export class MenuContentPage {
  private tShirtMenu: ElementFinder;

  constructor () {
    this.tShirtMenu = $('#block_top_menu > ul > li:nth-child(3) > a');
  }

  public async goToTShirtMenu(): Promise<void> {
    await browser.wait(
      ExpectedConditions.elementToBeClickable(
        this.tShirtMenu),
      3000);
    await this.tShirtMenu.click();
  }
}
