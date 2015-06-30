angular.module('pure360.weather.services', [])

.factory('WeatherService', ['$http', function($http){

	var getWeather = function() {

		return $http.get('http://localhost:3000/api/overview.json')
			.success(function(data) {
				return data;
			})
			.error(function(err) {
				return err;
			});
	};

	return {
		getWeather: getWeather
	};
}]);
