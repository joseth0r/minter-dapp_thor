$(window).load(function() {
	
    setTimeout(function() {
        document.body.classList.add('no-scroll');
      $('.spinner').fadeOut("slow");
      
    
        setTimeout(function() {
        $('#prelaoder').fadeOut("slow"); 
        
            setTimeout(function() {
                $('.content-block').addClass('animated fadeInDown').fadeIn("slow");
                 //$('.l-header-new').fadeIn('slow');
                 document.body.classList.remove('no-scroll');
                 init();
                 
            }, 700);
        }, 700);	  
    }, 700);	

});