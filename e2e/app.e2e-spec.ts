import { CsvPracPage } from './app.po';

describe('csv-prac App', function() {
  let page: CsvPracPage;

  beforeEach(() => {
    page = new CsvPracPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
