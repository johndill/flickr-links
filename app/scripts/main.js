/*global Firebase, angular*/

'use strict';

var myApp = angular.module('flApp', ['firebase', 'ngRoute']);

myApp.controller('galleryCtrl', ['$scope', '$firebaseArray',
  function($scope, $firehaseArray) {
    var ref = new Firebase('https://flickr-links.firebaseio.com/');
    $scope.albums = $firehaseArray(ref.child('albums'));
  }
]);

myApp.controller('loginCtrl', ['$scope',
  function($scope) {
    $scope.user = 'none';
  }
]);

myApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider
    .when('/login', {
      templateUrl: 'partials/login.html',
      controller: 'loginCtrl',
    })
    .otherwise({
      templateUrl: 'partials/albums.html',
      controller: 'galleryCtrl'
    });
  }
]);