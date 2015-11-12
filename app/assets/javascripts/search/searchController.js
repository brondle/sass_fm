angular.module('myApp')
	.controller('SearchController', [
	'$scope',
	'$http',
	'savedobjects',
	function($scope, $http, savedobjects){

	var pendingTask;

	$scope.savedobjects = savedobjects.savedobjects;


	$scope.addObject = function() {
		console.log("foo");
		savedobjects.create({
			title: $scope.details[0].title,
			name: $scope.details[0].name,
			thumb: $scope.details[0].thumb,
			discogs_id: $scope.details[0].id,
			type: $scope.details[0].type + "s",
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
		console.log
		$scope.details = output;
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
