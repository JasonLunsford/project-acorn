'use strict';

// Declare app level module which depends on filters, and services

angular.module('projectAcorn', [
	'ui.router',
	'ngSanitize',
	'projectAcorn.controllers',
	'projectAcorn.services',
	'projectAcorn.directives',
  'projectAcorn.filters'
]).

config(function ($urlRouterProvider, $locationProvider, $stateProvider) {

    // let's normalize the capitalization if the user went all cap/some cap on us
  $urlRouterProvider
    .rule(function ($injector, $location) {
      var path = $location.path();
      var normalized = path.toLowerCase();

      if (path != normalized) {
        $location.replace().path(normalized);
      }
    })
    .otherwise("/404");

  $stateProvider
    .state('default', {
        url: '/',
        views: {
          'menuBarView':{
            templateUrl: 'partials/defaultMenuView',
            controller: 'DefaultMenuBarController'
          },
          'contentView:':{
            templateUrl: 'partials/defaultView',
            controller: 'DefaultController'
          }
        }
    })
    .state('settings', {
        url: '/settings',
        views: {
          'menuBarView':{
            templateUrl: 'partials/settingsMenuView',
            controller: 'SettingsMenuBarController'
          },
          'contentView:':{
            templateUrl: 'partials/settingsView',
            controller: 'SettingsController'
          }
        }
    })
    .state('404', {
        url: '{path:.*}',
        templateUrl: 'partials/404'
    });

  $locationProvider.html5Mode(true);

});
