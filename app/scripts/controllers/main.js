'use strict';

/**
 * @ngdoc function
 * @name hangmanApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the hangmanApp
 */
angular.module('hangmanApp')
    .controller('MainCtrl', function(lettersFilter, dictionaryProvider, _) {

        this.missesAllowed = dictionaryProvider.getMissesAllowed();

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
            this.secretWord = lettersFilter(dictionaryProvider.getRandomWord());
            this.numMisses = 0;
            this.win = false;
            this.lost = false;
        };

        this.reset();

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

        this.letters = lettersFilter("abcdefghijklmnopqrstuvwxyz");

    });
