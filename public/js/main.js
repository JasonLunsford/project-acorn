/*
   Project Acorn

   Author: Jason Lunsford
   Version: 1.0
   
   main.js

   note: will need to convert most / all of this code to an Angular directive

*/

"use strict";

(function($) {

	// Element references


   // Common Variables
   var windowState;

   // CSS Settings (for example)

   
   $(window).resize(function() {
      // check breakpoint flag & take action
   });

   function checkDevice() {
      var windowState = window.getComputedStyle(document.body,':before').getPropertyValue('content');
      var devices = ["mobile", "tablet", "desktop", "widescreen"];

      for (var i = 0; i < devices.length; i++) {
         if ( windowState.indexOf(devices[i]) != -1 ) { return devices[i]; }
      }
   }

})(jQuery);