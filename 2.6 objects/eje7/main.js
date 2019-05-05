'use strict';
const job = 'developer';

const user = {};

(user.firstName = 'Aia'), (user['familyName'] = 'Rupsom');
user.age = 30;
user.job = job;

console.log(`Mi nombre es ${user.firstName}, tengo ${user.age} años y soy ${user.job}`);

user.firstName = 'Vero';
user.age++;

console.log(`Mi nombre es ${user.firstName}, tengo ${user.age} años y soy ${user.job}`);
