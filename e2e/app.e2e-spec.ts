import { Angular2PigLatinPage } from './app.po';

describe('angular2-pig-latin App', function() {
  let page: Angular2PigLatinPage;

  beforeEach(() => {
    page = new Angular2PigLatinPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
