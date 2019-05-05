'use strict';
const btn = document.querySelector('.btn');

btn.addEventListener('click', event => {
  console.log(event.type);
  console.log(event);
});
