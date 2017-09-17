(function (angular) {
	var app=angular.module('auto-active', []);
	app.directive('autoActive', ['$location', function($location){
		// Runs during compile
		return {
			link: function(scope, element, attrigument) {
				element.on('click',function () {
					element.parent().children().removeClass('active');
					element.addClass('active');
				});
				scope.local=$location;
				scope.$watch('local.url()', function(newValue, oldValue, scope) {
					var hash=element.find('a').attr('href').substr(1);
					if(newValue.startsWith(hash)){
						element.parent().children().removeClass('active');
						element.addClass('active');
					}
				});
			}
		};
	}]);
})(angular);