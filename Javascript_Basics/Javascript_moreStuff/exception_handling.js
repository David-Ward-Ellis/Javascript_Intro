let names = ['Joe', 'Jill', 'Jack', undefined, 'Jose']

names.forEach(name => {
  try {
    console.log(`${name}'s name has ${name.length} letters`)
  } catch (exception) {
    console.log('Something went wrong')
  }
});