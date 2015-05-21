shopper.controller('ShoppingCartController', [function() {

  var goods = [{'Name' : 'Suede Shoes, Blue', 'Category' : "Women’s Footwear", 'price' : '42.00', 'quantity' :
'4'}];

  var self = this;

  self.shoppingBasket = [];

  self.basketTotal = function() {
    return 0;
  };

  self.addItemToBasket = function(item) {
    self.shoppingBasket.push(item);
  };

  self.removeItemFromBasket = function(item) {
    self.shoppingBasket.pop(item);
  };

}]);