const item1 = document.querySelector('.item--1');
console.log(item1); // Devuelve una representación del elemento como HTML
console.dir(item1); // Devuelve una representación del elemento como objeto

const mother = item1.parentElement;

console.log(
  `La madre de nuestro elemento es un <${mother.nodeName.toLowerCase()}> y tiene la clase .${
    mother.className
  }`
);
// Devuelve "La madre de nuestro elemento es un <ul> y tiene la clase .items"

const newItem = document.createElement('li');
const newContent = document.createTextNode('Item nuevo');
newItem.appendChild(newContent);

const items = document.querySelector('.items');
items.appendChild(newItem);

// remove element from the dom
items.remove();

const itemList = document.querySelector('.items');
const item2 = itemList.querySelector('.item--2');
itemList.removeChild(item2);
// Elimina el elemento con clase .item--2 que es descendiente de .items

// Si tenemos <input type="text" name="firstname" id="firstname" value="Ada">
const nameInput = document.querySelector('#firstname');

console.log(nameInput.value); // Pintará el valor actual, 'Ada'
nameInput.value = 'Joan'; // Rellenará el input con el valor 'Joan'

/*
Para poner un estilo, lo asignaremos usando la siguiente notación
style.propiedadCSS = 'valor'

De esta forma no modificaremos los estilos previamente asignados

Si la propiedad CSS tiene un guión (background-color) lo convertiremos a camelcase
backgroundColor
*/
nameInput.style.backgroundColor = 'red';

/*
Si queremos poner varios estilos a la vez o sobreescribir los anteriores,
usaremos esta notación
*/
nameInput.style = 'color: red; color: blue;';

// Si tenemos <label class="firstname-label" for="firstname"></label>
const label = document.querySelector('.firstname-label');
label.getAttribute('for'); // devolverá firstname

// Si tenemos <label class="firstname-label"></label>
const label = document.querySelector('.firstname-label');
label.setAttribute('for', 'firstname'); // asignará for="firstname" al label
