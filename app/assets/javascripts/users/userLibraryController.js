angular.module('myApp')
	.factory('Library', [
		'$resource',
		'$stateParams',
		function($resource, $stateParams){
			/*gets all saved objects */
			console.log($stateParams.id);
		var library =	$resource('/users/' + $stateParams.id + ' /saved_objects', {
			update: {
				method: 'PUT'
			}
		});
		return library;
		}
	])
	.controller('UserLibraryController', [
		'$scope',
		'$stateParams',
		'Auth',
		'Library',
		function($scope, $stateParams, Auth, Library){
			/* display user's saved objects */
			/* get current user from devise */
			Auth.currentUser().then(function(user){
				$scope.user = user;
				/*get library from factory */
			var library = Library.query(function() {
				console.log(library);
			});
			});
			// var user = users.users[$stateParams.id];
			// $scope.user = user;
			// console.log(user);

		}
	])
