
$(window).scroll(function() {

    if ($(this).scrollTop() > 400) {
        $( ".l-header-new #background" ).fadeIn();
        $( ".l-header-new #logo" ).fadeIn();
    } else {
        $( ".l-header-new #background" ).fadeOut();
        $( ".l-header-new #logo" ).fadeOut();

    }
});