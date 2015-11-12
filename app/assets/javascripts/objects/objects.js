angular.module('myApp')
	.factory('objects', ['$http', function($http){
		/* store of favorite objects */
		var a = {
			objects: []
		};
		a.getAll = function() {
			return $http.get('/objects.json').success(function(data){
				angular.copy(data, a.posts);
			})
		}
		return a;
	}])
