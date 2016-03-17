'use strict';

/**
 * @ngdoc filter
 * @name hangmanApp.filter:letters
 * @function
 * @description
 * # letters
 * Filter in the hangmanApp.
 */
angular.module('hangmanApp')
  .filter('letters', function (_) {
  	return function (word) {
  		return _.map(word.split(''), function(character) {
	      return { name: character, chosen: false };
	    });
  	};
  });
