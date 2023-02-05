window.onscroll = function() {
    scrollFunction()
};

function scrollFunction() {
    if (document.body.scrollTop > 520 || document.documentElement.scrollTop > 520) {
        document.getElementById("navbar").style.height = "55px";
        document.querySelector(".menu").style.fontSize = "1.1vw";
        document.querySelector(".back").style.opacity = 1;
        document.querySelector(".front").style.opacity = 0;
    } else {
        document.getElementById("navbar").style.height = "100px";
        document.querySelector(".menu").style.fontSize = "1.3vw";
        document.querySelector(".front").style.opacity = 1;
        document.querySelector(".back").style.opacity = 0;
    }
}


const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
}

const navLink = document.querySelectorAll(".nav-link");

navLink.forEach(n => n.addEventListener("click", closeMenu));

function closeMenu() {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}