'use strict';

/**
 * @ngdoc overview
 * @name hangmanApp
 * @description
 * # hangmanApp
 *
 * Main module of the application.
 */
angular
  .module('hangmanApp', [
    'ngAnimate',
    'ngRoute',
    'underscore'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
