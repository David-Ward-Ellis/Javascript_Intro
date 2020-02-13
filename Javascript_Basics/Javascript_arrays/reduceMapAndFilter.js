//My solution
// let arr = ['a', 'abcd', 'abcde', 'abc', 'ab']

// function oddLengths(array) {
//   let oddArray = array.reduce ((accumulator, value) => {
//     if (value.length % 2 !== 0) {
//     let num = value.length
//       accumulator.push(num);
//     }
//     return accumulator
//   }, [])
//   return oddArray
// }  



// console.log(oddLengths(arr));

//Books solution

function oddLengths(arr) {
  return arr.reduce((filteredNumbersArray, letters) => {
    let length = letters.length;
    if (length % 2 === 1) {
      filteredNumbersArray.push(length);
    }

    return filteredNumbersArray;
  }, []);
}

let arr = ['a', 'abcd', 'abcde', 'abc', 'ab'];
console.log(oddLengths(arr));