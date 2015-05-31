/*global Firebase, angular*/

'use strict';

var myApp = angular.module('flApp', ['firebase']);

myApp.controller('galleryCtrl', ['$scope', '$firebaseArray',
	function($scope, $firehaseArray) {
		var ref = new Firebase('https://flickr-links.firebaseio.com/');
		$scope.albums = $firehaseArray(ref.child('albums'));
	}
]);