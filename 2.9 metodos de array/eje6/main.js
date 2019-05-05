'use strict';

let counter = 0;

const incrementAndShowCounter = () => {
  counter++;
  const time = document.querySelector('.time');
  time.innerHTML = counter;
  list.innerHTML += '<img src=""/>';
};

setInterval(incrementAndShowCounter, 2000);
