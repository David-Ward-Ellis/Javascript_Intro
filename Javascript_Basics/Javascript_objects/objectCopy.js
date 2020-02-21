/* My attempt, which didn't work. It was able to retrieve and copy the
values but not the keys
*/
let objToCopy = {
  name: 'Isaac',
  age: 3,
  birthday: 'March, 28th 2017'
}

// let newObject1 = {}
// for(let prop in objToCopy) {
//   newObject1.prop = objToCopy[prop] 
//   console.log(newObject1)
// }

// Book's solution

function copyObject(sourceObject, keys) {
  let destinationObject = {};

  if (keys) {
    keys.forEach(function (key) {
      destinationObject[key] = sourceObject[key]
    });
    return destinationObject;
  } else {
    return Object.assign (destinationObject, sourceObject);
  }
}

let newObject = copyObject(objToCopy);
console.log(newObject.name);
console.log (newObject);

let newObject1 = copyObject(objToCopy, ['name', 'age']);
console.log (newObject1.age);
console.log(newObject.name);


