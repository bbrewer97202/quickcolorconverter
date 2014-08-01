var app = angular.module('app', []);

app.controller('colorConverter', ['$scope', 'pusherColorFactory', function($scope, pusherColorFactory) {

	$scope.color = {
		src: '',
		conversions: {}
	};

	$scope.onKeyUp = function() {
		if (pusherColorFactory.isValidColor($scope.color.src)) {
			$scope.color.conversions = pusherColorFactory.convert($scope.color.src);
		} else {
			$scope.color.conversions = {};
		}
	}

}]);

app.factory('pusherColorFactory', function() {
	return {
		isValidColor: function(color) {
			try {
				return (typeof(pusher.color(color)) === 'object') ? true : false;
			} catch(e) {
				return false;
			}
		},
		convert: function(value) {
			var color = pusher.color(value);
			return {
				src: value,
				rgba: color.html(),
				hex6: color.hex6(),
				hex3: color.hex3(),
				keyword: color.html('keyword')
			}
		}
	}
});