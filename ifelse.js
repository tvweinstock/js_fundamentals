
// Exercises: if/else statements

// EXERCISE: What number's bigger?

// Write a function named greaterNum that:
// takes 2 arguments, both numbers.
// returns whichever number is the greater (higher) number.
// Call that function 2 times with different number pairs, and log the output to make sure it works (e.g. "The greater number of 5 and 10 is 10.").

// function greaterNum(num1, num2) {
//   if (num1 > num2) {
//     console.log(num1 + " is bigger than " + num2);
//   } else {
//     console.log(num2 + " is bigger than " + num1);
//   }
// };

// greaterNum(5, 10);



// EXERCISE: The World Translator


// Write a function named helloWorld that:
// takes 1 argument, a language code (e.g. "es", "de", "en")
// returns "Hello, World" for the given language, for atleast 3 languages. It should default to returning English.
// Call that function for each of the supported languages and log the result to make sure it works.
// function helloWorld(language) {
//   if (language === 'german') {
//     return 'hallo welt';
//   } else if (language === 'icelandic') {
//     return 'halló heimur';
//   } else if (language === 'french') {
//     return 'bonjourrrrr';
//     }  else {
//       return 'hello World';
//     }
//   };

// console.log(helloWorld('german'));
// console.log(helloWorld('icelandic'));
// console.log(helloWorld('french'));

// EXERCISE: The Grade Assigner

// Write a function named assignGrade that:
// takes 1 argument, a number score.
// returns a grade for the score, either "A", "B", "C", "D", or "F".
// Call that function for a few different scores and log the result to make sure it works.

// function gradeAssigner(numScore) {
//   if (numScore >= 90) {
//     return 'A';
//   } else if (numScore >= 80) {
//     return 'B';
//   } else if (numScore >= 70) {
//     return 'C';
//   } else if (numScore >= 60) {
//     return 'D'; 
//   } else {
//     return 'F';
//   }
// };

// console.log(gradeAssigner(77));
// console.log(gradeAssigner(57));
// console.log(gradeAssigner(7));
// console.log(gradeAssigner(97));

// EXERCISE: The Pluralizer

// Write a function named pluralize that:
// takes 2 arguments, a noun and a number.
// returns the number and pluralized form, like "5 cats" or "1 dog".
// Call that function for a few different scores and log the result to make sure it works.
// Bonus: Make it handle a few collective nouns like "sheep" and "geese".


// function pluralizeThat(animal, number) {
//   if (number > 1  && animal != 'sheep' && animal != 'geese' && animal != 'moose') {
//     return number + ' ' + animal + 's';
//   } else {
//     return number + ' ' + animal;
//   }
// };

// console.log(pluralizeThat('cat', 5));
// console.log(pluralizeThat('dog', 5));
// console.log(pluralizeThat('bird', 5));
// console.log(pluralizeThat('geese', 5));
// console.log(pluralizeThat('moose', 5));
// console.log(pluralizeThat('sheep', 5));
// console.log(pluralizeThat('dog', 1));