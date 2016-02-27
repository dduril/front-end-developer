var myApp = angular.module('myApp', []);

myApp.controller('MyController', function MyController($scope, $http){
	$http.get('data/movies.json').success(function(data){
		$scope.movies = data;
	});
});