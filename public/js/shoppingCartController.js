shopper.controller('ShoppingCartController', [function() {

  var goods = [{'Name' : 'Suede Shoes, Blue', 'Category' : "Women’s Footwear", 'price' : '42.00', 'quantity' :
'4'}];

  var self = this;

  self.shoppingBasket = [];

  self.basketTotal = function() {
    return 0;
  };

}]);