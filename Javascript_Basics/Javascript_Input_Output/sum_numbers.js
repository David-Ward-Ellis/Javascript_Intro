// Using addition -- Number () is necessary
// let rlSync = require('readline-sync');
// let number1 = Number(rlSync.question('Enter the first number\n'));
// let number2 = Number(rlSync.question('Enter the second number\n'));
// let sum = number1 + number2;

// console.log(`The sum of ${number1} and ${number2} is ${sum}`)

// Using multipilcation -- Number () is not necessary
let rlSync = require('readline-sync');
let number1 = rlSync.question('Enter the first number\n');
let number2 = rlSync.question('Enter the second number\n');
let product = number1 * number2;

console.log(`The product of ${number1} and ${number2} is ${product}`)