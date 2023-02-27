// "use strict"

/* // Burger Menu */

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

/* Service cards */

let counter1 = 0;
let counter2 = 0;
let counter3 = 0;

let Gardens =  document.querySelector('#gardens');
let Lawn = document.querySelector('#lawn');
let Planting = document.querySelector('#planting');
let serviceItems = document.querySelectorAll('.service__wrap2__item');
let serviceButtons = document.querySelectorAll('.service__wrap1__button');

Gardens.onclick = function () {
    if (counter2 % 2 == 1 && counter3 % 2 == 1) {
    }
    else if (counter2 % 2 == 0 && counter3 % 2 == 0) {
        Gardens.classList.toggle('active-button')
        serviceItems.forEach(button => {
            button.classList.toggle('blur')
            });
        serviceItems[0].classList.toggle('blur')
        serviceItems[4].classList.toggle('blur')
        counter1 += 1
    }
    else if (counter2 % 2 == 1 || counter3 % 2 == 1) {
        Gardens.classList.toggle('active-button')
        serviceItems[0].classList.toggle('blur')
        serviceItems[4].classList.toggle('blur')
        counter1 += 1;
    }
}  

Lawn.onclick = function () {
    if (counter1 % 2 == 1 && counter3 % 2 == 1) {
    }
    else if (counter1 % 2 == 0 && counter3 % 2 == 0) {
        Lawn.classList.toggle('active-button')
        serviceItems.forEach(button => {
            button.classList.toggle('blur')
            });
        serviceItems[2].classList.toggle('blur')
        counter2 += 1
    }
    else if (counter1 % 2 == 1 || counter3 % 2 == 1) {
        Lawn.classList.toggle('active-button')
        serviceItems[2].classList.toggle('blur')
        counter2 += 1;
    }
}  

Planting.onclick = function () {
    if (counter1 % 2 == 1 && counter2 % 2 == 1) {
    }
    else if (counter1 % 2 == 0 && counter2 % 2 == 0) {
        Planting.classList.toggle('active-button')
        serviceItems.forEach(button => {
            button.classList.toggle('blur')
            });
        serviceItems[1].classList.toggle('blur')
        serviceItems[3].classList.toggle('blur')
        serviceItems[5].classList.toggle('blur')
        counter3 += 1
    }
    else if (counter1 % 2 == 1 || counter2 % 2 == 1) {
        Planting.classList.toggle('active-button')
        serviceItems[1].classList.toggle('blur')
        serviceItems[3].classList.toggle('blur')
        serviceItems[5].classList.toggle('blur')
        counter3 += 1;
    }
}  

/* Service Version 2.0

const cards = document.querySelectorAll('.galery__card');
const serviceBtns = document.querySelector('.service__btns')

const serviceData = {
  selected: new Set(),
  selectedNum: 0
};

serviceBtns.addEventListener('click', (event) => {
  if (event.target.classList.contains('service__header-btn')) {
    event.preventDefault();

    let service = event.target.dataset.plants;

    if (serviceData.selected.has(service)) {
      serviceData.selected.delete(service);
      serviceData.selectedNum--;
    } else if (serviceData.selectedNum < 2) {
      serviceData.selected.add(service);
      serviceData.selectedNum++;
    }

    sendServices();
  }
});

function sendServices() {
  let serviceBtn = document.querySelectorAll('.service__header-btn')

  serviceBtn.forEach((btn) => {
    let service = btn.dataset.plants;

    if (serviceData.selected.has(service)) {
      btn.classList.add('btn-active');
    } else if (serviceData.selectedNum === 2) {
      btn.classList.remove('btn-active');
    } else {
      btn.classList.remove('btn-active');
    }
  });

  cards.forEach((item) => {
    let service = item.dataset.plants;

    if (serviceData.selected.has(service)) {
      item.classList.remove('addblur');
    } else if (serviceData.selectedNum === 0) {
      item.classList.remove('addblur');
    } else {
      item.classList.add('addblur');
    }
  });
} */

/* Accordion */

document.querySelectorAll('.accordion__panel').forEach(item => {
    item.classList.add('hide')
})

const handleClick = event => {
    const lists = document.querySelectorAll('.accordion__panel')
    const target = event.target.nextElementSibling
    target.classList.toggle('hide')
    document.querySelectorAll('.accordion__button').forEach(item => {
        if(item == event.target) {
            item.classList.toggle('active')
        } else {
            item.classList.remove('active')
        }
    })
    lists.forEach(item => {
        if(item !== target) {
            item.classList.add('hide')
        }
    })
}

document.querySelectorAll('.accordion__button').forEach(item => {
    item.addEventListener('click', handleClick)
})

/* SELECTOR */

const openSelect = document.querySelector('.contacts-options')
const selectBtn = document.querySelector('.select-btn')
const city = document.querySelectorAll(".cityLi");
const selectCity = document.querySelectorAll(".select-city");
const spanCity = document.querySelectorAll('.spanCity')

selectBtn.onclick = function () {
  openSelect.classList.toggle('active-contact')
  selectBtn.classList.toggle('active-select')
}

city[0].onclick = function () {
  openSelect.classList.toggle('active-contact')
  selectBtn.classList.toggle('active-select')
  selectCity.forEach(button => {
    button.classList.remove('select-city-active')
  });
  selectCity[0].classList.toggle('select-city-active')
  selectBtn.textContent = spanCity[0].textContent
}

city[1].onclick = function () {
  openSelect.classList.toggle('active-contact')
  selectBtn.classList.toggle('active-select')
  selectCity.forEach(button => {
    button.classList.remove('select-city-active')
  });
  selectCity[1].classList.toggle('select-city-active')
  selectBtn.textContent = spanCity[1].textContent
}

city[2].onclick = function () {
  openSelect.classList.toggle('active-contact')
  selectBtn.classList.toggle('active-select')
  selectCity.forEach(button => {
    button.classList.remove('select-city-active')
  });
  selectCity[2].classList.toggle('select-city-active')
  selectBtn.textContent = spanCity[2].textContent
}

city[3].onclick = function () {
  openSelect.classList.toggle('active-contact')
  selectBtn.classList.toggle('active-select')
  selectCity.forEach(button => {
    button.classList.remove('select-city-active')
  });
  selectCity[3].classList.toggle('select-city-active')
  selectBtn.textContent = spanCity[3].textContent
}

/* selectBtn.addEventListener('click', () => {
selector.classList.toggle('active-contact')
selectBtn.classList.toggle('active-select')
}) */