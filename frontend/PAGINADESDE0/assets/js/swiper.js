// Import Swiper and modules
import Swiper, { Navigation, Pagination, Scrollbar } from 'swiper';

const swiper = new Swiper('.swiper', {
    speed: 400,
    spaceBetween: 100,
  });

  const swiper = document.querySelector('.swiper').swiper;

// Now you can use all slider methods like
swiper.slideNext();