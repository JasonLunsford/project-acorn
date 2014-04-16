'use strict';

angular.module('projectAcorn.directives', []).
	directive('mobileSearch', [function() {
		return {
			restrict: 'EA',
			replace: false,
			scope: true,
			link: function(scope, element, attrs) {
				var menuBarHome = document.getElementById('menuBarHome');
				var menuBarMessage = document.getElementById('menuBarMessage');
				var menuBarSearch = document.getElementById('menuBarSearch');

				element.bind('click', function() {
					if ( attrs.mobileSearch == 'search') {
						menuBarHome.className = "hidden";
						menuBarSearch.className = " ";
					} else if ( attrs.mobileSearch == "exit" ) {
						menuBarHome.className = " ";
						menuBarSearch.className = "hidden";
					} else {
						console.log("Did you forget a parameter?")
					}
				});
			}
		}
	}]).
	directive('contextMenu', [function() {
		return {
			restrict: 'EA',
			replace: false,
			scope: true,
			link: function(scope, element, attrs) {
				var menuBarDropMenu = document.getElementById('menuBarContextDropMenu');

				element.bind('click', function() {

				});
			}
		}
	}]);