// My attempt before looking at solution
function getProduct (prompt) {
  let rlSync = require('readline-sync');
  let number = rlSync.question(prompt);
  return number;
}

let firstNumber = getProduct('Enter your first number: ');
let secondNumber = getProduct('Enter your second number: ');
let product = firstNumber * secondNumber;
console.log(`${firstNumber} * ${secondNumber} = ${product}`)

// Solution in book--probably better (more powerful? more elegant?) method

function multiply (left, right) {
  return left * right
}

function getProduct (prompt) {
  let rlSync = require('readline-sync');
  return parseFloat(rlSync.question(prompt));
}

let left = getProduct('Enter your first number: ');
let right = getProduct('Enter your second number: ');
console.log(`${left} * ${right} = ${multiply(left, right)}`)