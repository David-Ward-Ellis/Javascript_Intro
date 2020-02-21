let vehicle = {
  manufacturer: 'Tesla',
  model: 'Model X',
  year: 2015,
  range: 295,
  seats: 7
};

let keys = Object.keys(vehicle);

console.log(keys)

let k = [];

for(prop in vehicle) {
  k.push(prop)
};
console.log(k);

let person = {
  title: 'Duke',
  name: 'Nukem',
  age: 33
}

let array = Object.entries(person);
console.log(array);