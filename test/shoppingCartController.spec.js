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

  it('can add an item to the basket', function() {
    ctrl.newItem = {'Name' : 'Suede Shoes, Blue', 'Category' : "Women’s Footwear", 'price' : '42.00', 'quantity' :
'4'};
    ctrl.addItemToBasket(ctrl.newItem);
    expect(ctrl.shoppingBasket).toEqual([{'Name' : 'Suede Shoes, Blue', 'Category' : "Women’s Footwear", 'price' : '42.00', 'quantity' :
'4'}]);
  });


});