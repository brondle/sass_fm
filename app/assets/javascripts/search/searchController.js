angular.module('myApp')
	.controller('SearchController', [
	'$scope',
	'$http',
	'savedObjects',
	function($scope, $http, savedObjects){

	var pendingTask;

	$scope.savedobjects = savedObjects.savedObjects;

	function capitalize(s)
		{
		    return s[0].toUpperCase() + s.slice(1);
		}

	$scope.addObject = function() {
		result = $scope.details[0];
		console.log(result.type);
		savedObjects.create({
			title: result.title,
			artist: result.artist,
			thumb: result.thumb,
			discogs_id: result.id,
			object_type: result.type,
			reviews: [
				{author: 'Bront', body: 'Whatever', upvotes: 0},
				{author: 'Brandt', body: 'I love it', upvotes: 0}
			]
		});
	};

	$scope.change = function(){
		if(pendingTask){
			clearTimeout(pendingTask);
		}
		pendingTask = setTimeout(fetch, 800);
	};

	function fetch() {
		$http.get("https://api.discogs.com/database/search?q=" + $scope.search + "&key=sgPQPSrsXwtszVQohmLS&secret=AkCvXlTSVACjBxuLHSKQteoeuFQFvZVY").success(function(response){
		var output = response.results;
		$scope.details = output;
		console.log(output[0].type);
		$scope.dataType = output[0].type;
		var related = output.slice(1, (output.length - 1));
		$scope.results = related;
		});

		/* eventually use Grunt to store secret & key */
	}

	$scope.update = function(result) {
		$scope.search = result.title;
		$scope.change();
	};

	$scope.select = function() {
		this.setSelectionRange(0, this.value.length);
	}
	}]);
