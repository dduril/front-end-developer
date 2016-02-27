var myApp = angular.module('myApp', []);

myApp.controller('MyController', function MyController($scope){
	$scope.employee = {
		'name' 		: 'John Smith',
		'title'		: 'Front End Developer',
		'department': 'Information Technology'
	}
});