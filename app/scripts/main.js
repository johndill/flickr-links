/*global Firebase, angular*/
'use strict';

var myApp = angular.module('flApp', ['firebase', 'ngRoute']);

myApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider
    .when('/login', {
      templateUrl: 'partials/views/login.html',
      controller: 'loginCtrl',
    })
    .otherwise({
      templateUrl: 'partials/views/albums.html',
      controller: 'galleryCtrl'
    });
  }
]);