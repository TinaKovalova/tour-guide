document.addEventListener("DOMContentLoaded", () => {
    const navigation = document.querySelector(".navigation");
    const burgerButton = document.querySelector(".burger-button");
    const header = document.querySelector(".header");
    const menu = header.querySelector(".burger-menu");
    const bookingButton = document.querySelector(".booking__active-button");
   
    burgerButton?.addEventListener("click", (e) => {
        navigation?.classList.toggle("active");
        console.log(e.currentTarget);
        e.currentTarget.classList.toggle("burger-button--open");
    })

    menu?.addEventListener("click", (e) => {
        console.dir(e.target);
        if (e.target.nodeName = "A") {
            navigation.classList.remove("active");
        }
    })
     window.addEventListener("load", () => {
         const headerHeight = getComputedStyle(header).getPropertyValue("height").trim();
         document.documentElement.style.setProperty(
         "--header-height",
         `${parseFloat(headerHeight) / 16}rem`,
       );
     });
    
    const featuredSwiper = new Swiper(".featured__slider.swiper", {
      slidesPerView: "auto",
      centerInsufficientSlides: true,
      navigation: {
        nextEl: ".featured__slider-button-next",
        prevEl: ".featured__slider-button-prev",
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
  
    //tour swiper
    const tourSwiper = new Swiper(".tourSwiper", {
      loop: true,
      slidesPerView: 6,

      freeMode: true,
      watchSlidesProgress: true,
      breakpoints: {
        320: {
          spaceBetween: 5,
        },
        992: {
          spaceBetween: 10,
        },
      },
    });
    const tourSwiper2 = new Swiper(".tourSwiper2", {
      loop: true,
      spaceBetween: 10,
      speed: 1500,
      thumbs: {
        swiper: tourSwiper,
      },
    });
  bookingButton?.addEventListener("click", (e) => {
    const bookingElement = e.target.closest(".booking");
    if (bookingElement) {
      console.log(true);
      bookingElement.classList.toggle("active");
    }
  })
  
})

