
$(window).scroll(function() {

    if ($(this).scrollTop() > 450) {
        $( ".l-header-new #background" ).fadeIn();
        $( ".l-header-new #logoheader" ).fadeIn();
    } else {
        $( ".l-header-new #background" ).fadeOut();
        $( ".l-header-new #logoheader" ).fadeOut();

    }
});