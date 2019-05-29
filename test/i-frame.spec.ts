import { browser } from 'protractor';
import { IFramePage } from '../src/page';

describe('Given a page with Iframes', () => {
  const iframe = new IFramePage();

  describe('when set the height of iframe', () => {
    beforeAll(async () => {
      await browser.get('http://toolsqa.com/iframe-practice-page/');
      await iframe.setFormFrameHeight(700);
    });

    it('then the height of iframe should be changed', async () => {
      expect(await iframe.getHeight()).toBe(700);
    });
  });
});
