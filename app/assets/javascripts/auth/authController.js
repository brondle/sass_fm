angular.module('myApp')
	.controller('AuthController', [
	'$scope',
	'$state',
	'Auth',
		function($scope, $state, Auth){
			$scope.login = function() {
				Auth.login($scope.user).then(function() {
					$state.go('home');
				});
			};

			$scope.register = function() {
				// console.log("foo");
				Auth.register($scope.user).then(function() {
					$state.go('home');
				});
			};

		}]);
