$(window).load(function() {
	
    setTimeout(function() {
      $('.spinner').fadeOut("slow");
          
        setTimeout(function() {
        $('#prelaoder').fadeOut("slow"); 
        
            setTimeout(function() {
                $('.content-block').addClass('animated fadeInDown').fadeIn("slow");
                 //$('.l-header-new').fadeIn('slow');
                 init();
                 
            }, 700);
        }, 700);	  
    }, 700);	

});