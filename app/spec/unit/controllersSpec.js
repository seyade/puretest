var $scope
  , $controller;

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

    it('should set the correct path', function() {
      var path = 'app/js/controllers.js';
      expect($scope.path).toEqual(path);
    });
  });
});
