import {cartoons} from "./db_cartoons.js";

const slider = document.querySelector(".image-slider");
const arrLeft = document.querySelector(".arrow-left");
const arrRight = document.querySelector(".arrow-right");
const heading = document.querySelector(".description-box h1");
const description = document.querySelector(".description-box p");

let id = 0;

function slide(id) {
    slider.style.backgroundImage = `url(../assets/${cartoons[id].image})`;

    slider.classList.add('image-fade');

    setTimeout(() => {
        slide.classList.remove('image-fade');
    }, 550);

    heading.innerText = cartoons[id].heading;

    description.innerText = cartoons[id].description;

}

arrLeft.addEventListener('click', () => {
    id--;

    if (id<0) {
        id = cartoons.length - 1;
    }

    slide(id);
})

arrRight.addEventListener('click', () => {
    id++;

    if (id > cartoons.length - 1) {
        id = 0;
    }

    slide(id);
})

