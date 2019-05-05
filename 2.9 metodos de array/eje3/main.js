'use strict';

const lostNumbers = [4, 8, 15, 16, 23, 42];

const bestLostNomber = () => {
  const evenNumbers = [];
  const threeNumbers = [];

  for (let i = 0; i < lostNumbers.length; i++) {
    if (lostNumbers[i] % 2 === 0) {
      evenNumbers.push(lostNumbers[i]);
    }
    if (lostNumbers[i] % 3 === 0) {
      threeNumbers.push(lostNumbers[i]);
    }
  }
  let concatArray = evenNumbers.concat(threeNumbers);
  console.log('even', evenNumbers);
  console.log('three', threeNumbers);
  console.log('concat', concatArray);
};

bestLostNomber();
