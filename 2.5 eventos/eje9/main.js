'use strict';

const isra = document.querySelector('.teacher--isra');
const nasi = document.querySelector('.teacher--tuerto');
const carlos = document.querySelector('.teacher--nasi');

function selectTeacher(event) {
  const listItem = event.currentTarget;
  const favorite = listItem.querySelector('.favorite');

  listItem.classList.toggle('teacher--selected');
  if (listItem.classList.contains('teacher--selected')) {
    favorite.innerHTML = 'Quitar';
  } else {
    favorite.innerHTML = 'Añadir';
  }
}

isra.addEventListener('click', selectTeacher);
nasi.addEventListener('click', selectTeacher);
carlos.addEventListener('click', selectTeacher);
