'use strict';

describe('Filter: letters', function () {

  // load the filter's module
  beforeEach(module('hangmanApp'));

  // initialize a new instance of the filter before each test
  var letters;
  beforeEach(inject(function ($filter) {
    letters = $filter('letters');
  }));

  it('should return the input prefixed with "letters filter:"', function () {
    var text = 'angularjs';
    expect(letters(text)).toBe('letters filter: ' + text);
  });

});
