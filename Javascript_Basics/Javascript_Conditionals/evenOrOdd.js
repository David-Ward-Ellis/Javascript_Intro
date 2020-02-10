/* Two possible ways of writing the initial evenOrOdd problem

function isEven(number) {
  if (number % 2 === 0) {
    console.log (`${number} is even`)
  } else console.log(`${number} is odd`)
}

isEven(8);
isEven(9);
isEven(100000052);
isEven(100000053);


function isEven(number) {
  number % 2 === 0 ? console.log(`${number} is even`) : console.log(`${number} is odd.`)
}

isEven(8);
isEven(9);
*/

// Without using the javascript library for Number.isInteger()

// function isEven(number) {
//   if (number % 1 !== 0) {
//     console.log (`Error: ${number} must be an integer.`)
//   } else if (number % 2 === 0) {
//     console.log (`${number} is even`)
//   } else {
//       console.log(`${number} is odd`);
//       }
// }

// isEven (10.25);
// isEven(895);
// isEven(892);

// Using the javascript library for Number.isInteger()

function isEven(number) {
  if (!Number.isInteger(number)) {
    console.log(`Error: ${number} is not an integer. Please use a differnt number.`)  
    // return; //why is return necessary here? I ran it without it, and it worked the same way.
}  
  if (number % 2 === 0) {
    console.log (`${number} is even`)
  } else {
  console.log(`${number} is odd`)
  }
}

isEven (10.25);
isEven(895);
isEven(892);