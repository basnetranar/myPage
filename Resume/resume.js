'use strict';

angular.module('myApp.resume', ['ngRoute'])

.config(['$routeProvider','$locationProvider', function($routeProvider,$locationProvider) {
	$locationProvider.hashPrefix(''); //to remove ! sign in the URL
  $routeProvider.when('/resume', {
    templateUrl: 'Resume/resume.html',
    controller: 'resumeController'
  });
}])

.controller('resumeController', ['$scope','$window',function($scope,$window) {
	$scope.mailRanar = function(){
		$window.open("mailto:basnetranar@gmail.com",'_self');

	}

}]);



//Open Mailbox to email
  // $scope.mailWithLocation = function () {
  //      location.href = "mailto:basnetranar@gmail.com?subject=hello&body=fggf"
  //   }

  //   $scope.mailWithWindowOpen = function () {
  //      $window.open("mailto:basnetranar@gmail.com?subject=hello&body=fggf", '_self');
  //   }