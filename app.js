'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ngRoute',
  'myApp.home',
  'myApp.contact',
  'myApp.resume',
  'myApp.project'
])
.config(['$routeProvider','$locationProvider', function($routeProvider,$locationProvider) {
	$locationProvider.hashPrefix('');
  $routeProvider.otherwise({redirectTo: '/home'});
}]);
