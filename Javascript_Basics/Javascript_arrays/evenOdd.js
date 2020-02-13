// Using map
let myArray = [1, 3, 6, 11, 4, 2, 4, 9, 17, 16, 0];

let evenOdd = myArray.map(function (num) {
  if (num % 2 === 0) {
    return 'even'
  } else {
    return 'odd'
  }
})

console.log(evenOdd)

// using a for loop
let evenOddArray = [];

for (i = 0; i < myArray.length; i += 1) {
  let value = myArray [i];
  if (value % 2 === 0) {
    evenOddArray.push('even');
  } else {
    evenOddArray.push('odd');
  }
}

console.log(evenOddArray);