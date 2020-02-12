// let counter = 1;
// while(counter <= 10) {
//   console.log (counter)
//   counter++
// }


// In the first code, 5 never gets loged because it does not satisfy the conditionl.
//In the second code, it is loged once before getting to the conditional.
// In the third code, I am getting a feel for how do/while works.

// 1 
let counter = 5;

while (counter < 5) {
  console.log(counter)
}

// 2
do {
  console.log (counter);
} while (counter < 5);

// 3
let nextCounter = 1;

do {
  console.log(nextCounter);
  nextCounter += 1;
} while (nextCounter <= 100);