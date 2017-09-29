import { UpworWomen2Page } from './app.po';

describe('upwor-women2 App', () => {
  let page: UpworWomen2Page;

  beforeEach(() => {
    page = new UpworWomen2Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
