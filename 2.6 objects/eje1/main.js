'use strict';

const paragraph1 = document.querySelector('.adalaber1');
const paragraph2 = document.querySelector('.adalaber2');

const adalaber1 = {
  name: 'Susana',
  age: 34,
  job: 'periodista'
};

const adalaber2 = {
  name: 'Rocío',
  age: 25,
  job: 'actriz'
};

paragraph1.innerHTML = `Mi nombre es ${adalaber1.name}, tengo ${adalaber1.age} años y soy ${adalaber1.job}`;
paragraph2.innerHTML = `Mi nombre es ${adalaber2.name}, tengo ${adalaber2.age} años y soy ${adalaber2.job}`;
