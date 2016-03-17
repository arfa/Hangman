'use strict';

/**
 * @ngdoc service
 * @name hangmanApp.dictionaryProvider
 * @description
 * # dictionaryProvider
 * Provider in the hangmanApp.
 */
angular.module('hangmanApp')
  .provider('dictionaryProvider', function () {

    // Private variables
    var missesAllowed = 7;

    var words = [];

    // Private constructor
    function Dictionary() {
      this.getMissesAllowed = function () {
        return missesAllowed;
      };

      this.getRandomWord = function() {
        var index = Math.floor(Math.random() * words.length);
        return words[index];
      };

      this.setWords = function (newwords) {
        words = newwords.data;
      };

    }

    // Public APIs for configuration
    this.setMissesAllowed = function (nb) {
      missesAllowed = nb;
    };

    // Method for instantiating
    this.$get = function () {
      return new Dictionary();
    };
  });
