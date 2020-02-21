let str = 'launch school tech & talk';
let strCopy = str.split(' ');
let capitalizedWords = [];
let i;

for (i = 0; i < strCopy.length; i += 1) {
  let word = strCopy[i];

  capitalizedWords.push(word[0].toUpperCase() + word.slice(1))
}

// console.log(capitalizedWords.join(' '));

let capWord = strCopy.map(word => word[0].toUpperCase() + word.substring(1)). join(' ');

console.log(capWord);

// Why does this version: let capWord = strCopy.map(word => {word[0].toUpperCase() + word.substring(1)})
// return undefined?