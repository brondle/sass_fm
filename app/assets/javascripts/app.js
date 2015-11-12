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
					// 	savedObjectPromise: ['saved_objects', function(saved_objects){
					// 		return saved_objects.getAll();
					// 	}]
					// }
				})
			/* dynamically created state depending on type of object selected (artist, album, label, etc.) */
				.state('object', {
					url: '/{type}/{id}',
					templateUrl: 'saved_objects/_objects.html',
					controller: 'SavedObjectsController'
				})
			$urlRouterProvider.otherwise('home');
		}])
