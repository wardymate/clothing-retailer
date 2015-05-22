shopper.controller('ShoppingCartController', [function() {

  var self = this;

  self.products = {
    'items' : [
      {'Name' : 'Almond Toe Court Shoes', 'colour' : 'Patent Black', 'Category' : "Women’s Footwear", 'price' : '99.00', 'quantity' : '5'},
      {'Name' : 'Suede Shoes', 'colour' : 'Blue', 'Category' : "Women’s Footwear", 'price' : '42.00', 'quantity' : '4'},
      {'Name' : 'Leather Driver Saddle Loafers', 'colour' : 'Tan', 'Category' : "Men’s Footwear", 'price' : '42.00', 'quantity' : '4'},
      {'Name' : 'Flip Flops', 'colour' : 'Red', 'Category' : "Men’s Footwear", 'price' : '19.00', 'quantity' : '6'},
      {'Name' : 'Flip Flops', 'colour' : 'Blue', 'Category' : "Men’s Footwear", 'price' : '19.00', 'quantity' : '0'},
      {'Name' : 'Gold Button Cardigan', 'colour' : 'Black', 'Category' : "Women’s Casualwear", 'price' : '167.00', 'quantity' : '6'},
      {'Name' : 'Cotton Shorts', 'colour' : 'Medium Red', 'Category' : "Women’s Casualwear", 'price' : '30.00', 'quantity' : '5'},
      {'Name' : 'Fine Stripe Short Sleeve Shirt', 'colour' : 'Grey', 'Category' : "Men’s Casualwear", 'price' : '49.99', 'quantity' : '9'},
      {'Name' : 'Fine Stripe Short Sleeve Shirt', 'colour' : 'Green', 'Category' : "Men’s Casualwear", 'price' : '39.99', 'quantity' : '3'},
      {'Name' : 'Sharkskin Waistcoat', 'colour' : 'Charcoal', 'Category' : "Men’s Formalwear", 'price' : '42.00', 'quantity' : '4'},
      {'Name' : 'Lightweight Patch Pocket Blazer', 'colour' : 'Deer', 'Category' : "Men’s Formalwear", 'price' : '175.50', 'quantity' : '1'},
      {'Name' : 'Bird Print Dress', 'colour' : 'Black', 'Category' : "Women’s Formalwear", 'price' : '270.00', 'quantity' : '10 '},
      {'Name' : 'Mid Twist Cut-Out Dress', 'colour' : 'Pink', 'Category' : "Women’s Formalwear", 'price' : '540.00', 'quantity' : '5'}
    ]
  };

  self.shoppingBasket = [];
  self.basketTotal = 0;
  self.shoppingBasketVisible = false;
  self.fivePoundDiscount = false;
  self.tenPoundDiscount = false;
  self.errorMessage = false;


  discountsAvailable = function() {
    self.fivePoundDiscount = true;
    self.tenPoundDiscount = true;
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
    self.shoppingBasket.push(item);
    self.shoppingBasketVisible = true;
    discountsAvailable();
    setbasketTotal();
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
    } else {
      self.basketTotal -= 15.00;
    }
  };

}]);