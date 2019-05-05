'use strict';

const btn = document.querySelector('.btn');
const repos = document.querySelector('.repos');
const org = document.querySelector('#org');

function addImage() {
  fetch(`https://api.github.com/orgs/${org.value}`)
    .then(response => response.json())
    .then(data => {
      if (data.repos_url) {
        fetch(data.repos_url)
          .then(response => response.json())
          .then(result => {
            console.log('result', result);
            let content = '';
            for (const repo of result) {
              content += `<li>${repo.name}</li>`;
            }
            repos.innerHTML = content;
          });
      }
    });
}

btn.addEventListener('click', addImage);
