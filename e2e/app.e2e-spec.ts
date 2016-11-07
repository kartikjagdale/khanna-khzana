import { KhannaKhzanaPage } from './app.po';

describe('khanna-khzana App', function() {
  let page: KhannaKhzanaPage;

  beforeEach(() => {
    page = new KhannaKhzanaPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
