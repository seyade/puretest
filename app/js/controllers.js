angular.module('pure360.weather.controllers', [])

  .controller('OverviewCtrl', function($scope, WeatherService) {
    $scope.path = 'app/js/controllers.js';

    WeatherService.getWeather().success(function(data) {
    	console.log('data: ', data);

    	$scope.weathers = data.days;
    })
    .error(function(err) {
    	console.log('err: ', err);
    });
  });
