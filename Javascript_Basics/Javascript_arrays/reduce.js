/* Practicing before exercise
let array = ['h', 'e', 'l', 'l', 'o']
 
console.log(array.reduce(function (accumulator, element ) {
    return accumulator + element;
  }, ''
)
*/

// Reduce exercise--my solution

// let numbers = [3, 5 ,7];

// function sumOfSquares(array) {
//   let sum = array.reduce((accumulator, num) => accumulator + (num * num), 0);
//   return sum;
// }

// console.log(sumOfSquares(numbers));

// Books solution

let numbers = [3, 5 ,7];

function sumOfSquares(array) {
  return array.reduce((accumulator, num) => {
    return accumulator + (num * num);
   }, 0);
}

console.log(sumOfSquares(numbers));