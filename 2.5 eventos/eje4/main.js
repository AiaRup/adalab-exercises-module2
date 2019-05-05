'use strict';
const div = document.querySelector('.background');

window.addEventListener('scroll', () => {
  console.log(window.scrollY);
  if (window.scrollY > 250) {
    div.classList.add('green');
  } else {
    div.classList.remove('green');
  }
});
