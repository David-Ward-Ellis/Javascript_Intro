// Using entries and fromEntries

function clone(obj) {
  let cloneArray = Object.entries(obj);
  let cloneObject = Object.fromEntries(cloneArray);
  return cloneObject;
};

let person = {
  title: 'Duke',
  name: 'Nukem',
  age: 33
};

let clonedPerson = clone(person);
person.age = 34;

console.log(person.age);
console.log(clonedPerson.age);
console.log(person);
console.log(clonedPerson);

// using assign

function clone(obj) {
  return Object.assign({}, obj)
};