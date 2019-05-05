'use strict';
const userInput = document.querySelector('#user');
const usernameText = document.querySelector('.username');
const img = document.querySelector('.img');
const repoNum = document.querySelector('.repoNum');
const btn = document.querySelector('.btn');

const updateDataOnPage = result => {
  const name = result.login;
  const imgUrl = result.avatar_url;
  const numberRepo = result.public_repos;
  usernameText.innerHTML = name;
  img.src = imgUrl;
  img.alt = `photo of ${name}`;
  repoNum.innerHTML = numberRepo;
};

const getApiData = user => {
  fetch(`https://api.github.com/users/${user}`)
    .then(response => response.json())
    .then(data => {
      updateDataOnPage(data);
    })
    .catch(error => console.log('error', error));
};

const getUsername = () => {
  const userName = userInput.value;
  getApiData(userName);
};

btn.addEventListener('click', getUsername);
