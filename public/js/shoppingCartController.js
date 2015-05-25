shopper.controller('ShoppingCartController', ['$http', 'Products', function($http, Products) {

  var self = this;

  self.products = {'items' : []};

  var setProducts = function(data) {
    self.products.items = data;
  };

  Products.getProducts().success(setProducts);

  self.shoppingBasket = [];
  self.basketTotal = 0;
  self.shoppingBasketVisible = false;
  self.fivePoundDiscount = false;
  self.tenPoundDiscount = false;
  self.fifteenPoundDiscount = false;
  self.errorMessage = false;

  discountsAvailable = function() {
    self.fivePoundDiscount = true;
    self.tenPoundDiscount = true;
    self.fifteenPoundDiscount = true;
  };

  self.subTotal = function() {
    return self.shoppingBasket.map(function(item) {
      return parseFloat(item.price);
    }).reduce(function(previousValue, currentValue) {
      return previousValue + currentValue;
    },0);
  };

  setbasketTotal = function() {
    self.basketTotal = self.subTotal();
  };

  itemAvailable = function(item) {
    return (parseInt(item.quantity) > 0);
  };

  self.basketNoShoes = function() {
    if (self.shoppingBasket.map(function(item) {
      return (item.Category.toLowerCase().indexOf('footwear') > -1);
      }).indexOf(true) > -1) {
      return false;}
    else {
      return true;
    }
  };

  self.addItemToBasket = function(item) {
    if (itemAvailable(item)) {
      self.shoppingBasket.push(item);
      self.shoppingBasketVisible = true;
      discountsAvailable();
      setbasketTotal();
    } else {
      self.errorMessage = 'Sorry that item is currently out of stock.';
    }
  };

  self.removeItemFromBasket = function(item) {
    self.shoppingBasket.pop(item);
    if (self.shoppingBasket.length===0) {
      self.shoppingBasketVisible = false;
    }
    setbasketTotal();
  };

  self.applyFivePoundDiscount = function() {
    if (self.fivePoundDiscount) {
      self.basketTotal -= 5.00;
      self.fivePoundDiscount = false;
    }
  };

  self.applyTenPoundDiscount = function() {
    if (self.basketTotal<50.00){
      self.errorMessage = '£10 discount only available with orders greater than £50.';
    } else if (self.tenPoundDiscount) {
      self.basketTotal -= 10.00;
      self.tenPoundDiscount = false;
    }
  };

  self.applyFifteenPoundDiscount = function() {
    if (self.basketTotal<75.00 || self.basketNoShoes()){
      self.errorMessage = '£15 discount only available with orders greater than £75 and at least one item of footwear.';
    } else if (self.fifteenPoundDiscount){
      self.basketTotal -= 15.00;
      self.fifteenPoundDiscount = false;
    }
  };

  self.clearErrorMessage = function() {
    self.errorMessage = false;
  };

}]);