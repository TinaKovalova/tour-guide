document.addEventListener("DOMContentLoaded", () => { 
     const featuredSwiper = new Swiper("#featured-slider", {
       slidesPerView: "auto",
       centerInsufficientSlides: true,
       navigation: {
         nextEl:
           ".featured__slider-controls .slider-controls__slider-button-next",
         prevEl:
           ".featured__slider-controls .slider-controls__slider-button-prev",
       },
       breakpoints: {
         320: {
           spaceBetween: 10,
         },
         480: {
           spaceBetween: 15,
         },
         992: {
           spaceBetween: 30,
         },
       },
     });
    
})