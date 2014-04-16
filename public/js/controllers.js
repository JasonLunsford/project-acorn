'use strict';

angular.module('projectAcorn.controllers', []).
	controller('HomeController', ['$scope', function ($scope) {

	}]).
	controller('DefaultController', ['$scope', function ($scope) {
		var selectAll = true;
		var selectOption;

		if ( selectAll ) { selectOption = "Select All"; } else { selectOption = "Unselect All"; }

		$scope.dropMenu = [
			selectOption,
			"Mark Unread",
			"Move to Inbox",
			"Move to Junk",
			"Trash",
			"Delete"
		];
		$scope.dropMenuDefault = [
			{
				"title":"Settings",
				"url":"/settings"
			},
			{
				"title":"About",
				"url":"/about"
			}
		];
	}]).
	controller('ReplyController', ['$scope', function ($scope) {

	}]).
	controller('ComposeController', ['$scope', function ($scope) {

	}]).
	controller('AboutController', ['$scope', function ($scope) {

	}]).
	controller('SettingsController', ['$scope', function ($scope) {

	}]);