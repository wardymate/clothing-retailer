describe('ShoppingCartController', function() {
  beforeEach(module('ShoppingCart'));

  var ctrl;


  beforeEach(inject(function($controller) {
    ctrl = $controller('ShoppingCartController');
    ctrl.newItem = {'Name' : 'Suede Shoes, Blue', 'Category' : "Women’s Footwear", 'price' : '42.00', 'quantity' :
'4'};
  }));

  it('intialises with an empty basket', function() {
    expect(ctrl.shoppingBasket).toEqual([]);
  });

  it('it initialises with a basket total of £0.00', function() {
    expect(ctrl.basketTotal()).toEqual(0);
  });

  it('can add an item to the basket', function() {
    ctrl.addItemToBasket(ctrl.newItem);
    expect(ctrl.shoppingBasket).toEqual([{'Name' : 'Suede Shoes, Blue', 'Category' : "Women’s Footwear", 'price' : '42.00', 'quantity' :
'4'}]);
  });

  it('can remove an item from the basket', function() {
    ctrl.addItemToBasket(ctrl.newItem);
    ctrl.removeItemFromBasket(ctrl.newItem);
    expect(ctrl.shoppingBasket).toEqual([]);
  });


});