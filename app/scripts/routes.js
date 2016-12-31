/**
 * @ngdoc overview
 * @name superProductivity.routes
 * @description
 * # superProductivity.routes
 *
 * Routes module. All app states are defined here.
 */

(function() {
  'use strict';

  angular
    .module('superProductivity')
    .config(routerHelperProvider);

  /* @ngInject */
  function routerHelperProvider($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/');

    $stateProvider
      .state('daily-planner', {
        url: '/',
        template: '<daily-planner></daily-planner>'
      })
      .state('work-view', {
        url: '/work-view',
        template: '<work-view></work-view>'
      })
    /* STATES-NEEDLE - DO NOT REMOVE THIS */;
  }
})();