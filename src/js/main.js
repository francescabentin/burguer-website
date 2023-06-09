"use strict";

const wholeMenu = document.querySelector('.js-nav');
const menuIcon = document.querySelector('.js-icon');
const menuItems = document.querySelectorAll('.header__menu__nav__ul li a');
const closeIcon = document.querySelector(".header__menu__nav__ul__li__close");


function handleClickEvent() {
    wholeMenu.classList.toggle("show");
}
menuIcon.addEventListener("click", handleClickEvent);

menuItems.forEach(item => {
    item.addEventListener('click', () => {
        wholeMenu.classList.remove("show");
    });
});

closeIcon.addEventListener('click', () => {
    wholeMenu.classList.remove("show");
})

const slider = document.querySelector('.js-slider');
const images = slider.querySelectorAll('.js-img');
let currentImageIndex = 0;

function showNextImage() {
    images[currentImageIndex].style.display = 'none';
    currentImageIndex = (currentImageIndex + 1) % images.length;
    images[currentImageIndex].style.display = 'block';
}

setInterval(showNextImage, 2000);

images[currentImageIndex].style.display = 'block';


