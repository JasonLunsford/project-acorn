
// Will need to replace with Angular directive

"use strict";

(function($) {

	// Non-Control Elements (jQuery element references)


   // Common Variables
   var windowState;

   /* CSS Settings (etc)
   ---------------------------------------- */



   /* End Settings -------------------------*/

   // Check flag state on load, convert containers from fluid to fixed on truthy return
   if ( checkForDesktop() ) {
      //$mainContent.removeClass("container-fluid").addClass("container");
   }

   /* As window resizes check for truthy return from checkForDesktop. if/when it happens, convert
      container from fluid to fixed */
   $(window).resize(function() {
      if ( checkForDesktop() ) {
         //$mainContent.removeClass("container-fluid").addClass("container");
      } else {
         //$mainContent.removeClass("container").addClass("container-fluid");
      }
   });


   // Simple function to keep track of the content flag state within the body:after pseudo element
   // bug in Chrome, may not work as expected - TEST (discovered 03.21.2014)
   function checkForDesktop() {
      var windowState = window.getComputedStyle(document.body,':after').getPropertyValue('content');
      return ( windowState.indexOf("desktop") != -1 ) ? true : false
   }

})(jQuery);