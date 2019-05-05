const users = [
  { name: 'Nymphadora Tonks', time: 9 },
  { name: 'Cedric Diggory', time: 28 },
  { name: 'Cho Chang', time: 35 },
  { name: 'Luna Lovegood', time: 45 },
  { name: 'Gregory Goyle', time: 56 },
];

const [first, second, third] = users;

const print = ({ name, time }) => {
  console.log(`name: ${name}, time: ${time}`);
};

print(first);
print(second);
print(third);
