'use strict';

angular.module('myApp', ['ui.router', 'templates', 'Devise'])
	.config([
		'$stateProvider',
		'$urlRouterProvider',
		function($stateProvider, $urlRouterProvider) {
			$stateProvider
				.state('home', {
					url: '/home',
					templateUrl: 'search/_home.html',
					controller: 'SearchController'
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
				.state('login', {
					url: '/login',
					templateUrl: 'auth/_login.html',
					controller: 'AuthController',
					onEnter: ['$state', 'Auth', function($state, Auth) {
						Auth.currentUser().then(function (){
							$state.go('home');
						})
					}]
				})
				.state('register', {
					url: '/register',
					templateUrl: 'auth/_register.html',
					controller: 'AuthController',
					onEnter: ['$state', 'Auth', function($state, Auth) {
						Auth.currentUser().then(function (){
							$state.go('home');
						})
					}]
				})
			$urlRouterProvider.otherwise('home');
		}])
