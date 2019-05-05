'use strict';

const dog = document.querySelector('.dog');
const img = document.querySelector('.img');
const btn = document.querySelector('.btn');

const getImage = breed => {
  fetch(`https://dog.ceo/api/breed/${breed}/images/random`)
    .then(response => response.json())
    .then(data => {
      img.src = data.message;
    });
};

const getNumber = arr => {
  fetch(`https://api.rand.fun/number/integer?min=0&max=${arr.length}`)
    .then(response => response.json())
    .then(data => {
      const selected = arr[data.result];
      dog.innerHTML = selected;
      getImage(selected);
    });
};

const getDog = () => {
  fetch(`https://dog.ceo/api/breeds/list/all`)
    .then(response => response.json())
    .then(data => {
      const listDog = Object.keys(data.message);
      getNumber(listDog);
    });
};

btn.addEventListener('click', getDog);
