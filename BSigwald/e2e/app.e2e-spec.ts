import { BSigwaldPage } from './app.po';

describe('bsigwald App', () => {
  let page: BSigwaldPage;

  beforeEach(() => {
    page = new BSigwaldPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
