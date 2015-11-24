angular.module('myApp')
	.factory('Library', [
		'$resource',
		function($resource){
			/*gets all saved objects */
		return	$resource('/saved_objects/:user_id');
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
				console.log(Library.query());
			});
			// var user = users.users[$stateParams.id];
			// $scope.user = user;
			// console.log(user);

		}
	])
