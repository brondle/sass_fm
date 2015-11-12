angular.module('myApp')
	.controller('ObjectsController', [
		'$scope',
		'$stateParams',
		'objects',
		'$http',
		'$filter',
		function($scope, $stateParams, objects, $http, $filter) {
			/* check if object has been interacted with by users */
			var objectStored = $filter('filter')(objects.objects, {id: $stateParams.id, type: $stateParams.type});

			if( objectStored[0] != null ) {
			$scope.object = objectStored[0];
		} else {
			/* if not, render page using API info */
			$http.get("https://api.discogs.com/"+ $stateParams.type + "/" + $stateParams.id).success(function(response){
			$scope.object = response;
			console.log(response);
			});
		}
		$scope.getPartial = function() {
			if ($stateParams.type === ("releases" || "masters")) {
				return "partials/album.html"
			} else if ($stateParams.type === "artists") {
				return "partials/artist.html"
			} else {
				return "partials/label.html"
			}
		}
			$scope.addReview = function() {
				if($scope.body === '') { return; }
				$scope.object.reviews.push({
					body: $scope.body,
					author: 'user',
					upvotes: 0
				});
				$scope.body = '';
			}
		}])
