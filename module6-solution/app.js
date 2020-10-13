(function () {
'use strict';

angular.module('LunchCheck', [])

.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];

function LunchCheckController($scope) {
  $scope.menu = "";
  $scope.msg = "";
  $scope.status = "";

  $scope.sayMessage = function (){
    var items = $scope.menu.split(",").filter(function (item){
      return item.trim() != "";
    });

    console.log (items);

    if($scope.menu.trim().length == 0 ){
      $scope.msg = "Please enter data first";
      $scope.status = "empty";
    }else if(items.length <= 3){
      $scope.msg = "Enjoy!";
      $scope.status = "good";
    }else {
      $scope.msg = "Too much!";
      $scope.status = "good";
    }
  }
}


})();