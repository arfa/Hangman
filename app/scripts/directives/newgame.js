'use strict';

/**
 * @ngdoc directive
 * @name hangmanApp.directive:newGame
 * @description
 * # newGame
 */
angular.module('hangmanApp')
  .directive('newGame', function () {
    return {
      restrict: 'A',
      link: function postLink(scope, element, attrs) {
      		angular.element(document).on('onkeyup', function(e) {
		    	if (e.keyCode === 32 || e.keyCode === 13) {
		    		angular.element(element).triggerHandler('click');
		    	}
		    });
		}
    };
  });
