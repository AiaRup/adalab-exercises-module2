'use strict';

const linkHome = document.querySelector('.menu__link-home');
const linkContact = document.querySelector('.menu__link-contact');
const linkAbout = document.querySelector('.menu__link-about');

function prevent(event) {
  console.log(event);
  event.preventDefault();
}

linkHome.addEventListener('click', prevent);
linkContact.addEventListener('click', prevent);
linkAbout.addEventListener('click', prevent);
