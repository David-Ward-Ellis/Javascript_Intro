let person = {
  name: 'Bob',
  age: 23,
  height: 5.5
};

let personKeys = Object.keys(person);

personKeys.forEach(key => console.log(key));