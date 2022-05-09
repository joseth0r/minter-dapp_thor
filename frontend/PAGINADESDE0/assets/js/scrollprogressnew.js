$(function() {
	
	$(window).scroll(function() {
		var scroll = ($(window).scrollTop() / $(window).innerHeight()) * 100;
		if ( scroll >= 10 ) {
			$('.scroll-top-button, .header-scroll').css({'opacity': '1', 'pointer-events': 'auto'});
		} else {
			$('.scroll-top-button, .header-scroll').stop(true,true).css({'opacity': '0', 'pointer-events': 'none'});
		}
		// scroll percentage
		var s = $(window).scrollTop(),
				d = $(document).height(),
				win = $(window).height();
		var scrollPercent = (s / (d - win)) * 100;
		console.log('scroll perc: ', scrollPercent);
		var val = parseInt(scrollPercent);
		var $circle = $('.go circle');
		if (isNaN(val)) {
			val = 100;
		} else {
			var r = $circle.attr('r');
			var win = Math.PI*(r*2);
			if (val < 0) { val = 0; }
			if (val > 100) { val = 100; }
			var pct = ((100-val)/100)*win;
			$circle.css('stroke-dashoffset', pct);
			// console.log( pct );
			$('.header-scroll').css('right', pct + '%');
		}
	});
	$(document).on('click', '.scroll-top-button', function () {
		$("html, body").animate({scrollTop: 0}, 500);
	});
	
});