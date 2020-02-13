let arr = ['a', 'abcd', 'abcde', 'abc', 'ab']

// let arrayLengths = arr.map(function(value){
//   return value.length
// })

// let oddArray = []
// function oddLengths(array) {
//   array.filter(function(value) {
//     if (value % 2 !== 0) {
//       oddArray.push(value);
//     }
//   })
// }

// oddLengths(arrayLengths)
// console.log(oddArray)
 
function oddLengths(array) {
  let filteredArray = array.map((letters) => {
  return letters.length;
  }).filter((number) => {
    return number % 2 === 1
  })
  return filteredArray;
} 
console.log(oddLengths(arr))