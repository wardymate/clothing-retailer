describe('Shopping Cart', function() {
  beforeEach(function() {
    browser.get('http://localhost:3000');
  });

  it('has a title', function() {
    expect(browser.getTitle()).toEqual('A Clothing Retailer');
  });

  it('has a hidden shopping basket', function() {
    expect(element(by.id('shopping-basket')).isDisplayed()).toBe(false);
    expect(element(by.id('basket-header-total')).getText()).toContain('£0.00');
  });

  it('can add an item to the shopping basket', function() {
    element(by.cssContainingText('.basket-item', 'Suede Shoes : Blue')).click();
    expect(element(by.id('basket-header-total')).getText()).toContain('£42.00');
    expect(element(by.id('shopping-basket')).getText()).toContain('Suede Shoes : Blue');
  });

  it('can add then remove an item from the shopping basket', function() {

  });

});