'use strict';

const container = document.querySelector('.container');

const createPromise = () =>
  fetch('https://dog.ceo/api/breeds/image/random').then(response =>
    response.json()
  );

let promises = [];
for (let i = 0; i < 10; i++) {
  promises.push(createPromise());
}

Promise.all(promises).then(responses => {
  for (let i = 0; i < responses.length; i++) {
    const img = document.createElement('img');
    img.src = responses[i].message;
    container.appendChild(img);
  }
});
