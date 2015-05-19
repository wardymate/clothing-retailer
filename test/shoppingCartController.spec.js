describe('ShoppingCartController', function() {
  beforeEach(module('ShoppingCart'));

  var ctrl;

  beforeEach(inject(function($controller) {
    ctrl = $controller('ShoppingCartController');
  }));

  it('intialises with an empty basket', function() {
    expect(ctrl.shoppingBasket).toEqual([]);
  });

  it('it initialises with a basket total of £0.00', function() {
    expect(ctrl.basketTotal()).toEqual(0);
  });

});