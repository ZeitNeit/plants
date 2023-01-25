// "use strict"
window.addEventListener('DOMContentLoaded', () => {
    const menu = document.querySelector('.navigation'),
    menuItem = document.querySelectorAll('.navigation__link'),
    hamburger = document.querySelector('.hamburger');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('hamburger__active');
        menu.classList.toggle('navigation__active');
    });

    menuItem.forEach(item => {
        item.addEventListener('click', () => {
            hamburger.classList.toggle('hamburger__active');
            menu.classList.toggle('navigation__active');
        })
    })
})

// const hamburger = document.querySelector('.')