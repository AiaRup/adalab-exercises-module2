'use strict';

const superWave = document.querySelector('.super-wave');

superWave.classList.add('destaca');

// exce 3
const kiwisPrice = 5;
const kiwisAmount = 2;
const perasPrice = 2;
const perasAmount = 3;
const uvasPrice = 4;
const uvasAmount = 0.5;

console.log(`Total price: ${kiwisPrice * kiwisAmount + perasPrice * perasAmount + uvasPrice * uvasAmount}`);

// exce 4
const people = 9;
const totalPrice = 128;
const anaNeedToAdd = 2;

console.log(`Total price to pay each person: ${(totalPrice - anaNeedToAdd) / people} and Ana needs to pay ${(totalPrice - anaNeedToAdd) / 9 + anaNeedToAdd}`);

// exce 5
const age = prompt('What is your age?');
const hoursInYear = 8670;

console.log(`You lived: ${parseInt(age) * hoursInYear} hours.`);

// exce 6
const name = 'Lara';
console.log('Hola ' + name + ', encantada de conocerte.');

// exce 7
const name2 = 'Lara';
console.log(`Hola ${name2}, encantada de conocerte.`);

// exce 8
const firstDogImage = 'https://dog.ceo/api/img/schipperke/n02104365_8156.jpg';
const firstDogName = 'Dina';

const secondDogImage = 'https://dog.ceo/api/img/collie-border/n02106166_355.jpg';
const secondDogName = 'Luna';

const thirdDogImage = 'https://dog.ceo/api/img/schipperke/n02104365_8156.jpg';
const thirdDogName = 'Lana';

const list = document.querySelector('.list');

list.innerHTML = `
<li>
  <h2>${firstDogName}</h2>
  <img src="${firstDogImage}" alt="image of a dog"/>
</li>
<li>
  <h2>${secondDogName}</h2>
  <img src="${secondDogImage}" alt="image of a dog"/>
</li>
<li>
  <h2>${thirdDogName}</h2>
  <img src="${thirdDogImage}" alt="image of a dog"/>
</li>
`;

// exce 9
const firstName = 'Lara';
const surname = 'Rodriguez';
console.log(`El nombre de mi compañera es ${firstName} ${surname}, y está compuesto por ${firstName.length + surname.length} caracteres`);

// exce 10
const ageUser = prompt('What is your age?');
const hoursInOneYear = 8670;

const paragraph = document.querySelector('.ageOfUser');
paragraph.innerHTML = `You lived: ${parseInt(ageUser) * hoursInOneYear} hours.`;
