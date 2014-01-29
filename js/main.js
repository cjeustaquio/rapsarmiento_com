// Menu behaviors
// $(document).ready(function() {
//   $(window).bind( 'hashchange', function(e) {
//     var anchor = document.location.hash;
//     console.log( anchor );

//     if ( anchor == '#Home' ) {
//       $( '#menu-container' ).fadeOut( 700 );
//     } else {
//       $( '#menu-container' ).fadeIn( 900 );
//     }

    
//   });
// });

  $(document).ready(function() {
        $.fn.fullpage({
          anchors: ['Home', 'Portfolio', 'About', 'Press', 'Contact'],
          menu: '#menu-container',
          navigation: false,
          navigationPosition: 'right',
          navigationTooltips: ['Home', 'Portfolio', 'About', 'Press', 'Contact'],
          slidesNavigation: false,
          slidesNavPosition: 'bottom',
          scrollOverflow: true,

          //events
          onLeave: function( index, direction ){
            if( index == '1' && direction == 'down' ){
              $( '#menu-container' ).css({
                opacity          : 1,
                WebkitTransition : 'opacity 0.9s ease-in-out',
                MozTransition    : 'opacity 0.9s ease-in-out',
                MsTransition     : 'opacity 0.9s ease-in-out',
                OTransition      : 'opacity 0.9s ease-in-out',
                transition       : 'opacity 0.9s ease-in-out'
              })
            }
            else if( index == '2' && direction == 'up' ){
              $( '#menu-container' ).css({
                opacity          : 0,
                WebkitTransition : 'opacity 0.7s ease-in-out',
                MozTransition    : 'opacity 0.7s ease-in-out',
                MsTransition     : 'opacity 0.7s ease-in-out',
                OTransition      : 'opacity 0.7s ease-in-out',
                transition       : 'opacity 0.7s ease-in-out'
              })
            }
          }
        });
      });