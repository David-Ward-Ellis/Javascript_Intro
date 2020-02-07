//My solution--the more verbose version; one difference is I set a defalut value
function times(number1, number2 = 1) {
  let result = number1 * number2;
  console.log(result);
  return result
}

let factorial1 = times(1);
let factorial2 = times(factorial1, 2);
let factorial3 = times(factorial2, 3);
let factorial4 = times(factorial3, 4);
let factorial5 = times(factorial4, 5);

//The books other solution--more terse but more economical; again, they add an extra "1" because didn't
// set default value

times(times(times(times(times(1), 2), 3), 4), 5)