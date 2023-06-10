"use strict";

const wholeMenu = document.querySelector('.js-nav');
const menuIcon = document.querySelector('.js-icon');
const menuItems = document.querySelectorAll('.header__menu__nav__ul li a');


function handleClickEvent() {
    wholeMenu.classList.toggle("show");
}
menuIcon.addEventListener("click", handleClickEvent);

menuItems.forEach(item => {
    item.addEventListener('click', () => {
        wholeMenu.classList.remove("show");
    });
});





