document.addEventListener("DOMContentLoaded", () => {
    const navigation = document.querySelector(".navigation");
    const burgerButton = document.querySelector(".burger-button");
    const header = document.querySelector(".header");
    const menu = header.querySelector(".burger-menu");
   
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
        const headerHeight = getComputedStyle(header).getPropertyValue("height");
        menu.style.setProperty(
         "--header-height",
         `${parseFloat(headerHeight) / 16}rem`,
       );
     });
})

