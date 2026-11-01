document.addEventListener("DOMContentLoaded", () => {
    const navigation = document.querySelector(".navigation");
    const burgerButton = document.querySelector(".burger-button");
    const header = document.querySelector(".header");
    const menu = header.querySelector(".burger-menu");
    const bookingButton = document.querySelector(".booking__active-button");
    const filterActivity = document.querySelector(".filter-activity");
    const activateFilterButton = document.querySelector(".activities__aside-filter-button");

    burgerButton?.addEventListener("click", (e) => {
        navigation?.classList.toggle("active");
        e.currentTarget.classList.toggle("burger-button--open");
    })

    menu?.addEventListener("click", (e) => {
        if (e.target.nodeName = "A") {
            navigation.classList.remove("active");
        }
    })
    let  headerHeight;
    window.addEventListener("load", () => {
      headerHeight = getComputedStyle(header).getPropertyValue("height").trim();
      setCSSVariableValue("--header-height", headerHeight);
      setCSSVariableValue("--filter-top", filterActivity?.getBoundingClientRect().top);
    });
  
    activateFilterButton?.addEventListener("click", () => {
          filterActivity.classList.toggle("active");
      });

    
    window.addEventListener("scroll", () => {
        if (location.pathname === "/tour-guide/") {
        let scrollPosition = window.scrollY || document.documentElement.scrollTop;
        if (
          scrollPosition > header.offsetHeight &&
          header.classList.contains("header--light")
        ) {
          header.classList.remove("header--light");
          header.classList.add("header--dark");
        }
        if (
          scrollPosition <= header.offsetHeight &&
          header.classList.contains("header--dark")
        ) {
          header.classList.remove("header--dark");
          header.classList.add("header--light");
        }
      }
      if (
        window.matchMedia("(width<768px)").matches) {
        setCSSVariableValue("--filter-top", filterActivity?.getBoundingClientRect().top);
      }
    });
  function setCSSVariableValue(propertyName, value) {
    document.documentElement.style.setProperty(
      propertyName,
      `${parseFloat(value) / 16}rem`,
    );
  }
       
    bookingButton?.addEventListener("click", (e) => {
      const bookingElement = e.target.closest(".booking");
      if (bookingElement) {
        console.log(true);
        bookingElement.classList.toggle("active");
      }
    })

    const tourDates = document.querySelectorAll(".booking-form__input[type='date']");
    if (tourDates.length > 0) {
      tourDates.forEach(
        (input) => (input.value = new Date().toISOString().split("T")[0]),
      );
    } 
      
    const reviewScoreRow = document.querySelectorAll(".services-score__row");
    if (reviewScoreRow?.length > 0) {
      reviewScoreRow.forEach(item => {
        const serviceName = item.dataset.serviceName;
        const serviceRate = item.dataset.serviceScore;

        item.querySelector(".services-score__service-name").textContent = serviceName;
        item.querySelector(".services-score__rate-number").textContent = serviceRate;
        item.querySelector(".services-score__graphic-rate span").style.width =`${serviceRate/5*100}%`;
      })
    }
  
})

