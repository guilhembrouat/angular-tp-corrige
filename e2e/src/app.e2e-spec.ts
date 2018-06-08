import { browser, by, element } from 'protractor';

describe('workspace-project App', () => {
  it('should display title', () => {
    browser.get('/');
    const title = element(by.css('app-root h1')).getText();
    expect(title).toEqual('Address Book');
  });
});


/*
import { AppPage } from './app.po';

describe('workspace-project App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display title', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Address Book');
  });
});
*/