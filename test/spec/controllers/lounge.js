'use strict';

describe('Controller: LoungeCtrl', function () {

  // load the controller's module
  beforeEach(module('csgscApp'));

  var LoungeCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    LoungeCtrl = $controller('LoungeCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(LoungeCtrl.awesomeThings.length).toBe(3);
  });
});
