let weather = 'snow storm';

// if (weather === 'sunny') { 
//   console.log("Let's go outside!")
// } else if(weather === 'rainy') {
//   console.log("Get an umbrella!")
// } else {
//   console.log("Let's stay inside")
// } 

switch (weather) {
  case 'sunny':
    console.log("Let's go outside!");
    break;
  case 'rainy': 
    console.log('Get an umbrella!');
    break;
  case 'too hot':
    console.log('Stay inside!');
    break;
  default:
    console.log('You decide');
}