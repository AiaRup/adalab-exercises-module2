'use strict';

const text = document.querySelector('.paragraph');
const btn = document.querySelector('.btn');

btn.addEventListener('click', () => {
  text.innerHTML = 'Mi primer click, ¡ole yo y la mujer que me parió!';
});
