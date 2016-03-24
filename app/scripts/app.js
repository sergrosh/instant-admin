'use strict';

/**
 * @ngdoc overview
 * @name itemadminclientApp
 * @description
 * # itemadminclientApp
 *
 * Main module of the application.
 */
angular
  .module('itemadminclientApp', [
    'ngMessages',
    'ngResource',
    'ngRoute',
    'trNgGrid',
    "checklist-model",
    'config'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/venueList', {
        templateUrl: 'views/venue/venueList.html',
        controller: 'VenueListCtrl',
        controllerAs: 'venueList'
      })
      .when('/venueCreate', {
        templateUrl: 'views/venue/venueCreate.html',
        controller: 'VenueCreateCtrl',
        controllerAs: 'venueCreate'
      })
      .otherwise({
        redirectTo: '/'
      });
  })
  .constant('API_URL', 'http://localhost:8080/');
