describe('Shopping Cart', function() {
  beforeEach(function() {
    browser.get('http://localhost:3000');
  });

  it('has a title', function() {
    expect(browser.getTitle()).toEqual('A Clothing Retailer');
  });

  it('has a hidden shopping basket', function() {
    expect(browser.isElementPresent(by.id('shopping-basket'))).toBe(false);
    expect(element(by.id('basket-header-total')).getText()).toContain('£0.00');
  });

  it('can add an item to the shopping cart', function() {
    element(by.cssContainingText('.list-group', 'Suede Shoes : Blue')).click();
    expect(element(by.id('basket-header-total')).getText()).toContain('£42.00');
    expect(element(by.id('shopping-basket')).getText()).toContain('Suede Shoes : Blue');
  });

});