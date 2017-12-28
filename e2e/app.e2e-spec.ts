import { SPage } from './app.po';

describe('s App', function() {
  let page: SPage;

  beforeEach(() => {
    page = new SPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
