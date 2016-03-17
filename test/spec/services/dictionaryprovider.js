'use strict';

describe('Service: dictionaryProvider', function () {

  // instantiate service
  var dictionaryProvider,
    init = function () {
      inject(function (_dictionaryProvider_) {
        dictionaryProvider = _dictionaryProvider_;
      });
    };

  // load the service's module
  beforeEach(module('hangmanApp'));

  it('should do something', function () {
    init();

    expect(!!dictionaryProvider).toBe(true);
  });

  it('should be configurable', function () {
    module(function (dictionaryProviderProvider) {
      dictionaryProviderProvider.setSalutation('Lorem ipsum');
    });

    init();

    expect(dictionaryProvider.greet()).toEqual('Lorem ipsum');
  });

});
