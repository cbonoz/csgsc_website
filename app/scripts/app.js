'use strict';

/**
 * @ngdoc overview
 * @name csgscApp
 * @description
 * # csgscApp
 *
 * Main module of the application.
 */
angular
  .module('csgscApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/home.html',
        controller: 'HomeCtrl',
        controllerAs: 'home'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .when('/resources', {
        templateUrl: 'views/resources.html',
        controller: 'ResourcesCtrl',
        controllerAs: 'resources'
      })
      .when('/lounge', {
        templateUrl: 'views/lounge.html',
        controller: 'LoungeCtrl',
        controllerAs: 'lounge'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .when('/teatime', {
        templateUrl: 'views/teatime.html',
        controller: 'TeatimeCtrl',
        controllerAs: 'teatime'
      })
      .when('/corporatesupporterfaq', {
        templateUrl: 'views/corporatesupporterfaq.html',
        controller: 'CorporateSupporterFAQCtrl',
        controllerAs: 'corporatesupporterfaq'
      })
      .when('/contact', {
        templateUrl: 'views/contact.html',
        controller: 'ContactCtrl',
        controllerAs: 'contact'
      })
      .when('/members', {
        templateUrl: 'views/members.html',
        controller: 'MembersCtrl',
        controllerAs: 'members'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
