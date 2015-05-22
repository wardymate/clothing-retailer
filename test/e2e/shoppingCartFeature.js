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
    element(by.cssContainingText('.shop-item', 'Suede Shoes : Blue')).click();
    expect(element(by.id('basket-header-total')).getText()).toContain('£42.00');
    expect(element(by.id('shopping-basket')).getText()).toContain('Suede Shoes : Blue');
  });

  it('can add then remove an item from the shopping basket', function() {
    element(by.cssContainingText('.shop-item', 'Suede Shoes : Blue')).click();
    element(by.cssContainingText('.remove-basket-item', 'remove')).click();
    expect(element(by.id('shopping-basket')).isDisplayed()).toBe(false);
    expect(element(by.id('basket-header-total')).getText()).toContain('£0.00');
  });

  describe('using vouchers', function() {
    it('can apply a £5 off voucher once an item is added to the basket', function() {
      element(by.cssContainingText('.shop-item', 'Suede Shoes : Blue')).click();
      element(by.id('five-pound-voucher')).click();
      expect(element(by.id('basket-total')).getText()).toContain('£37.00');
    });

    it('can only apply one £5 off voucher once an item is added to the basket', function() {
      element(by.cssContainingText('.shop-item', 'Suede Shoes : Blue')).click();
      element(by.id('five-pound-voucher')).click();
      element(by.id('five-pound-voucher')).click();
      expect(element(by.id('basket-total')).getText()).toContain('£37.00');
    });

    it('can apply a £10 off voucher when the basket subtotal is more than £50', function() {
      element(by.cssContainingText('.shop-item', 'Almond Toe Court Shoes : Patent Black')).click();
      element(by.id('ten-pound-voucher')).click();
      expect(element(by.id('basket-total')).getText()).toContain('£89.00');
    });

  });

});