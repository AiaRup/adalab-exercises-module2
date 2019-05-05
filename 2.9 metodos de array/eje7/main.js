'use strict';

const adalabers = [{ name: 'María', age: 29, job: 'diseñadora' }, { name: 'Lucía', age: 31, job: 'ingeniera química' }, { name: 'Susana', age: 34, job: 'periodista' }, { name: 'Rocío', age: 25, job: 'actriz' }, { name: 'Inmaculada', age: 21, job: 'diseñadora' }];

const countAdalabers = array => array.length;

const averageAge = array => {
  let average = 0;
  for (const item of array) {
    average += item.age;
  }
  return average / array.length;
};

const theYoungest = array => {
  let min = array[0].age;
  for (const item of array) {
    min = item.age < min ? item.age : min;
  }
  return min;
};

const countDesigners = array => {
  let number = 0;
  for (const item of array) {
    number = item.job === 'diseñadora' ? number + 1 : number;
  }
  return number;
};

console.log('número de adalabers en el listado: ', countAdalabers(adalabers));
console.log('la media de edad de listado: ', averageAge(adalabers));
console.log('el nombre de la adalaber más joven: ', theYoungest(adalabers));
console.log('el número de adalabers que son diseñadoras: ', countDesigners(adalabers));
