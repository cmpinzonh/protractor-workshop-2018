import { $, browser, ElementFinder, promise } from 'protractor';

export class IFramePage {
  private frame: ElementFinder;

  constructor() {
    this.frame = $('#IF1');
  }

  public setFormFrameHeight(height: number): promise.Promise<void> {
    return browser
      .executeScript(`document.querySelector("#IF1").setAttribute('height', ${height});`);
  }

  public async getHeight(): Promise<number> {
    const height = await this.frame.getAttribute('height');

    return Number(height);
  }
}
