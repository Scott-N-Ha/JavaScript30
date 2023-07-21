const dogs = [{
  name: 'Snickers',
  age: 2
}, {
  name: 'hugo',
  age: 8
}];

function makeGreen() {
  const p = document.querySelector('p');
  p.style.color = '#BADA55';
  p.style.fontSize = '50px';
}
// Right-click element, select 'Break On'

// Regular
console.log('hello');

// Interpolated
console.log('Hello I am a %s string', 'poop');
console.log(`Hello I am a ${'poop'} string`);

// Styled
console.log('%c I am some great text', 'font-size:50px; background: red; text-shadow: 10px 10px 0 blue;');

// warning!
console.warn('Oh No!');

// Error :|
console.error('Error!');

// Info
console.info('Crocodiles eat 3-4 people per year');

// Testing
const p = document.querySelector('p');
console.assert(p.classList.contains('ouch'), 'p does not contain ouch');

// clearing
// console.clear();

// Viewing DOM Elements
console.log(p);
console.dir(p);

// Grouping together
dogs.forEach(dog => {
  console.groupCollapsed(`${dog.name}`);
  // console.group(`${dog.name}`);
  console.log(`This is ${dog.name}`)
  dogs.forEach(dog => console.log(`${dog.name} is ${dog.age} years old`));
  console.groupEnd(`${dog.name}`);
});

// counting
console.count('Wes');
console.count('Wes');
console.count('Wes');
console.count('Wes');

// timing
console.time('fetching data');
fetch('https://api.github.com/users/scott-n-ha')
  .then(data => data.json())
  .then(data => {
    console.timeEnd('fetching data');
    console.table(data);
  });