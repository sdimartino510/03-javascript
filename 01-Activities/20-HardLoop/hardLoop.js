const myFarm = [
  'chickens',
  'pigs',
  'cows',
  'horses',
  'ostriches'
];

myFarm.forEach(item => console.log(item));

console.log('\n');

myFarm.forEach(item => {
  if (item[0] === 'c' || item[0] === 'o') {
    console.log('starts with "c" or "o"!');
  } else {
    console.log('doesn\'t start with "c" or "o"');
  }
});