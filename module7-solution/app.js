(function () {
'use strict';

angular.module('ShoppingListCheckOff', [])
  .controller('ToBuyController', ToBuyController)
  .controller('AlreadyBoughtController', AlreadyBoughtController)
  .service('ShoppingListCheckOffService', ShoppingListCheckOffService)
  .filter('trippleDollar', TrippleDollarFilter);

ToBuyController.$inject = ['ShoppingListCheckOffService'];

function ToBuyController(ShoppingListCheckOffService){
  var controller = this;

  controller.items = ShoppingListCheckOffService.getToBuyItems();

  controller.buyItems = function(itemIndex) {
    ShoppingListCheckOffService.buyItems(itemIndex);
  };
}

AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];

function AlreadyBoughtController(ShoppingListCheckOffService) {
  var controller = this;

  controller.items = ShoppingListCheckOffService.getAlreadyBoughtItems();
}

function ShoppingListCheckOffService() {
  var service = this;

  var toBuyItems = [
    { name: "cookies", quantity: 10, pricePerItem: 1},
    { name: "juice", quantity: 2, pricePerItem: 5},
    { name: "apple", quantity: 5, pricePerItem: 4},
    { name: "cupcakes", quantity: 4, pricePerItem: 8},
    { name: "eggs", quantity: 12, pricePerItem: 2}
  ];

  var alreadyBoughtItems = [];

  service.getToBuyItems = function() {
    return toBuyItems;
  }

  service.getAlreadyBoughtItems = function() {
    return alreadyBoughtItems;
  }

  service.buyItems = function(index) {
    alreadyBoughtItems.push(toBuyItems[index]);
    toBuyItems.splice(index, 1);
  }
}

function TrippleDollarFilter() {
  return function (input) {
    input = input || "";
    input = "$$$" + input.toFixed(2);
    return input;
  };
}


})();