function repeat(num, word) {
 let repetition = ''
  for (let count = 1; count <= num; count += 1) {
  repetition += word
  }
  return repetition;
}

console.log(repeat(3, 'ha'))