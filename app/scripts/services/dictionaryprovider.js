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

    var words = [
      'Rails', 'AngularJS', 'Bootstrap', 'Ruby', 'JavaScript',
      'authentication', 'function', 'array', 'object', 'sublime',
      'github', 'agile', 'route', 'database', 'model', 'view',
       'controller', 'terminal', 'array', 'data', 'inheritance',
      'Heroku', 'scope',  'closure'
    ];

    // Private constructor
    function Dictionary() {
      this.getMissesAllowed = function () {
        return missesAllowed;
      };

      this.getRandomWord = function() {
        var index = Math.floor(Math.random() * words.length);
        return words[index];
      };

    }

    // Public APIs for configuration
    this.setMissesAllowed = function (nb) {
      missesAllowed = nb;
    };

    this.setMissesAllowed = function (words) {
      words = words;
    };

    // Method for instantiating
    this.$get = function () {
      return new Dictionary();
    };
  });
