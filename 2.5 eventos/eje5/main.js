const body = document.querySelector('body');

document.addEventListener('keypress', event => {
  console.log(event);
  if (event.key === 'r') {
    body.classList.add('red');
    body.classList.remove('purple');
  } else if (event.key === 'm') {
    body.classList.remove('red');
    body.classList.add('purple');
  } else {
    body.classList.remove('red');
    body.classList.remove('purple');
  }
});
