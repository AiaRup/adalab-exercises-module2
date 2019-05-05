'use strict';

fetch('https://api.rand.fun/number/integer/')
  .then(response => response.json())
  .then(data => {
    const text = document.querySelector('.text');
    text.innerHTML = data.result;
  });
