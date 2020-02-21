let student = {
  name: 'Carmen',
  age: 14,
  grade: 10,
  courses: ['biology', 'algebra', 'composition', 'ceramics'],
  gpa: 3.75,
};

console.log(student.courses)


let jane = {
  firstName: 'Jane',
  lastName: 'Harrelson',
  age: 32,
  location: {
    country: 'Denmark',
    city: 'Aarhus'
  },
  occupation: 'engineer',
  greet: name => console.log(`Hej, ${name}!`) // As arrow function is an ES6 feature, might not be best in
                                              // such cases. 
}

console.log(jane.location.country)
jane.greet('Bobby')