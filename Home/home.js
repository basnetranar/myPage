'use strict';

angular.module('myApp.home', ['ngRoute'])

.config(['$routeProvider','$locationProvider', function($routeProvider,$locationProvider) {
	$locationProvider.hashPrefix('');
    $routeProvider.when('/home', {
    templateUrl: 'home/home.html'
  });
}]);
