'use strict';

describe('Weather service', function() {
    
    beforeEach(module('pure360.weather.services'));

    var scope, httpBackend, WeatherService, results;

    beforeEach(inject(function(_WeatherService_, $httpBackend) {
        
        var mockResponse = [
            { day: 'Monday' },
            { day: 'Tuesday' },
            { day: 'Wednesday' },
            { day: 'Thursday' },
            { day: 'Friday' },
            { day: 'Saturday' },
            { day: 'Sunday' }
        ];

        httpBackend = $httpBackend;
        WeatherService = _WeatherService_;

        httpBackend.when('GET', 'http://localhost:3000/api/overview.json').respond(mockResponse);
    }));

    it('should contain 7 weather items, which are days', function() {

        WeatherService.getWeather().then(function(data) {
            results = data;
        });

        httpBackend.flush();

        expect(results.data.length).toEqual(7);
    });

});