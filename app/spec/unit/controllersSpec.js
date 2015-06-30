/*'use strict';

var $scope,
    $controller;

describe('Weather controllers', function() {
  beforeEach(module('pure360.weather.controllers'));

  describe('OverviewCtrl', function() {
    beforeEach(inject(function($injector) {
      $scope = $injector.get('$rootScope').$new();
      $controller = $injector.get('$controller');
    }));

    beforeEach(function() {
      $controller('OverviewCtrl', {
        $scope: $scope
      });
    });

  });
});*/

'use strict';

describe('Weather Controller', function() {

    var scope, controller, WeatherService;

    beforeEach(module('pure360.weather.controllers'));

    beforeEach(function() {
        
        var fakeServices = {};

        module('pure360.weather', function($provide) {
            $provide.value('WeatherService', fakeServices);
        });

        inject(function($q) {
            fakeServices.days = [
                { day: 'Monday', temperature: '28C' },
                { day: 'Tuesday', temperature: '31C' },
                { day: 'Wednesday', temperature: '34C' },
                { day: 'Thursday', temperature: '32C' },
                { day: 'Friday', temperature: '30C' },
                { day: 'Saturday', temperature: '31C' },
                { day: 'Sunday', temperature: '28C' }
            ];

            fakeServices.getWeather = function() {
                var defer = $q.defer();

                defer.resolve(this.days);

                return defer.promise;
            };
        });
    });

    describe('OverviewCtrl', function() {

        beforeEach(inject(function($rootScope, $controller, _WeatherService_) {
            
            scope = $rootScope.$new();
            WeatherService = _WeatherService_;

            controller = $controller('OverviewCtrl', {
                $scope: scope,
                WeatherService: WeatherService
            });

            scope.$digest();
        }));

        it('should have 7 days of weather', function() {
            
            expect(scope.weathers).toEqual([
                { day: 'Monday', temperature: '28C' },
                { day: 'Tuesday', temperature: '31C' },
                { day: 'Wednesday', temperature: '34C' },
                { day: 'Thursday', temperature: '32C' },
                { day: 'Friday', temperature: '30C' },
                { day: 'Saturday', temperature: '31C' },
                { day: 'Sunday', temperature: '28C' }
            ]);
        });

        it('should display the 1st day as Monday with it temperature as 28C', function() {
            
            expect(scope.weathers[0].day).toEqual('Monday');
            expect(scope.weathers[0].temperature).toEqual('28C');
        });
        
    });
    
});
