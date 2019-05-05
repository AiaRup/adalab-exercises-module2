'use strict';

const adalaber1 = {
  name: 'María',
  age: 34,
  job: 'periodista'
};

const adalaber2 = {
  name: 'Rocío',
  age: 25,
  job: 'actriz'
};

adalaber1.showBio = function() {
  console.log(`Mi nombre es ${this.name}, tengo ${this.age} años y soy ${this.job}`);
};

adalaber2.showBio = adalaber1.showBio;

adalaber1.showBio();
adalaber2.showBio();
