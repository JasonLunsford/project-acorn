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
    .state('messageList', {
        views: {
          'menuBarView':{ templateUrl: 'partials/mailBoxMenuView' },
          'foreGroundView:':{ templateUrl: 'partials/messageListView' },
          'backGroundView':{ templateUrl: 'partials/messageView' }
        },
        url: '/',
        controller: 'HomeController'
    })
    .state('settings', {
        views: {
          'menuBarView':{ templateUrl: 'partials/mailBoxMenuView' },
          'foreGroundView:':{ templateUrl: 'partials/messageListView' },
          'backGroundView':{ templateUrl: 'partials/messageView' }
        },
        url: '/settings',
        controller: 'SettingsController'
    })
    .state('404', {
        url: '{path:.*}',
        templateUrl: 'partials/404'
    });

  $locationProvider.html5Mode(true);

});
