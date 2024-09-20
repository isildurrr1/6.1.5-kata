import './index.sass'
import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';

let readMoreBtn = document.querySelector(".read-more");
let readMoreIcon = readMoreBtn.querySelector(".read-more__icon");
let readMoreText = readMoreBtn.querySelector(".read-more__text");
let pagination = document.querySelector(".swiper-pagination");
let brandsContainer = document.querySelector(".brands-container");
let brandsContainerList = document.querySelector(".brands-container__list");

// Выбираем ВСЕ элементы в массив, чтобы пройтись по нему методом forEach
let brandsContainerElements = document.querySelectorAll(".brands-container__element");

// Измеряем размер экрана
const screenWidth = window.screen.width

const checkScreen = (screen) => {
  if (screen < 520) { // Условия для мобильной версии
    pagination.style = "visibility: visible";
    readMoreBtn.style = "display: none";
    brandsContainer.classList.add("swiper-container");
    brandsContainerList.classList.add("swiper-wrapper");
    brandsContainerElements.forEach((e) => e.classList.add("swiper-slide"));
    const swiper = new Swiper('.swiper-container', {
      slidesPerView: 1,
      spaceBetween: 16,
      width: 240,
      height: 72,
      pagination: {
        el: '.swiper-pagination',
      },
    });
  }
}

checkScreen(screenWidth)

const readMore = () => {
  if (readMoreText.textContent === 'Показать все') {
    brandsContainerList.style = "animation: open 1s"
    if (screenWidth < 1120 && screenWidth > 754) {
      console.log(screenWidth)
      setTimeout(() => {
        brandsContainerList.style = "height: 336px"
      }, 1000)
    } else if (screenWidth < 754) {
      setTimeout(() => {
        brandsContainerList.style = "height: 512px"
      }, 1000)
    } else if (screenWidth > 1120) {
      setTimeout(() => {
        brandsContainerList.style = "height: 248px"
      }, 1000)

      readMoreIcon.style = 'transform: rotate(0)'
      readMoreText.textContent = 'Показать все';
    }
    readMoreIcon.style = 'transform: rotate(180deg)'
    readMoreText.textContent = 'Скрыть';
  } else {
    brandsContainerList.style = "animation: close 1s"
    setTimeout(() => {
      brandsContainerList.style = "height: 160px"
    }, 1000)

    readMoreIcon.style = 'transform: rotate(0)'
    readMoreText.textContent = 'Показать все';
  }
}

readMoreBtn.addEventListener('click', readMore)
