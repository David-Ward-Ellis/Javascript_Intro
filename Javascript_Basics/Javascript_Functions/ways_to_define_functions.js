// Function Declaration--can be called before defined
greeting('Hi there!');

function greeting(message) {
  console.log(message)
}

// Function Expression--must be defined before called; have the advantage of being manipulated as a variable
let greetPeople = function () {
  console.log('Good morning')
}

greetPeople();

// Arrow Functions--has properties that are useful in object-oriented programing
let greetingPeople = () => console.log('Good afternoon');
greetingPeople();

// See function_arrow.js
