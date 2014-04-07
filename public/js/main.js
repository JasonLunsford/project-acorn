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
            templateUrl: 'partials/defaultMenuView.html',
            controller: 'DefaultController'
          },
          'contentView':{
            templateUrl: 'partials/defaultView.html',
            controller: 'DefaultController'
          }
        }
    })
    .state('reply', {
        url: '/reply',
        views: {
          'menuBarView':{
            templateUrl: 'partials/replyMenuView.html',
            controller: 'ReplyController'
          },
          'contentView':{
            templateUrl: 'partials/replyView.html',
            controller: 'ReplyController'
          }
        }
    })
    .state('compose', {
        url: '/compose',
        views: {
          'menuBarView':{
            templateUrl: 'partials/composeMenuView.html',
            controller: 'ComposeController'
          },
          'contentView':{
            templateUrl: 'partials/composeView.html',
            controller: 'ComposeController'
          }
        }
    })
    .state('about', {
        url: '/about',
        views: {
          'menuBarView':{
            templateUrl: 'partials/aboutMenuView.html',
            controller: 'AboutController'
          },
          'contentView':{
            templateUrl: 'partials/aboutView.html',
            controller: 'AboutController'
          }
        }
    })
    .state('settings', {
        url: '/settings',
        views: {
          'menuBarView':{
            templateUrl: 'partials/settingsMenuView.html',
            controller: 'SettingsController'
          },
          'contentView':{
            templateUrl: 'partials/settingsView.html',
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
