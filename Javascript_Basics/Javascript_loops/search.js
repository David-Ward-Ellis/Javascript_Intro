let array = [3, 1, 9, 7, 5, 2, 6, 4, 8];
let indexOfFive = -1;

for (let i = 0; i < array.length; i += 1) {
  if (array[i] === 5){
    indexOfFive = i;
    break;
  }
}

console.log(indexOfFive);

// I'm not understanding why we are using -1; what does it mean to say that we intialize using this
// when the array does not have the desired value?