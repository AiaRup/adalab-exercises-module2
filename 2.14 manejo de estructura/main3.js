const users = [
  { name: 'Nymphadora Tonks', time: 9 },
  { name: 'Cedric Diggory', time: 28 },
  { name: 'Cho Chang', time: 35 },
  { name: 'Luna Lovegood', time: 45 },
  { name: 'Gregory Goyle', time: 56 },
];

const newObj = { name: 'Argus Filch', time: 78 };

const newArray = [...users, newObj];

console.log(newArray);
