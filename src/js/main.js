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


