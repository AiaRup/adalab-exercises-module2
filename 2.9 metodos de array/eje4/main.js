'use strict';

const buttons = document.querySelectorAll('.btn');
const body = document.querySelector('body');

const changeBackground = () => {
  body.classList.toggle('background');
};

for (const btn of buttons) {
  btn.addEventListener('click', changeBackground);
}
