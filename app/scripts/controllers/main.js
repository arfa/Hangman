'use strict';

/**
 * @ngdoc function
 * @name hangmanApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the hangmanApp
 */
angular.module('hangmanApp')
    .controller('MainCtrl', function(dictionaryProvider, words) {

    	dictionaryProvider.setWords(words);

        this.missesAllowed = dictionaryProvider.getMissesAllowed();

        this.word = {value: dictionaryProvider.getRandomWord()};

        this.getRandomWord = function () {
        	this.word.value = dictionaryProvider.getRandomWord(); 
        	console.log(this.word);
        }

    });
