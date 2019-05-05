'use strict';

const inputName = document.querySelector('#name');
const inputLastName = document.querySelector('#lastName');
let paragraph = document.querySelector('.textName');
let paragraph2 = document.querySelector('.textLastName');

let user = {
  name: '',
  lastName: '',
};

const updateContent = (e, par) => {
  const {
    currentTarget: { id },
  } = e;
  const { currentTarget } = e;
  console.log(id);
  console.log(currentTarget);

  user[id] = currentTarget.value;
  par.innerHTML = currentTarget.value;
  localStorage.setItem('user', JSON.stringify(user));
};

const onLoad = () => {
  const localContent = JSON.parse(localStorage.getItem('user'));
  if (localContent) {
    user = localContent;
    const { name, lastName } = localContent;
    inputName.value = name;
    inputLastName.value = lastName;
    paragraph.innerHTML = name;
    paragraph2.innerHTML = lastName;
  }
};

onLoad();
inputName.addEventListener('keyup', e => {
  updateContent(e, paragraph);
});
inputLastName.addEventListener('keyup', e => {
  updateContent(e, paragraph2);
});
