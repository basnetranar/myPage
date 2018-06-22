'use strict';

angular.module('myApp.contact', ['ngRoute'])

.config(['$routeProvider','$locationProvider', function($routeProvider,$locationProvider) {
	$locationProvider.hashPrefix(''); //to remove ! sign in the URL
  $routeProvider.when('/contact', {
    templateUrl: 'Contact/contact.html',
    controller: 'contactController'
  });
}])

.controller('contactController', ['$scope','$http','$window',function($scope,$http,$window) {
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