import { GraphTestV2Page } from './app.po';

describe('graph-test-v2 App', () => {
  let page: GraphTestV2Page;

  beforeEach(() => {
    page = new GraphTestV2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
