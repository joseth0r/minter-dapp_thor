
$(window).scroll(function() {

    if ($(this).scrollTop() > 450) {
        $( ".l-header-new #background" ).fadeIn(500);
        $( ".l-header-new #logoheader" ).fadeIn(500);
    } else {
        $( ".l-header-new #background" ).fadeOut(500);
        $( ".l-header-new #logoheader" ).fadeOut(500);

    }
});