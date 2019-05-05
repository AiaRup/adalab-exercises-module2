'use strict';

const workWithMovies = () => {
  const movies = ['Dumbo', 'Aladin', 'Lion King'];
  movies[3] = 'Playa';
  console.log(movies);

  movies[3] = '12 monkeys';
  console.log(movies);

  movies[3] = 'Moon';
  console.log(movies);
};

workWithMovies();
