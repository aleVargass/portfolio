const hamburgerBttn = document.getElementById("hamburger"), 
menuMobile = document.getElementById("menu-mobile"),
overlay = document.querySelector(".overlay");

document.addEventListener("click", e => {
    if (e.target === hamburgerBttn ||
        e.target.matches("#hamburger *") ||
        e.target.matches(".mobile-item")) {
        menuMobile.classList.toggle("display");
        document.body.classList.toggle("overflowYHidden");
        overlay.classList.toggle("visible");
    } ;
})