// let a = 8;

// switch (a) {
//   case 5:
//   case 6:
//   case 7:
//     console.log ('a is 5, 6, or 7');
//   break;
//   case 8:
//   case 9:
//   case 10:
//     console.log ('a is 8, 9, or 10');
//   break;
//   default:
//     console.log ('a is not 5, 6, 7, 8, 9, or 10');
//   break;
// }

/* In the following, I expected all three strings to log to the console, but only the last on did. 
I thought this because of the example given in the book, that is what happened when the "break"
was not used. 
Is it different because I used strings instead of numbers?
*/

// let proposition = 'either a or b'

// switch (proposition) {
//   case 'a':
//     console.log ('You are right!');
//   case 'b':
//     console.log ('You are right!');
//   default:
//     console.log ('There is no dichotomy!');
// }

// The following worked as expected:

// let a = 5

// switch (a) {
//   case 5:
//     console.log ('a is 5');
//   case 6:
//     console.log ('a is 6');
//   default:
//     console.log ('a is neither 5 nor 6');
// }