'use strict';

angular.module('projectAcorn.controllers', []).
	controller('HomeController', ['$scope', function ($scope) {

	}]).
	controller('DefaultController', ['$scope', function ($scope) {
		$scope.contextMenu = {
			"Settings":"/settings",
			"About":"/about"
		}
	}]).
	controller('ReplyController', ['$scope', function ($scope) {

	}]).
	controller('ComposeController', ['$scope', function ($scope) {

	}]).
	controller('AboutController', ['$scope', function ($scope) {

	}]).
	controller('SettingsController', ['$scope', function ($scope) {

	}]);