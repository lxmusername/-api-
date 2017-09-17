(function (angular) {
	// body...

	var app=angular.module('details', ['ngRoute','myService']);
	app.config(['$routeProvider',
		function($routeProvider) {
		$routeProvider.when('/details/:id',{
			templateUrl:'./details/details.html',
			controller:'detailsController'
		} );
	}]);
	app.controller('detailsController', 
		['$scope','$routeParams','myJsonpSer',
		 function($scope,$routeParams,myJsonpSer){
		myJsonpSer.jsonp('http://api.douban.com/v2/movie/subject/'+$routeParams.id,{},function (data) {
			// body...
			console.log(data)
			$scope.data=data;
			$scope.$apply();
		})
	}])
})(angular)