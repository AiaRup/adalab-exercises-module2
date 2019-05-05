const coordinates = [150, 35, 12]; // x = 150, y = 35, z = 12

// hasta ahora lo habríamos hecho así
const x = coordinates[0];
const y = coordinates[1];
console.log(`The point is at (${x}, ${y})`); // The point is at (150, 35)

// usando destructuring de array
const [x, y] = coordinates;
console.log(`The point is at (${x}, ${y})`); // The point is at (150, 35)

const coordinates = [150, 35, 12];

// hasta ahora lo habríamos hecho así
const z = coordinates[2];
console.log(`The z-index is ${z}`); // The z-index is 12

// usando destructuring de array
const [, , z] = coordinates;
console.log(`The z-index is ${z}`); // The z-index is 12

const person = {
  name: 'Marie',
  lastName: 'Smith',
  age: 39,
  languages: ['English', 'French'],
};

const { name } = person;
console.log(`Hello ${name}`); // Hello Marie

const { name: personName } = person;
console.log(`Hello ${personName}`); // Hello Marie

const person = {
  name: 'Marie',
  lastName: 'Smith',
  age: 39,
  languages: ['English', 'French'],
};

const { languages } = person;
const [, secondLanguage] = languages;
console.log(`${secondLanguage} is my second language`); // French is my second language

const {
  languages: [, secondLanguage],
} = person;
console.log(`${secondLanguage} is my second language`); // French is my second language

let a = 'Quiero llamarme b';
let b = 'Quiero llamarme a';

[b, a] = [a, b];

console.log(a); // 'Quiero llamarme a'
console.log(b); // 'Quiero llamarme b'

const names = ['Smith', 'White', 'Black', 'Pinkman'];

const newNames = [...names, 'Williams'];

console.log(newNames); // ['Smith', 'White', 'Black', 'Pinkman', 'Williams']

const myBooks = ['1984', 'Brave New World'];
const myBrotherBooks = ['We', 'Fahrenheit 451'];

const books = [...myBooks, ...myBrotherBooks];

console.log(books); // [`1984`, 'Brave New World', 'We', 'Fahrenheit 451']

const vowels = ['a', 'e', 'i', 'o', 'u'];

console.log(...vowels);

function showFavoriteFruits(first, ...rest) {
  const restOfFruits = rest.join(' and ');
  console.log(
    `My favourite fruit is the ${first}, although I like ${restOfFruits} also.`
  );
}

const myFavoriteFruits = ['orange', 'banana', 'pear'];
showFavoriteFruits(...myFavoriteFruits); // 'My favourite fruit is the orange, although I like banana and pear also.'
