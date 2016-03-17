'use strict';

describe('Directive: newGame', function () {

  // load the directive's module
  beforeEach(module('hangmanApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<new-game></new-game>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the newGame directive');
  }));
});
