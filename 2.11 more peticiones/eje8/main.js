'use strict';
const btn = document.querySelector('.btn');
const input = document.querySelector('#input');
const resultText = document.querySelector('.result');

const paintResult = data => {
  resultText.innerHTML += `<p>${data}</p>`;
};

const fetchApi = value => {
  fetch(`https://swapi.co/api/people/?search=${value}`)
    .then(response => response.json())
    .then(data => {
      resultText.innerHTML = '';
      const arr = [];
      for (const result of data.results) {
        paintResult(result.name);
        arr.push(result.name);
      }
      localStorage.setItem(`${value}`, JSON.stringify(arr));
    })
    .catch(error => console.log('error', error));
};

const getApiData = () => {
  const { value } = input;
  const localContaent = JSON.parse(localStorage.getItem(`${value}`));
  if (localContaent) {
    resultText.innerHTML = '';
    for (const name of localContaent) {
      paintResult(name);
    }
  } else {
    fetchApi(value);
  }
};

btn.addEventListener('click', getApiData);
