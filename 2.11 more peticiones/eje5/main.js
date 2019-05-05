'use strict';

const themeClaro = document.querySelector('#claro');
const themeOscuro = document.querySelector('#oscuro');
const body = document.querySelector('body');

const changeBc = () => {
  if (themeClaro.checked) {
    body.classList.add('claro');
    body.classList.remove('oscuro');
    setItem('claro');
  } else {
    body.classList.add('oscuro');
    body.classList.remove('claro');
    setItem('oscuro');
  }
};

function checkLocal() {
  const theme = getItem();
  if (theme) {
    if (theme === 'claro') {
      body.classList.add('claro');
      body.classList.remove('oscuro');
      themeClaro.checked = true;
      themeOscuro.checked = false;
    } else {
      body.classList.add('oscuro');
      body.classList.remove('claro');
      themeClaro.checked = false;
      themeOscuro.checked = true;
    }
  } else {
    body.classList.add('claro');
    themeClaro.checked = true;
  }
}

function setItem(theme) {
  localStorage.setItem('theme', theme);
}
function getItem() {
  return localStorage.getItem('theme');
}

checkLocal();
themeClaro.addEventListener('change', changeBc);
themeOscuro.addEventListener('change', changeBc);
