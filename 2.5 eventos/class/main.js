'use strict';

const input = document.querySelector('#name');
const text = document.querySelector('.text');

input.addEventListener('keyup', () => {
  const value = input.value;
  if (value === '') {
    text.innerHTML = 'Name';
  } else {
    text.innerHTML = input.value;
  }
});
