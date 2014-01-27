// Menu behaviors
$(document).ready(function() {
  $(window).bind( 'hashchange', function(e) {
    var anchor = document.location.hash;
    console.log( anchor );

    if ( anchor == '#Home' ) {
      $( '#menu-container' ).fadeOut( 700 );
    } else {
      $( '#menu-container' ).fadeIn( 900 );
    }

    
  });
});