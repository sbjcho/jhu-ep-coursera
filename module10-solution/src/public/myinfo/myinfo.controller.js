(function () {
    "use strict";
    
    angular.module('public')
    .controller('MyinfoController', MyinfoController);
    
    MyinfoController.$inject = ['MenuService', 'userInfo'];
    function MyinfoController(MenuService, userInfo) {
      var $ctrl = this;
    
      if (userInfo == undefined){
          console.log('User Info is undefined')
      }
      
      if (userInfo != undefined) {
        $ctrl.userInfo = userInfo;
        console.log(userInfo.shortname)
        MenuService.getFavoriteMenu(userInfo.shortname)
          .then(function(response) {
            $ctrl.menuItem = response;
          })
          .catch(function(response) {
            console.log(response);
          });
      }
    };
    
    })();