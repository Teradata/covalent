import { browser } from 'protractor/globals';

describe('hello, protractor', function(): void {
  describe('index', function(): void {
    browser.get('/');
    it('should have a title', function(): void {
      expect(browser.getTitle()).toBe('Teradata Covalent - Angular Material Design UI Platform');
    });
  });
});