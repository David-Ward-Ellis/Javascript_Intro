// Using a while loop
// let names = ['Kevin', 'James','Naveed', 'Beatrice', 'Isaac'];
// let upperNames = [];
// let index = 0;

// while (index < names.length) {
//   let upperCaseNames = names[index].toUpperCase();
//   upperNames.push(upperCaseNames);
//   index += 1;
// }

// console.log(upperNames);

// Using a for loop
// let names = ['Kevin', 'James','Naveed', 'Beatrice', 'Isaac'];
// let upperNames = [];
// for (index = 0; index < names.length; index += 1) {
//   let upperCaseNames = names[index].toUpperCase();
//   upperNames.push(upperCaseNames);
// }

// console.log(upperNames);

// Using continue 

let names = ['Kevin', 'James','Naveed', 'Beatrice', 'Isaac'];
let upperNames = [];

for (index = 0; index < names.length; index += 1) {
  if (names[index] === 'Naveed') continue;
  
  let upperCaseNames = names[index].toUpperCase();
  upperNames.push(upperCaseNames);
}

console.log(upperNames);