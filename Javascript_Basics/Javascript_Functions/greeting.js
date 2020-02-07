// Functions Using Global Variables
let greetingMessage = 'Good morning!';
console.log(greetingMessage);

function greetPeople() {
  console.log(greetingMessage) // makes use of the global scope within a function
}

function changeGreetingMessage(newMessage) {
  greetingMessage = newMessage //changes the global scope within a function
  console.log(greetingMessage); 
}

greetPeople();
changeGreetingMessage('Good evening!');

// Functions using only local variables

// function greetingPeople() {
//   let greeting = "Good morining!" // With hard-coded local variable
//   console.log(greeting)
// }

// greetingPeople()

function greetingPeople(message) {
  console.log(message) // The parameter is the local variable
}

greetingPeople('Good afternoon!');