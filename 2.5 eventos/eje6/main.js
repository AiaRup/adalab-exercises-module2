'use strict';

const input = document.querySelector('#name');
const text = document.querySelector('.text');

input.addEventListener('keyup', event => {
  const value = event.currentTarget;
  if (value === '') {
    text.innerHTML = 'Name';
  } else {
    text.innerHTML = input.value;
  }
});
