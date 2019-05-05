'use strict';

const input = document.querySelector('#input');
let paragraph = document.querySelector('.text');

const updateContent = () => {
  paragraph.innerHTML = input.value;
  localStorage.setItem('content', input.value);
};

const onLoad = () => {
  const localContent = localStorage.getItem('content');
  if (localContent) {
    input.value = localContent;
    paragraph.innerHTML = localContent;
  }
};

onLoad();
input.addEventListener('keyup', updateContent);
