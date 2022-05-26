/*==================== SHOW MENU MOBILE ====================*/
(function () {
	$('.hamburger-menu').on('click', function() {
		$('.bar').toggleClass('animate');
    var mobileNav = $('.mobile-nav');
    mobileNav.toggleClass('hide show');

    
    document.body.classList.toggle('no-scroll')
	})
})();
/*==================== close menu mobile when click ====================*/

(function () {
	$('.mobile-nav-link').on('click', function() {
    $('.bar').toggleClass('animate');
    var mobileNav = $('.mobile-nav');
    mobileNav.toggleClass('hide show');

    document.body.classList.remove('no-scroll')

	})
})();


/*==================== pop up how to mint ====================*/


$(".howtomint").on('click', function() {
  $(".popup-modal").addClass('is--visible');
  document.body.classList.add('no-scroll');
}); 

$(".popup-modal__close").click(function(){
  $(".popup-modal").removeClass('is--visible');
  document.body.classList.remove('no-scroll');
});

/*falta meter clickar en body, salirse del popup */
/*
$("body").click(function(){
  var target = $(".popup-modal");
  if(!target.is(".is--visible")){
    $(".popup-modal").removeClass('is--visible');
    document.body.classList.remove('no-scroll')
  }

});*/



/*
$("body").click(function(){ 
  //console.log('hola');
  //var popuptest = $('.popup-modal');
  var popuptest = document.getElementById('popuphowtomint');
  console.log(popuptest.classList.contains('is--visible')); // output: true
  if(popuptest.classList.contains('is--visible')  ){
    console.log('nahhhh');
    $(".popup-modal").removeClass('is--visible');
    document.body.classList.remove('no-scroll')}

});*/




/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
const sections = document.querySelectorAll("section[id]");

function scrollActive() {
  const scrollY = window.pageYOffset;

  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 50;
    sectionId = current.getAttribute("id");

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document
        .querySelector(".nav_list a[href*=" + sectionId + "]")
        .classList.remove("text-white/70");
          } else {
      document
        .querySelector(".nav_list a[href*=" + sectionId + "]")
        .classList.add("text-white/70");
    }
  });
}
window.addEventListener("scroll", scrollActive);
/*==================== TESLA SLIDER ====================*/


$( document ).ready( function() {
  var button = $('.tesla-bottom button');
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


/*==================== SCROLL REVEAL ANIMATION ====================*/
const sr = ScrollReveal({
  distance: "20px",
  duration: 1800,
  reset: false
});

sr.reveal(
  `.reveal`,
  {
    //desde arriba
    origin: "top",
    interval: 100
  }
);

sr.reveal(`.revealleft`, {
  //desde izq
  origin: "left"
});

sr.reveal(`.revealright`, {
  //desde derecha
  origin: "right"
});




/*==================== FAQ ====================*/
const items = document.querySelectorAll(".accordion button");

function toggleAccordion() {
  const itemToggle = this.getAttribute('aria-expanded');
  
  for (i = 0; i < items.length; i++) {
    items[i].setAttribute('aria-expanded', 'false');
  }
  
  if (itemToggle == 'false') {
    this.setAttribute('aria-expanded', 'true');
  }
}

items.forEach(item => item.addEventListener('click', toggleAccordion));




/*==================== SCROLL CIRCLE PROGRESS ====================*/



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
		//console.log('scroll perc: ', scrollPercent);
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


/*==================== MAIN SCREEN ====================*/

(function () {
  $(window).scroll(function () { 
      var Num = $(window).scrollTop() / 500;
      var Num2 = $(window).scrollTop() * .0004; // higher number for more zoom
      var Num2mod = Num2 + 1;
      var Num3 = $(window).scrollTop() * .2; // Title speed
      var Num3mod = Num3 + 1;
      return $('.shade').css('opacity', Num),
      $(".bg").css({"transform":"scale(" + Num2mod + ")"}),
      $(".text").css({"margin-top":"-" + Num3mod + "px"});
  });
}.call(this));




/*==================== HEADER NAV ====================*/

$(window).scroll(function() {

  if ($(this).scrollTop() > 450) {
      $( ".l-header-new #background" ).fadeIn(500);
      /*$( ".l-header-new #logoheader" ).fadeIn(500);*/
      $(".logoheader").addClass('is--visible');

  } else {
      $( ".l-header-new #background" ).fadeOut(500);
      /*$( ".l-header-new #logoheader" ).fadeOut(500);*/
      $(".logoheader").removeClass('is--visible');

  }
});




/*==================== COUNTER ====================*/


(function () {
  const second = 1000,
        minute = second * 60,
        hour = minute * 60,
        day = hour * 24;

  //I'm adding this section so I don't have to keep updating this pen every year :-)
  //remove this if you don't need it
  let today = new Date(),
      dd = String(today.getDate()).padStart(2, "0"),
      mm = String(today.getMonth() + 1).padStart(2, "0"),
      yyyy = today.getFullYear(),
      nextYear = yyyy + 1,
      dayMonth = "09/30/",
      birthday = dayMonth + yyyy;
  
  today = mm + "/" + dd + "/" + yyyy;
  if (today > birthday) {
    birthday = dayMonth + nextYear;
  }
  //end
  
  const countDown = new Date(birthday).getTime(),
      x = setInterval(function() {    

        const now = new Date().getTime(),
              distance = countDown - now;

        document.getElementById("days").innerText = Math.floor(distance / (day)),
          document.getElementById("hours").innerText = Math.floor((distance % (day)) / (hour)),
          document.getElementById("minutes").innerText = Math.floor((distance % (hour)) / (minute)),
          document.getElementById("seconds").innerText = Math.floor((distance % (minute)) / second);

        //do something later when date is reached
        if (distance < 0) {
          document.getElementById("countdownheadline").innerText = "none";
          document.getElementById("countdown").style.display = "none";
          document.getElementById("countdowncontent").style.display = "block";
          clearInterval(x);
        }
        //seconds
      }, 0)
  }());