(function () {

  'use strict';
  
  angular.module('MenuApp').controller('CategoriesController', CategoriesController);
  
  CategoriesController.$inject = ['items'];
  function CategoriesController(categories) {
    this.items = categories;
  }
  
})();