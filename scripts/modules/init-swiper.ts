import Swiper from "swiper";
import { Pagination, Autoplay, Navigation } from "swiper/modules";

// @ts-ignore
import "swiper/css";

function initSwiper() {
  const heroSwiper = new Swiper("[data-swiper='hero']", {
    modules: [Pagination, Autoplay],
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    direction: "horizontal",
    slidesPerView: 1,
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      768: {
        direction: "vertical",
      },
    },
  });
  const productsSwiper = new Swiper("[data-swiper='products']", {
    modules: [Pagination, Navigation],
    slidesPerView: 1,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    loop: true,
    navigation: {
      nextEl: ".products__nav--next",
      prevEl: ".products__nav--prev",
    },
  });

  return {
    heroSwiper,
    productsSwiper,
  };
}

export default initSwiper;
