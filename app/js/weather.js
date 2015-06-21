angular.module('pure360.weather', [
  'ngRoute',

  'pure360.weather.controllers'
])

  .config(function($routeProvider) {
    $routeProvider.when('/overview', {
      controller: 'OverviewCtrl',
      templateUrl: '/partial/overview/index.html'
    })
    .otherwise('/overview');
  });
