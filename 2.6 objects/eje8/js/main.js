'use strict';

const page = document.querySelector('.page');
const smiley = document.querySelector('.page__smiley');
const btn = document.querySelector('.form__button');
const select = document.getElementById('mood');

const writeMood = mood => {
  smiley.innerHTML = mood;
};

const generateRandom = max => Math.floor(Math.random() * Math.floor(max) + 1);

const changeBackground = () => {
  const numRandom = generateRandom(100);
  const background = numRandom % 2 === 0 ? 'even' : 'odd';
  page.classList.remove('even', 'odd');
  page.classList.add(background);
};

const changeMood = event => {
  event.preventDefault();
  // const currentMood = select.value;
  // smiley.innerHTML = currentMood;
  writeMood(select.value);
  changeBackground();
};

// take the first value of smiley and put it in the h1
writeMood(select.value);

btn.addEventListener('click', changeMood);
