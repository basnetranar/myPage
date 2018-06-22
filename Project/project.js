'use strict';

angular.module('myApp.project', ['ngRoute'])

.config(['$routeProvider','$locationProvider', function($routeProvider,$locationProvider) {
	$locationProvider.hashPrefix(''); //to remove ! sign in the URL
  $routeProvider.when('/project', {
    templateUrl: 'Project/project.html',
    controller: 'projectController'
  });
}])

.controller('projectController', ['$scope',function($scope) {

}]);

