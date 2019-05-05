'use strict';

const list = document.querySelector('.list');

const numbers = [1, 2, 3];

for (const item of numbers) {
  const listItem = document.createElement('li');
  const text = document.createTextNode(item);
  listItem.appendChild(text);
  list.appendChild(listItem);
}
