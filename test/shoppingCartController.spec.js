describe('ShoppingCartController', function() {
  beforeEach(module('ShoppingCart'));

  var ctrl;


  beforeEach(inject(function($controller) {
    ctrl = $controller('ShoppingCartController');
    ctrl.newItem = {'Name' : 'Suede Shoes, Blue', 'Category' : "Women’s Footwear", 'price' : '42.00', 'quantity' : '4'};
  }));

  it('intialises with an empty basket', function() {
    expect(ctrl.shoppingBasket).toEqual([]);
  });

  it('it initialises with a basket total of £0.00', function() {
    expect(ctrl.basketTotal).toEqual(0);
  });

  it('initialises with a hidden shopping basket', function() {
    expect(ctrl.shoppingBasketVisible).toEqual(false);
  });

  it('can add an item to the basket', function() {
    ctrl.addItemToBasket(ctrl.newItem);
    expect(ctrl.shoppingBasket).toEqual([{'Name' : 'Suede Shoes, Blue', 'Category' : "Women’s Footwear", 'price' : '42.00', 'quantity' : '4'}]);
  });

  it('can remove an item from the basket', function() {
    ctrl.addItemToBasket(ctrl.newItem);
    ctrl.removeItemFromBasket(ctrl.newItem);
    expect(ctrl.shoppingBasket).toEqual([]);
  });

  it('changes the shopping basket to visible when an item is added', function() {
    ctrl.addItemToBasket(ctrl.newItem);
    expect(ctrl.shoppingBasketVisible).toEqual(true);
  });

  it('changes the shopping basket to hidden when an item is added and then removed', function() {
    ctrl.addItemToBasket(ctrl.newItem);
    ctrl.removeItemFromBasket(ctrl.newItem);
    expect(ctrl.shoppingBasketVisible).toEqual(false);
  });

  it('Displays the total of the goods in the basket', function() {
    ctrl.addItemToBasket(ctrl.newItem);
    expect(ctrl.basketTotal).toEqual(42.00);
  });

  it('can apply a discount of £5 once an item has been added to the basket', function() {
    ctrl.addItemToBasket(ctrl.newItem);
    expect(ctrl.fivePoundDiscount).toEqual(true);
  });

  it('reduces the total once the £5 discount has been applied', function() {
    ctrl.addItemToBasket(ctrl.newItem);
    ctrl.applyFivePoundDiscount();
    expect(ctrl.basketTotal).toEqual(37.00);
  });

});