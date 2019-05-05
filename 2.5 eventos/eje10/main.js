'use strict';
const list = document.querySelector('.movies');
const btn = document.querySelector('.btn');

const inception = 'Inception';
const theButterFlyEffect = 'The butterfly effect';
const eternalSunshineOfTheSM = 'Eternal sunshine of the spotless mind';
const blueVelvet = 'Blue velvet';
const split = 'Split';

const addItems = () => {
  list.innerHTML = `
  <li>${inception}</li>
  <li>${theButterFlyEffect}</li>
  <li>${eternalSunshineOfTheSM}</li>
  <li>${blueVelvet}</li>
  <li>${split}</li>`;

  list.addEventListener('click', event => {
    const guilty = event.target;
    console.log(guilty.innerHTML);
  });
};

btn.addEventListener('click', addItems);
