var swiper = new Swiper(".mySwiper", {
    spaceBetween: 10,
    speed: 800,
    centeredSlides: true,
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
    grabCursor: true,
    effect: "creative",
    creativeEffect: {
        prev: {
            shadow: true,
            translate: [0, 0, -400],

        },
        next: {
            translate: ["100% ", 0, 0],
        },
    },
});

var swiper = new Swiper(".mySwiper1", {
    slidesPerView: 4,
    spaceBetween: 0,
    breakpoints: {
        // when window width is >= 320px
        320: {
            slidesPerView: 1,
            spaceBetween: 10
        },
        // when window width is >= 480px
        480: {
            slidesPerView: 2,
            spaceBetween: 0
        },
        // when window width is >= 640px
        640: {
            slidesPerView: 4,
            spaceBetween: 0
        }
    },
    loop: true,
    autoplay: {
        delay: 1000,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});

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

function openCity(evt, cityName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
}

// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpen").click();

var submitted = false;
var modal = document.getElementById('pop');
const btn = document.getElementById('btn')
    // When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
        const inputs = document.querySelectorAll('#f1, #l1, #num, #mail, #address, #message');
        inputs.forEach(input => {
            input.value = '';
        });
    }
};

btn.addEventListener('click', function handleClick(event) {
    const inputs = document.querySelectorAll('#f1, #l1, #num, #mail, #address, #message');
    inputs.forEach(input => {
        input.value = '';
    });
});



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
