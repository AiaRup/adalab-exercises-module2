'use strict';

const input1 = document.querySelector('#movie1');
const input2 = document.querySelector('#movie2');
const btn = document.querySelector('.btn');
const text = document.querySelector('.text');

const getMovies = event => {
  event.preventDefault();
  const movies = [];
  movies.push(input1.value);
  movies.push(input2.value);

  text.innerHTML = '';
  for (const movie of movies) {
    text.innerHTML += `<p>¡A mí también me encantó ${movie}! Tenemos mucho en común, humana.</p>`;
  }
};

btn.addEventListener('click', getMovies);
