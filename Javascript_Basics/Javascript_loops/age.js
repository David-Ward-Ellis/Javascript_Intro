let rlSync = require('readline-sync');
let age = rlSync.question ('How old are you?\n');
age = parseInt(age);
console.log(`You are currently ${age} years old`);
for (let future = 10; future <= 40; future += 10) {
  console.log(`In ${future} years, you will be ${future + age} years old.`)
}


