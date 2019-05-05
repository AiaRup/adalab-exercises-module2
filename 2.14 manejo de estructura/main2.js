const users = [
  { name: 'Nymphadora Tonks', time: 9 },
  { name: 'Cedric Diggory', time: 28 },
  { name: 'Cho Chang', time: 35 },
  { name: 'Luna Lovegood', time: 45 },
  { name: 'Gregory Goyle', time: 56 },
];

const [
  { name: name1, time: time1 },
  { name: name2, time: time2 },
  { name: name3, time: time3 },
] = users;

const print = (nombre, tiempo) => {
  console.log(`name: ${nombre}, time: ${tiempo}`);
};

print(name1, time1);
print(name2, time2);
print(name3, time3);
