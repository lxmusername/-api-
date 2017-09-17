(function (angular) {
    // "use strict";

    // start your ride
    var app = angular.module('main', [
      'home',
      'details',//首先引入,首先解析防止其他页面的干扰
      'movieList',
      'auto-active'
      ])
})(angular);