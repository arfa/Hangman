'use strict';

/**
 * @ngdoc directive
 * @name hangmanApp.directive:hangman
 * @description
 * # hangman
 */
angular.module('hangmanApp')
  .directive('hangman', function () {
    return {
      templateUrl: 'scripts/directives/hangman.html',
      restrict: 'E',
      scope: {
      	word: '=',
      	missesAllowed: '=',
      	getRandomWord: '&'
      },
      controllerAs: 'hangman',
      bindToController: true,
      controller: function (lettersFilter, _) {
		console.log(this.word.value);

        this.revealSecret = function() {
            _.each(this.secretWord, function(letter) {
                letter.chosen = true;
            });
        };

        this.checkForEndOfGame = function() {
            this.win = _.reduce(this.secretWord, function(acc, letter) {
                return acc && letter.chosen;
            }, true);

            if (!this.win && this.numMisses === this.missesAllowed) {
                this.lost = true;
                this.revealSecret();
            }
        };

        this.reset = function() {
            _.each(this.letters, function(letter) {
                letter.chosen = false;
            });
            this.secretWord = lettersFilter(this.word.value);
            this.numMisses = 0;
            this.win = false;
            this.lost = false;
        };

        this.reset();

        this.newGame = function() {
        	this.getRandomWord();
            this.reset();
        };

        this.try = function(guess) {
            guess.chosen = true;
            var found = false;
            _.each(this.secretWord,
                function(letter) {
                    if (guess.name.toUpperCase() === letter.name.toUpperCase()) {
                        letter.chosen = true;
                        found = true;
                    }
                });
            if (!found) {
                this.numMisses++;
            }
            this.checkForEndOfGame();
        };

        this.letters = lettersFilter('abcdefghijklmnopqrstuvwxyz');
      },
      link: function postLink(scope, element, attrs) {
        console.log(scope);
      }
    };
  });
