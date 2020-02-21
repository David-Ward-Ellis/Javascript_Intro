let nestedArray = [['title', 'Duke'], ['name', 'Nukem'], ['age', 33]];

let object = {};

for (let i = 0; i < nestedArray.length; i += 1) {
  object[nestedArray[i][0]] = nestedArray[i][1];
}

console.log(object)