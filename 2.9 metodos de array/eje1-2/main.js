'use strict';

// exe 1

const arr = [];

const get100Numbers = () => {
  for (let i = 1; i <= 100; i++) {
    arr.push(i);
  }
};

get100Numbers();

console.log(arr);

// exe 2

const getReversed100Numbers = array => {
  array.reverse();
};

getReversed100Numbers(arr);
console.log(arr);
