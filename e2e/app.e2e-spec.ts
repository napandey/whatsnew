import { WhatsnewPage } from './app.po';

describe('whatsnew App', () => {
  let page: WhatsnewPage;

  beforeEach(() => {
    page = new WhatsnewPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
