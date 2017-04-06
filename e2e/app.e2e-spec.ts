import { RxdataDemoPage } from './app.po';

describe('rxdata-demo App', () => {
  let page: RxdataDemoPage;

  beforeEach(() => {
    page = new RxdataDemoPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
