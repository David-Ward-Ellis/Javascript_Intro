function greeter (prompt) {
  let rlSync = require('readline-sync')
  let name = rlSync.question(prompt); 
  return name 
}

let firstName = greeter("What's your first name?\n")
let lastName = greeter("What's your last name?\n")
console.log(`Hello ${firstName} ${lastName}`)