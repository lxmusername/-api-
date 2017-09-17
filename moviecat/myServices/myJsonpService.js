(function (angular) {
	var app=angular.module('myService', []);
	app.service('myJsonpSer', ['$window', function($window){
		this.jsonp=function(url,args,fn) {
			//1动态生成script标签
			var script=$window.document.createElement('script');

			var argStr='';
			for(var key in args){
				argStr+=key+"="+args[key]+"&";
			}
			var cbName="myJsonp"+$window.Math.floor($window.Math.random()*100000)+$window.Date.now();
			//2利用script的src属性实现跨域
			url+="?"+argStr+"callback="+cbName;	
			
			$window[cbName]=function (data) {
				fn(data);
				// console.log(cbName);

			}
			script.src=url;
			//追加到head头部标签中
			var head=$window.document.getElementsByTagName('head')[0];
			head.appendChild(script);
		}







	}])







})(angular)