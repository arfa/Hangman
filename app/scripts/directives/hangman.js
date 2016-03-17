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
      template: '<div></div>',
      restrict: 'E',
      link: function postLink(scope, element, attrs) {
        element.text('this is the hangman directive');
      }
    };
  });
