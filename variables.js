// Exercises: Variables

// The Fortune Teller

// Why pay a fortune teller when you can just program your fortune yourself?

// Store the following into variables: number of children, partner's name, geographic location, job title.
// Output your fortune to the screen like so: "You will be a X in Y, and married to Z with N kids."

// function tellTeller(kids, partner, city, job) {
//   var fortune =('You will have ' + kids + ' kids with your parter named ' +  partner + ' and you will live in ' + city + ' and work as a ' + job);
//   return fortune;
// }

// document.write(tellTeller(5, 'Jose', 'San Jose', 'Barback'));


// The Age Calculator

// Forgot how old someone is? Calculate it!

// Store the current year in a variable.
// Store their birth year in a variable.
// Calculate their 2 possible ages based on the stored values.
// Output them to the screen like so: "They are either NN or NN", substituting the values.

// var currentYear = 2014
// var birthYear = 1989

// var age = 'If you already had your birthday you are ' + (currentYear - birthYear) + ' years old. But if your birthday is coming up you are ' + (currentYear - birthYear - 1)+'.';
// document.write(age)
  


// The Lifetime Supply Calculator

// Ever wonder how much a "lifetime supply" of your favorite snack is? Wonder no more!

// Store your current age into a variable.
// Store a maximum age into a variable.
// Store an estimated amount per day (as a number).
// Calculate how many you would eat total for the rest of your life.
// Output the result to the screen like so: "You will need NN to last you until the ripe old age of X".

// var currentAge = 25
// var maxAge = 90
// var estimatedAmountPerDay = 12

// var message = ('You will need ' + ((maxAge - currentAge) * 365 * estimatedAmountPerDay) + ' wasabi peas to last you until the ripe old age of ' + maxAge + '.');
// document.write(message)

// The Geometrizer

// Calculate properties of a circle, using the definitions here.

// Store a radius into a variable.
// Calculate the circumference based on the radius, and output "The circumference is NN".
// Calculate the area based on the radius, and output "The area is NN".

// var radius = 9
// var circumference = 2*radius*(Math.PI)
// var area = radius*radius*(Math.PI)

// console.log('The circumference is ' + circumference);
// console.log('The area is ' + area);





// The Temperature Converter

// It's hot out! Let's make a converter based on the steps here.

// Store a celsius temperature into a variable.
// Convert it to fahrenheit and output "NN°C is NN°F".
// Now store a fahrenheit temperature into a variable.
// Convert it to celsius and output "NN°F is NN°C."


var tempCel = 30
var convertToFar = tempCel + '°C is ' + (tempCel * 9 / 5 + 32) + '°F';
document.write(convertToFar)
var tempFar = 74
var convertToCel = tempFar + '°F is ' + ((tempFar - 32) * 5/9 ) + '°C';
console.log(convertToCel);