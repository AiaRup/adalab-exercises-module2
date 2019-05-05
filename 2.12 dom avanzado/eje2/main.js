'use strict';

const images = document.querySelectorAll('img');
const select = document.querySelector('.selectCity');

const madrid = [
  'https://images.unsplash.com/photo-1539037116277-4db20889f2d4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
  'https://images.unsplash.com/photo-1551792343-d9c6f7255970?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=675&q=80',
  'https://images.unsplash.com/photo-1523544135860-722ae770053e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1355&q=80',
];

const ny = [
  'https://images.unsplash.com/photo-1506598417715-e3c191368ac0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80',
  'https://images.unsplash.com/photo-1534430480872-3498386e7856?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
  'https://images.unsplash.com/photo-1518235506717-e1ed3306a89b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
];

const paris = [
  'https://images.unsplash.com/photo-1511739001486-6bfe10ce785f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80',
  'https://images.unsplash.com/photo-1509041322357-8a3f9757a475?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=628&q=80',
  'https://images.unsplash.com/photo-1499856871958-5b9627545d1a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1307&q=80',
];

const fireEvent = () => {
  const event = new Event('change');
  select.dispatchEvent(event);
};

const changeImages = e => {
  const city = e.currentTarget.value;
  // let array = city === 'ny' ? ny : city === 'paris' ? paris : madrid;
  let array = [];
  if (city === 'ny') {
    array = ny;
  } else if (city === 'paris') {
    array = paris;
  } else {
    array = madrid;
  }

  for (let i = 0; i < images.length; i++) {
    images[i].setAttribute('src', array[i]);
  }
};

select.addEventListener('change', changeImages);
fireEvent();
