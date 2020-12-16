(function () {
  "use strict";
  
  angular.module('common')
  .service('MyinfoService', MyinfoService);

  MyinfoService.$inject = [];
  function MyinfoService() {
    var service = this;
  
    service.setUserInfo = function (userInfo) {
      service.userInfo = userInfo;
    };
    service.getUserInfo = function() {
      return service.userInfo;
    }
  };
  
  })();