const $hambugerBtn = document.getElementById("hamburger"), 
menuMobile = document.getElementById("nav-mobile"),
overlay = document.getElementById("overlay");

document.addEventListener("click", e => {
    if (e.target === $hambugerBtn ||
        e.target.matches(".nav-mobile__item")) {
        menuMobile.classList.toggle("display");
        document.body.classList.toggle("overflowYHidden");
        overlay.classList.toggle("visible");
    } ;
})