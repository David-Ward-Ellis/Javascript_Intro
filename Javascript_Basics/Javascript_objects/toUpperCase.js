/* My solution, which does not mutate the object but doesn't actually 
generate an array; I am confused, then, what it means to say that 
Object.keys returns an array -- in the console, the print out did not
look like an array.
*/

let obj = {
  b: 2,
  a: 1,
  c: 3
}

// let array = Object.keys(obj)

// array.forEach(key => console.log(key.toUpperCase()))

// console.log(obj)

//Two book solutions

// 1. Using map

let upperCaseArray1 = Object.keys(obj).map(key => key.toUpperCase());

console.log(upperCaseArray1);

// 2. Using forEach

let upperCaseArray2 = [];
Object.keys(obj).forEach(function(key) {
  upperCaseArray2.push(key.toUpperCase())
})

console.log(upperCaseArray2)