let person = {
  name: 'Bob',
  age: 23,
  height: 5.5
};

for (let prop in person) {
  console.log(person[prop]);
}