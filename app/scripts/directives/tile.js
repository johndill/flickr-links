/*global myApp*/
'use strict';

myApp.directive('tile', function() {
	return {
		restrict: 'E',
		scope: {
			url: '@url',
			image: '@image',
			title: '@title',
			description: '@description'
		},
		templateUrl: 'partials/directives/tile.html'
	};
});