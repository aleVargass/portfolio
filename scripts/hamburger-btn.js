const $hambugerBtn = document.getElementById("hamburger"), 
menuMobile = document.getElementById("menu-mobile"),
overlay = document.querySelector(".overlay");

document.addEventListener("click", e => {
    console.log(e.target);
    if (e.target === $hambugerBtn ||
        e.target.matches(".mobile-item")) {
        menuMobile.classList.toggle("display");
        document.body.classList.toggle("overflowYHidden");
        overlay.classList.toggle("visible");
    } ;
})