let randomNumber = Math.round(Math.random());

// if (randomNumber) { // I had randomNumber === 1 because I forgot it would translate as truthy if 1
//   console.log('Yes!')
// } else {
//   console.log('No!')
// }

randomNumber ? console.log('Yes!') : console.log('No!')

console.log(randomNumber ? 'Yes!' : 'No!') // alternative