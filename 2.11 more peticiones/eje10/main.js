'use strict';

const conatiner = document.querySelector('.conatiner');
const btn = document.querySelector('.btn');

const key = '9e7d9f16-ab11-4c74-bad6-de2ed4d31e8b';

const getData = () => {
  fetch(
    'https://api.thecatapi.com/v1/images/search?format=json&mime_types=gif',
    {
      headers: {
        'x-api-key': key,
      },
    }
  )
    .then(response => response.json())
    .then(data => {
      const [{ url }] = data;
      const img = document.createElement('img');
      img.setAttribute('src', url);
      img.setAttribute('alt', 'random gif of a cat');
      conatiner.appendChild(img);
    });
};

const getGif = () => {
  getData();
};

getData();
btn.addEventListener('click', getGif);
