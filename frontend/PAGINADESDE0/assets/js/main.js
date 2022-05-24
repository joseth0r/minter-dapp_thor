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
  document.body.classList.add('no-scroll')
}); 

$(".popup-modal__close").click(function(){
  $(".popup-modal").removeClass('is--visible');
  document.body.classList.remove('no-scroll')
});
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
/*const sections = document.querySelectorAll("section[id]");

function scrollActive() {
  const scrollY = window.pageYOffset;

  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 50;
    sectionId = current.getAttribute("id");

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document
        .querySelector(".nav_menu a[href*=" + sectionId + "]")
        .classList.remove("text-white/70")
        .classList.add("text-white");
    } else {
      document
        .querySelector(".nav_menu a[href*=" + sectionId + "]")
        //.classList.toggle("text-white/70");
    }
  });
}
window.addEventListener("scroll", scrollActive);*/



/*==================== SCROLL REVEAL ANIMATION ====================*/
const sr = ScrollReveal({
  distance: "30px",
  duration: 1800,
  reset: true
});

sr.reveal(
  `.reveal`,
  {
    //Vem do:
    origin: "top",
    interval: 100
  }
);

sr.reveal(`.share_img, .send_content`, {
  //Vem da:
  origin: "left"
});

sr.reveal(`.share_data, .send_img`, {
  //Vem da:
  origin: "right"
});
