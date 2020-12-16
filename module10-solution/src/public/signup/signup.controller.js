(function () {
  "use strict";
  
  angular.module('public')
  .controller('SignupController', SignupController);
  
  SignupController.$inject = ['MenuService', 'MyinfoService'];

  function SignupController(MenuService, MyinfoService) {
    var $ctrl = this;

    $ctrl.submit = function() {
        MenuService.getFavoriteMenu($ctrl.info.shortname)
          .then(function(response) {
            $ctrl.invalidMenu = false;
            console.log($ctrl.info)
            MyinfoService.setUserInfo($ctrl.info);
            console.log(MyinfoService)
          })
          .catch(function() {
            $ctrl.invalidMenu = true;
          });
      }
    };
  
  
  })();
  