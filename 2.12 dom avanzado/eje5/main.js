'use strict';

const linkHome = document.querySelector('.menu__link-home');
const linkContact = document.querySelector('.menu__link-contact');
const linkAbout = document.querySelector('.menu__link-about');

function scroll(event) {
  event.preventDefault();
  const {
    currentTarget: {
      dataset: { id },
    },
  } = event;
  console.log('id', id);

  const section = document.querySelector(`#${id}`);
  console.log('section', section);

  const { top } = section.getBoundingClientRect();
  console.log('top', top);

  window.scrollTo(0, top - 80);

  // window.scrollTo({
  //   top: top,
  //   left: 0,
  //   behavior: 'smooth',
  // });
}

linkHome.addEventListener('click', scroll);
linkContact.addEventListener('click', scroll);
linkAbout.addEventListener('click', scroll);
