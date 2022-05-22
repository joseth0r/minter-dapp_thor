/*==================== SHOW MENU MOBILE ====================*/
(function () {
	$('.hamburger-menu').on('click', function() {
		$('.bar').toggleClass('animate');
    var mobileNav = $('.mobile-nav');
    mobileNav.toggleClass('hide show');
    var body = document.body;
    body.classList.toggle("no-scroll");
	})
})();





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
        .querySelector(".nav_menu a[href*=" + sectionId + "]")
        .classList.remove("text-white/70")
        .classList.add("text-white");
    } else {
      document
        .querySelector(".nav_menu a[href*=" + sectionId + "]")
        .classList.add("text-white/70")
        ;
    }
  });
}
window.addEventListener("scroll", scrollActive);

/*==================== CHANGE BACKGROUND HEADER ====================*/
function scrollHeader() {
  const nav = document.getElementById("header");
  // When the scroll is greater than 200 viewport height, add the scroll-header class to the header tag
  if (this.scrollY >= 200) nav.classList.add("scroll-header");
  else nav.classList.remove("scroll-header");
}
window.addEventListener("scroll", scrollHeader);



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
