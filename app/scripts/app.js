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
  .config(function ($routeProvider, $locationProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .otherwise({
        redirectTo: '/'
      });
      
      // use the HTML5 History API
      $locationProvider.html5Mode(true);
  });
