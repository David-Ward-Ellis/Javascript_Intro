// My solution--similar to first solution in book, except uses forEach
function allMatches(array, stringMatch) {
  let newArray = [];
  array.forEach (word => {
    if (word.match(stringMatch)) {
      newArray.push(word);
    }
  });
  return newArray;
}

let wordArray = [
  'laboratory',
  'Experiment',
  'flab',
  'Pans Labryinth',
  'elaborate',
  'polar bear'
]

console.log(allMatches(wordArray, /lab/g));

// First book solution--uses a for loop and the index number of the element in the array
function allMatches(words, pattern) {
  let matches = [];
  for (let index = 0; index < words.length; index += 1) {
    if (pattern.test(words[index])) {
      matches.push(words[index]);
    }
  }

  return matches;
}

// Second book solution--most simple and elegent, using an arrow Array and filter
function allMatches(words, pattern) {
  return words.filter((word) => pattern.test(word));
}