(function() {
"use strict";

angular.module('common', [])
.constant('ApiPath', 'https://radiant-shelf-90570.herokuapp.com')
.config(config);

config.$inject = ['$httpProvider'];
function config($httpProvider) {
  $httpProvider.interceptors.push('loadingHttpInterceptor');
}

})();
