let rlSync = require ('readline-sync');
let name = rlSync.question("What's your name?\n");
console.log(`Good morning, ${name}!`);

let impress = require ('readline-sync');
let answer = impress.question("Are you impressd?\n")
if (answer.toLowerCase() === 'yes') {
  console.log(`Thank you, ${name}!`)
} else console.log ('Oh, darn!');