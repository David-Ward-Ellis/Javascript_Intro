// My solution--it works but is less elegent and simple, since it requires an if statement
let array = [1, 3,'hi', NaN, null, '2', 3.56, "I'm an integer", 7, 8];

// let integerArray = array.filter(function(value){
//   if (Number.isInteger(value)) {
//     return value;
//   }
// })

// console.log(integerArray);

// Book's solution
// let integerArray = removeNonIntenger(array)

// function removeNonIntenger(array) {
//   return array.filter(function(element) {
//     return Number.isInteger(element);
//   })
// }

// console.log(integerArray)

// Book's shorter solution, since Number.isInteger is itself a function and filter doesn't do anything except
// call a function

let integerArray = removeNonIntenger(array)

function removeNonIntenger(array) {
  return array.filter(Number.isInteger);
  }

console.log(integerArray) 