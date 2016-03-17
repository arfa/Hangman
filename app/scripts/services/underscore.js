'use strict';

/**
 * @ngdoc module
 * @name underscore._
 * @description
 * # _
 * Factory in the underscore.
 */
var underscore = angular.module('underscore', []);
underscore.factory('_', function() {
    return window._; //Underscore must already be loaded on the page
  });
