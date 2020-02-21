// My initial solution--not quite simple or elegant
// function isBlank(word) {
//   if (word === '') {
//     return true
//   } else {
//     return false
//   }
// }


/* for is blank? 1
let isBlank = str => {return str.length === 0}
*/

/* for is blank 2
let isBlank = str => {return str.trim().length === 0}
*/

let isBlank = str => {return str.trim().length === 0}

console.log(isBlank('mars'));
console.log(isBlank(' '));
console.log(isBlank(''));

