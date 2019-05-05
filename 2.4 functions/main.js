'use strict';

// exe 1
function multi(a, b) {
  return a * b;
}

const result = multi(3, 9);
console.log('result', result);

// exe 2
function average(a, b, c, d) {
  return (a + b + c + d) / 4;
}
const resultAverage = average(2, 4, 6, 8);
console.log('result average', resultAverage);

// exe 3
function calculateIva(price) {
  const iva = price * 0.21;
  const total = iva + price;
  // return `Precio sin IVA: ${price}, IVA: ${iva} y Total: ${total}`;
  const obj = {
    iva: iva,
    price: price,
    total: total
  };
  return obj;
}

const objResult = calculateIva(20);
console.log('obj', objResult);
console.log(`Precio sin IVA: ${objResult.price}, IVA: ${objResult.iva} y Total: ${objResult.total}`);

// exe 4
function pairOrNot(number) {
  if (number % 2 === 0) {
    return true;
  }
  return false;
}

console.log('The number you entered is pair: ', pairOrNot(9));

// exe 5
function getEl(selector) {
  return document.querySelector(selector);
}

const btn = getEl('.btn');
console.log(btn);

// exce 6

function getEl2(selector) {
  if (selector === '') {
    return 'You need to enter a selector to find in th dom';
  } else {
    const element = document.querySelector(selector);
    if (!element) {
      return `No existe ningún elemento con clase, id o tag llamado ${selector}`;
    }
    return document.querySelector(selector);
  }
}

console.log(getEl2('.header'));
console.log(getEl2('header'));
console.log(getEl2(''));

// exce 7
function getNumber() {
  const num = parseInt(getEl2('.number').innerHTML);
  return pairOrNot(num);
}

console.log('The number you entered is pair: ', getNumber());

// exce 8
// modificamos una variable de ámbito global
let secretLetter = 'y';
function mySecretLetter() {
  secretLetter = 'x';
  return secretLetter;
}

console.log(secretLetter); // devuelve "x"
console.log(mySecretLetter()); // devuelve "x"

// exce 9
const pairOrNot2 = number => {
  return number % 2 === 0 ? true : false;
};

// exce 10
const claculateBox = (borderBox, width, padding, borderSize) => {
  if (borderBox) {
    return `El ancho del contenido es: ${width - padding * 2 - borderSize * 2}px y el ancho total de la caja es: ${width}px`;
  } else {
    return `El ancho del contenido es: ${width}px y el ancho total de la caja es: ${width + padding * 2 + borderSize * 2}px`;
  }
};

const sizeBox = claculateBox(true, 200, 10, 5);
console.log(sizeBox);
const sizeContent = claculateBox(false, 300, 10, 5);
console.log(sizeContent);
