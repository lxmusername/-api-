(function(angular){
  
  // 1.创建正在热映模块
  var app = angular.module('movieList', 
    ['ngRoute','myService']);

  // 2.路由规则
  app.config(['$routeProvider',function($routeProvider){
    $routeProvider.when('/:movieType/:page?',{  // #/coming_soon
      templateUrl:'./movie_list/movie_list.html',
      controller:'coming_soonController'
    })
  }])

  // 3.创建控制器
  app.controller('coming_soonController',
   ['$scope',
   '$http',
   '$routeParams',
   '$route',
   'myJsonpSer',
   function($scope,$http,$routeParams,$route,myJsonpSer){
    // 页面加载时的效果
    $scope.loading=true;
     $scope.pageSize=10;//每页显示的数据多少
      $scope.page=($routeParams.page||"1")-0;//当前显示第几页
      //获取指定页的数据
      $scope.getPage=function (nowPage) {
        //判断条件
       if($scope.page<1||$scope.page>=$scope.totalPage){
        return;
       }
        $route.updateParams({page:nowPage});
      }
      var start=($scope.page-1)*$scope.pageSize;
      myJsonpSer.jsonp('http://api.douban.com/v2/movie/'+$routeParams.movieType,
        {start:start,count:$scope.pageSize,q:$routeParams.q},
        function (data) {
        // body...
        console.log(data);
        $scope.data=data;
        //获取总的页数
        $scope.totalPage=Math.ceil($scope.data.total/$scope.pageSize);
        $scope.loading=false;//页面加载时的动画效果loading
        $scope.$apply();

      });
  }])

})(angular)