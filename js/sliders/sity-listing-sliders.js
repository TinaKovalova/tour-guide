document.addEventListener("DOMContentLoaded", () => { 
    const waterActivitiesSwiper = new Swiper("#water-ctivities-slider", {
      slidesPerView: "auto",
      centerInsufficientSlides: true,
      navigation: {
        nextEl:
          `[aria-controls="water-ctivities-slider"] .slider-controls__slider-button-next`,
        prevEl:
          `[aria-controls="water-ctivities-slider"] .slider-controls__slider-button-prev`,
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
    const specialFoodSwiper = new Swiper("#special-foods-slider", {
      slidesPerView: "auto",
      centerInsufficientSlides: true,
      navigation: {
        prevEl: `[aria-controls="special-foods-slider"] .slider-controls__slider-button-prev`,
        nextEl: `[aria-controls="special-foods-slider"] .slider-controls__slider-button-next`,
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
    const riverActivitySwiper = new Swiper("#river-ctivity-slider", {
      slidesPerView: "auto",
      centerInsufficientSlides: true,
      navigation: {
        nextEl: `[aria-controls="river-ctivity-slider"] .slider-controls__slider-button-next`,
        prevEl: `[aria-controls="river-ctivity-slider"] .slider-controls__slider-button-prev`,
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