"use strict";

$(function () {
  console.log('Hello Bootstrap5');
}); // 選單

var swiper = new Swiper(".mySwiper", {
  slidesPerView: 9,
  spaceBetween: 30,
  // pagination: {
  //   el: ".swiper-pagination",
  //   clickable: true,
  // },
  768: {
    slidesPerView: 3,
    spaceBetween: 30
  }
}); //猜你也喜歡 

var swiper = new Swiper(".mySwiper1", {
  slidesPerView: 1,
  spaceBetween: 30,
  breakpoints: {
    768: {
      slidesPerView: 3,
      spaceBetween: 30
    }
  }
});
//# sourceMappingURL=all.js.map
