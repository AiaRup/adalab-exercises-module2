'use strict';

// fetch('https://dog.ceo/api/breed/Chihuahua/images/random')
//   .then(response => response.json())
//   .then(data => {
//     const img = document.querySelector('.img');
//     img.src = data.message;
//     img.alt = 'Un perro';
//   });

const btn = document.querySelector('.btn');

function addImage() {
  fetch('https://dog.ceo/api/breed/Chihuahua/images/random')
    .then(response => response.json())
    .then(data => {
      const container = document.querySelector('.container');
      container.innerHTML += `<img src=${data.message} alt="Un perro"/>`;
    });
}

btn.addEventListener('click', addImage);
