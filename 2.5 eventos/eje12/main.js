'use strict';

const teachers = document.querySelector('.teachers');

function selectTeacher(event) {
  const guilty = event.target;
  console.log('guilty', guilty);

  const listItem = guilty.closest('.teacher');
  console.log('item', listItem);

  const favorite = listItem.querySelector('.favorite');

  listItem.classList.toggle('teacher--selected');
  if (listItem.classList.contains('teacher--selected')) {
    favorite.innerHTML = 'Quitar';
  } else {
    favorite.innerHTML = 'Añadir';
  }
}
teachers.addEventListener('click', selectTeacher);
