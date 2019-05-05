'use strict';

// exce 1
let userAvatar = document.querySelector('.img');

const img = 'http://placehold.it/300x300';
let result = '';
const imgSrc = userAvatar.getAttribute('src');

result = imgSrc || img;

userAvatar.setAttribute('src', result);

// exce 2
let name = 'Lara';
let title = document.querySelector('.title');

if (name === 'Lara' || name === 'Aia') {
  title.innerHTML = `Bienvenida, ${name}`;
} else {
  title.innerHTML = 'Lo siento pero el usuario que has introducido no está registrado';
}

// exce 3
let number = 30;
if (number === 0) {
  console.log('El número es 0');
} else if (number < 0) {
  console.log('El número es negativo');
} else if (number + 2 > 13) {
  console.log('El número más 2 es mayor 13');
} else if (number > 20 && number < 50) {
  console.log('El número es mayor que 20 pero menor que 50');
} else {
  console.log('el número no es 123123125');
}

// exce 4
let dogYears = 9;
const first = 15;
const second = 9;
const third = 5;

if (dogYears === 1) {
  console.log(`Dog age is ${first} in human years`);
} else if (dogYears === 2) {
  console.log(`Dog age is ${first + second} in human years`);
} else if (dogYears >= 3) {
  console.log(`Dog age is ${first + second + third * (dogYears - 2)} in human years`);
} else {
  console.log('Dog age is not valid');
}

// exce 5
const wrapper = document.querySelector('.wrapper');
const title2 = document.querySelector('.title2');
const textP = document.querySelector('.text');

if (wrapper.classList.contains('warning')) {
  title2.innerHTML = 'AVISO';
  textP.innerHTML = 'Tenga cuidado';
} else if (wrapper.classList.contains('error')) {
  title2.innerHTML = 'ERROR';
  textP.innerHTML = 'Ha surgido un error';
} else if (wrapper.classList.contains('success')) {
  title2.innerHTML = 'CORRECTO';
  textP.innerHTML = 'Los datos son correctos';
}

// exce 6
let avocados;
const avocadoPrice = 1.5;
const money = 33;

avocados = money >= avocadoPrice ? money / avocadoPrice : 0;

console.log('avocados', avocados);

// exce 7
const year = 2019;
const nextYear = 0;

const result = (year % 4 == 0 && year % 100 != 0) || year % 400 == 0;
