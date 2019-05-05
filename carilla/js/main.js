'use strict';

// Cuando pulse el botón se coge la carilla seleccionada y se pinta, además elegimos un numero random hasta 100 y si es par ponemos otro color

// Elementos con los que voy a trabajar
const body = document.querySelector('body');
const carilla = document.querySelector('.carilla');
const select = document.querySelector('#select');
const btn = document.querySelector('.btn');

const getRandomInt = max => Math.floor(Math.random() * Math.floor(max));


const changeMood = () => {
  
  
  carilla.innerHTML = select.value;
  
  const random = getRandomInt(100);

  if (random%2 === 0) {
    //  Si es para pone un fondo
    if (body.classList.contains('fuego-chileno') === true) {
      body.classList.remove('fuego-chileno');
    }
    
  } else {
    //  Si es impar pone otro
    if (body.classList.contains('fuego-chileno') === false) {
      body.classList.add('fuego-chileno');
    }
  }
  
};


carilla.innerHTML = select.value;

// listener del boton
btn.addEventListener('click', changeMood);