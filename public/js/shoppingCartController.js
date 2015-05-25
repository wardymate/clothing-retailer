shopper.controller('ShoppingCartController', [function() {

  var self = this;

  self.products = {
    'items' : [
      {'Name' : 'Almond Toe Court Shoes', 'colour' : 'Black', 'Category' : "Women’s Footwear", 'price' : 99.00, 'quantity' : 5, 'imageUrl' : 'images/Almond-Toe-Shoes.jpg'},
      {'Name' : 'Suede Shoes', 'colour' : 'Blue', 'Category' : "Women’s Footwear", 'price' : 42.00, 'quantity' : 4, 'imageUrl' : 'images/Blue-suede-shoes.jpg'} ,
      {'Name' : 'Leather Driver Saddle Loafers', 'colour' : 'Tan', 'Category' : "Men’s Footwear", 'price' : 42.00, 'quantity' : 4, 'imageUrl' : 'images/leather-loafers-tan.jpg'},
      {'Name' : 'Flip Flops', 'colour' : 'Red', 'Category' : "Men’s Footwear", 'price' : 19.00, 'quantity' : 6, 'imageUrl' : 'images/red-flip-flops.jpg'},
      {'Name' : 'Flip Flops', 'colour' : 'Blue', 'Category' : "Men’s Footwear", 'price' : 19.00, 'quantity' : 0, 'imageUrl' : 'images/blue-flip-flops.jpg'},
      {'Name' : 'Gold Button Cardigan', 'colour' : 'Black', 'Category' : "Women’s Casualwear", 'price' : 167.00, 'quantity' : 6, 'imageUrl' : 'images/gold-button-cardigan-black.jpg'},
      {'Name' : 'Cotton Shorts', 'colour' : 'Medium Red', 'Category' : "Women’s Casualwear", 'price' : 30.00, 'quantity' : 5, 'imageUrl' : 'images/cotton-shorts-red.jpg'},
      {'Name' : 'Fine Stripe Short Sleeve Shirt', 'colour' : 'Grey', 'Category' : "Men’s Casualwear", 'price' : 49.99, 'quantity' : 9, 'imageUrl' : 'images/fines-stripe-short-sleeve-shirt-grey.jpg'},
      {'Name' : 'Fine Stripe Short Sleeve Shirt', 'colour' : 'Green', 'Category' : "Men’s Casualwear", 'price' : 39.99, 'quantity' : 3, 'imageUrl' : 'images/fines-stripe-short-sleeve-shirt-green.jpg'},
      {'Name' : 'Sharkskin Waistcoat', 'colour' : 'Charcoal', 'Category' : "Men’s Formalwear", 'price' : 42.00, 'quantity' : 4, 'imageUrl' : 'images/sharkskin-waistcoat-charcoal.jpeg'},
      {'Name' : 'Patch Pocket Blazer', 'colour' : 'Deer', 'Category' : "Men’s Formalwear", 'price' : 175.50, 'quantity' : 1, 'imageUrl' : 'images/lightweight-patch-pocket-blazer-deer.jpeg'},
      {'Name' : 'Bird Print Dress', 'colour' : 'Black', 'Category' : "Women’s Formalwear", 'price' : 270.00, 'quantity' : 10, 'imageUrl' : 'images/bird-print-dress.png'},
      {'Name' : 'Mid Twist Cut-Out Dress', 'colour' : 'Pink', 'Category' : "Women’s Formalwear", 'price' : 540.00, 'quantity' : 5, 'imageUrl' : 'images/mid-twist-cut-out-dress-pink.jpeg'}
    ]
  };

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