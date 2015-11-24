angular.module('myApp')
	.controller('UserLibraryController', [
		'$scope',
		'$stateParams',
		'Auth',
		function($scope, $stateParams, Auth){
			/* display user's saved objects */
			/* get current user from devise */
			Auth.currentUser().then(function(user){
				$scope.user = user;
				console.log(user.saved_objects);
				console.log(user.reviews);
				console.log(user);
			});
			// var user = users.users[$stateParams.id];
			// $scope.user = user;
			// console.log(user);

		}
	])
