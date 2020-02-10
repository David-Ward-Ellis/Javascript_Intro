// My solution
// function toCapsOrNOt(word) {
//   if (word.length > 10) {
//     console.log (word.toUpperCase())
//   } else {
//     console.log (word);
//   }
// }

// toCapsOrNOt('hello world');
// toCapsOrNOt('goodbye');

// First solution in book

// function toCapsOrNOt(word) {
//   if (word.length > 10) {
//     return word.toUpperCase()
//   } else {
//    return word;
//   }
// }

// console.log(toCapsOrNOt('hello world'))
// console.log(toCapsOrNOt('goodbye')) 

// Second solution in book

function toCapsOrNOt(word) {
  return word.length > 10 ? word.toUpperCase() : word
}

console.log(toCapsOrNOt('hello world'))
console.log(toCapsOrNOt('goodbye'))