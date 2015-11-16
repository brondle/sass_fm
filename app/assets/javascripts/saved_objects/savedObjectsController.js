angular.module('myApp')
	.factory('savedObjects', [
		'$http',
		function($http){
		/* store of favorite objects */
		var o = {
			savedObjects: []
		};
		o.getAll = function() {
			return $http.get('/saved_objects.json').success(function(data){
				angular.copy(data, o.savedObjects);
			});
		}
		o.create = function(object) {
			return $http.post('/saved_objects.json', object).success(function(data) {
				console.log(data);
				o.savedObjects.push(data);
			});
		};
		return o;
	}])

	.controller('SavedObjectsController', [
		'$scope',
		'$stateParams',
		'savedObjects',
		'$http',
		'$filter',
		function($scope, $stateParams, savedObjects, $http, $filter) {
			/* check if object has been interacted with by users */
			var objectStored = $filter('filter')(savedObjects.savedObjects, {id: $stateParams.id, type: $stateParams.type});

			if( objectStored[0] != null ) {
			$scope.object = objectStored[0];
		} else {
			/* if not, render page using API info */
			$http.get("https://api.discogs.com/"+ $stateParams.type + "/" + $stateParams.id).success(function(response){
			$scope.object = response;
			});
		}
		$scope.getPartial = function() {
			console.log($stateParams.type)
			if ($stateParams.type === "releases" || $stateParams.type === "masters") {
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
