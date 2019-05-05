const input = document.querySelector('#input');
const btn = document.querySelector('.btn');

btn.addEventListener('click', () => {
  console.log('Hola ', input.value);
  console.log(`Hola ${input.value}`);
});
