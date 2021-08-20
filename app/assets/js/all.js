$(function() {
  console.log('Hello Bootstrap5');
});


//猜你也喜歡 
var swiper = new Swiper(".mySwiper1", {
  slidesPerView: 1,
    spaceBetween: 30,
    breakpoints: {
      768:{
        slidesPerView: 3,
        spaceBetween: 30,
      },
    }
});