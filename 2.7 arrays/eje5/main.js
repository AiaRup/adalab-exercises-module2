'use strict';

const numbers = [19, 8, 23, 45, 89];
// numbers.push(6);

const numbers2 = [1, 4, 22];

const average = arr => {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum / arr.length;
};

console.log(`The average of array's numbers is: ${average(numbers)}`);
console.log(`The average of array's numbers is: ${average(numbers2)}`);
