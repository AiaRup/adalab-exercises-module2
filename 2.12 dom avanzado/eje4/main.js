'use strict';

const container = document.querySelector('.container');
const height = container.offsetHeight;

console.log(height);

container.setAttribute('style', `height: ${height * 0.33}px;`);
