document.addEventListener("DOMContentLoaded", () => {
    const tourSwiper = new Swiper(".tour-swiper", {
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
    const tourSwiper2 = new Swiper(".tour-swiper2", {
        loop: true,
        spaceBetween: 10,
        speed: 1500,
        thumbs: {
            swiper: tourSwiper,
        },
    });
    const relatedTodaySwiper = new Swiper("#related-today-slider", {
    slidesPerView: "auto",
    centerInsufficientSlides: true,
    navigation: {
        nextEl: ".related-today .slider-controls__slider-button-next",
        prevEl: ".related-today .slider-controls__slider-button-prev",
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
    const relatedSwiper = new Swiper("#related-slider", {
    slidesPerView: "auto",
    centerInsufficientSlides: true,
    navigation: {
        nextEl: ".related .slider-controls__slider-button-next",
        prevEl: ".related .slider-controls__slider-button-prev",
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