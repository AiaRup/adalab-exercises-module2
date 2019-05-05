'use strict';
const btn = document.querySelector('.btn');
const input = document.querySelector('#input');
const resultText = document.querySelector('.result');

const getApiData = () => {
  const value = input.value;
  // fetch(`https://swapi.co/api/people/${value}`, {
  //   method: 'POST',
  //   headers: {
  //     'Content-Type': 'application/json',
  //   },
  //   body: JSON.stringify({ adalaber: 1 }),
  // })
  //   .then(response => response.json())
  //   .then(data => {
  //     console.log('data', data);
  //   })
  //   .catch(error => console.log('error', error));
  fetch(`https://swapi.co/api/people/?search=${value}`)
    .then(response => response.json())
    .then(data => {
      resultText.innerHTML = '';
      console.log('data', data.results);
      for (const result of data.results) {
        resultText.innerHTML += `<p>${result.name}</p>`;
      }
    })
    .catch(error => console.log('error', error));
};

btn.addEventListener('click', getApiData);
