
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
      $("#screenSizeMonitor").text($(window).width()+"px");
      $(window).resize(function() {
         $("#screenSizeMonitor").text($(window).width()+"px");
         if ( checkForDesktop() ) {
            //$mainContent.removeClass("container-fluid").addClass("container");
         } else {
            //$mainContent.removeClass("container").addClass("container-fluid");
         }
      });


      // Simple function to keep track of the content flag state within the body:after pseudo element
      function checkForDesktop() {
         var windowState = window.getComputedStyle(document.body,':after').getPropertyValue('content');
         return ( windowState.indexOf("desktop") != -1 ) ? true : false
      }

   })(jQuery);