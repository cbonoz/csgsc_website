'use strict';

/**
 * @ngdoc function
 * @name csgscApp.controller:CorporateSupporterFAQCtrl
 * @description
 * # CorporateSupporterFAQCtrl
 * Controller of the csgscApp
 */
angular.module('csgscApp')
  .controller('CorporateSupporterFAQCtrl', function ($scope, $location, $anchorScroll) /* RCC - for FAQ bookmark/anchor */ {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    /* RCC - for FAQ bookmark/anchor */
    $scope.scrollTo = function(id) {
      $location.hash(id);
      $anchorScroll();
    };
  });
