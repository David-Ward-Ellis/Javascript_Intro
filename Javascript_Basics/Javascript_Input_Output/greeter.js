let rlSync = require('readline-sync');
let addressedFirstName = rlSync.question("What's your first name?\n"); 
let addressedLastName = rlSync.question("What's your last name?\n");
console.log(`Hello, ${addressedFirstName} ${addressedLastName}!`);
