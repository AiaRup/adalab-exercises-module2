'use strict';

const btn = document.querySelector('.btn');
const btn2 = document.querySelector('.btn2');

function toggle(event) {
  const element = event.currentTarget;
  element.classList.toggle('color');
}

btn.addEventListener('click', toggle);
btn2.addEventListener('click', toggle);
