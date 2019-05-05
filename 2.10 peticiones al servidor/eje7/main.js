'use strict';

fetch('https://api.rand.fun/number/integer/')
  .then(response => response.html())
  .then(data => {
    const text = document.querySelector('.text');
    text.innerHTML = data.result;
  })
  .catch(error => console.log('error', error));
