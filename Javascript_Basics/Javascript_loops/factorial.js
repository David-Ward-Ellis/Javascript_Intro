// My solution--prior to this verions, I had return where console.log is, and used console.log with the function caller

function findFactorial(number, factorial = 1) {
  for (let multiplier = 1; multiplier <= number; multiplier += 1) {
    factorial = factorial * multiplier;
    
  }    
  console.log(factorial);
}

findFactorial(0);
findFactorial(1);
findFactorial(2);
findFactorial(3);
findFactorial(4);
findFactorial(5);
findFactorial(6);
findFactorial(7);
findFactorial(8);
/*Books solution--I knew that I needed two numbers to multiply and to retain the value of that result for a new
muiltiplication operation: I was stuck on how to assign a value of one to one of the numbers to begin the process.
My solution was to set it as a parameter within the function declaration. The book solution assigns it within the function in 
a different way. 


The book also use the simpler syntac of *= and the process of counting down to one, not counting up the number
passed into the function as an argument.
*/
function factorial(number) {
  let result = 1;
  for (let counter = number; counter > 0; counter -= 1) {
  result *= counter
  }
  return result
}

console.log(factorial(0));
console.log(factorial(1));
console.log(factorial(2));
console.log(factorial(3));
console.log(factorial(4));
console.log(factorial(5));
console.log(factorial(6));
console.log(factorial(7));
console.log(factorial(8));

