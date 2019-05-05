'use strict';
const name = document.querySelector('#name');
const lastName = document.querySelector('#lastName');
const phone = document.querySelector('#phone');
const select = document.querySelector('.selectUser');

const users = [
  {
    name: 'Ariane',
    lastName: 'Jurado',
    phone: '634941548',
  },
  {
    name: 'Aia',
    lastName: 'Rupsom',
    phone: '611167722',
  },
  {
    name: 'Lara',
    lastName: 'Rodriguez',
    phone: '675432111',
  },
];

const bulidSelect = arr => {
  for (let i = 0; i < arr.length; i++) {
    const option = document.createElement('option');
    option.value = i;
    const text = document.createTextNode(arr[i].name);
    option.appendChild(text);
    select.appendChild(option);
  }
};

const autoComplete = () => {
  let item = users[parseInt(select.value)];
  name.value = item.name;
  lastName.value = item.lastName;
  phone.value = item.phone;
};

bulidSelect(users);
autoComplete();

select.addEventListener('click', autoComplete);
