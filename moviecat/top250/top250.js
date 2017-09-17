(function(angular){
  
  // 1.创建正在热映模块
  var app = angular.module('top250', ['ngRoute'])


  console.log("11")
  // 2.路由规则
  app.config(['$routeProvider',function($routeProvider){
    $routeProvider.when('/top250',{  // #/top250
      templateUrl:'./top250/top250.html',
      controller:'top250Controller'
    })
  }])

  // 3.创建控制器
  app.controller('top250Controller', [
    '$scope',
    '$http',
    '$log',
    function($scope,$http, $log){

      $http.get('./top250/data.json')
      .then(function (res) {
        // console.log(res.data);
        $scope.data=res.data;
        $log.log("11")
      })
   // $scope.data = []
  }])

})(angular)