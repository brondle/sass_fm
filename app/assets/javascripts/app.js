'use strict';

angular.module('myApp', ['ui.router', 'templates'])
	.config([
		'$stateProvider',
		'$urlRouterProvider',
		function($stateProvider, $urlRouterProvider) {
			$stateProvider
				.state('home', {
					url: '/home',
					templateUrl: 'search/_home.html',
					controller: 'SearchController',
					// resolve: {
					// 	objectPromise: ['objects', function(objects){
					// 		return objects.getAll();
					// 	}]
					// }
				})
			/* dynamically created state depending on type of object selected (artist, album, label, etc.) */
				.state('object', {
					url: '/{type}/{id}',
					templateUrl: 'objects/_objects.html',
					controller: 'ObjectsController'
				})
			$urlRouterProvider.otherwise('home');
		}])
