import Swiper from "swiper";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";

function initSwiper() {
  const heroSwiper = new Swiper("[data-swiper='hero']", {
    modules: [Pagination, Autoplay],
    // autoplay: {
    //   // delay: 3000,
    //   disableOnInteraction: false,
    // },
    slidesPerView: 1,
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });
}

export default initSwiper;
