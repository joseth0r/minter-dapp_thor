$( document ).ready( function() {
  var button = $('.button');
  var slider = $('.slider');
  
  button.on('click', function(e) {
    
    if ( slider.hasClass('opened') ) {
      button.text('Configure your Tesla');
      slider.toggleClass('opened');
    } else {
      button.text('Close');
      slider.toggleClass('opened');
    }
    
  });
  
});