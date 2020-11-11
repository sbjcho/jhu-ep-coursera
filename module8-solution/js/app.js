(function() {

  'use strict';
  
  angular.module('NarrowItDownApp', [])
  .controller('NarrowItDownController', NarrowItDownController)
  .service('MenuSearchService', MenuSearchService)
  .constant('ApiBasePath', "https://davids-restaurant.herokuapp.com")
  .directive('foundItems', FoundItems);

  function FoundItems(){
    var ddo = {
      restrict: 'E',
      templateUrl: 'foundListItems.html',
      scope: {
        foundItems: '<',
        onRemove: '&'
      },
      controller: NarrowItDownController,
      controllerAs: 'narrowItDownCtr',
      bindToController: true
    };
    return ddo;
  }

  NarrowItDownController.$inject = ['MenuSearchService'];

  function NarrowItDownController(MenuSearchService){
    var narrowItDownCtr = this;
    narrowItDownCtr.found = [];

    narrowItDownCtr.getMatchedMenuItems = function(searchTerm){
      var promise = MenuSearchService.getMatchedMenuItems(searchTerm);
      
      promise.then(function(response){
        if(response.length > 0){
          narrowItDownCtr.found = response;
        }else{
          narrowItDownCtr.found = [];
        }
      })
    }
    narrowItDownCtr.removeItem = function(itemIndex){
      narrowItDownCtr.found.splice(itemIndex, 1);
    };
  }

  MenuSearchService.$inject = ['$http', 'ApiBasePath'];

  function MenuSearchService($http, ApiBasePath){
    var service = this;

    service.getMatchedMenuItems = function(searchTerm){
      return $http({
        method: "GET",
        url: (ApiBasePath + "/menu_items.json")
      }).then(function(result){
        var foundItems = [];
        var items = result.data.menu_items;

        for(var i = 0; i < items.length; i++){
          if(items[i].description.indexOf(searchTerm) !== -1){
            foundItems.push(items[i]);
          }
        }

        return foundItems;
      })
    }
  };

})();