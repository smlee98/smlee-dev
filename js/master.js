var menuOpenStatus = 0;
var currentPage = 1;

$(document).ready(function() {    
    /* Navbar Start */
    const hamburger = document.querySelector(".hamburger");
    const navMenu = document.querySelector(".nav-menu");
    const navLink = document.querySelectorAll(".nav-link");

    hamburger.addEventListener("click", mobileMenu);
    for(var i = 0; i < navLink.length; i++){
        navLink[i].addEventListener("click", closeMenu);
    }

    function mobileMenu() {
        hamburger.classList.toggle("active");
        navMenu.classList.toggle("active");
    }
    
    function closeMenu() {
        hamburger.classList.remove("active");
        navMenu.classList.remove("active");
    }
    /* Navbar End */
});