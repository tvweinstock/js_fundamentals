// Exercises: for loops

// EXERCISE: The even/odd reporter

// Write a for loop that will iterate from 0 to 20. For each iteration, it will check if the current number is even or odd, and report that to the screen (e.g. "2 is even").

// for (var i = 0; i<=20; i++) {
//   if(i % 2 === 0) {
//     console.log(i + ' is even');
//   } else {
//     console.log(i + ' is very odd');
//   }
// }



// EXERCISE: Multiplication Tables

// Write a for loop that will iterate from 0 to 10. For each iteration of the for loop, it will multiply the number by 9 and log the result (e.g. "2 * 9 = 18").

// var mult = 9;
// for (var t = 0; t<=10; t++) {
//   var result = mult * t;
//   console.log(mult + ' * ' + t + ' = ' + result);
// }


// Bonus: Use a nested for loop to show the tables for every multiplier from 1 to 10 (100 results total).


// for (var mult2 = 0; mult2 <=10; mult2++) {
//   for (var i = 0; i <= 10; i++) {
//     var result = mult2 * i;
//     console.log(mult2 + ' * ' + i + ' = ' + result);
//   }
// }


// Write a function named assignGrade that:
// takes 1 argument, a number score.
// returns a grade for the score, either "A", "B", "C", "D", or "F".
// Call that function for a few different scores and log the result to make sure it works.

function assignGrade(numberScore) {
 if (numberScore > 90) {
      return 'A';
  } else if (numberScore > 80) {
      return 'B';
  }  else if (numberScore > 70) {
      return 'C';
  } else if (numberScore > 60) {
      return 'D';
  }  else {
      return 'F';

  }
}


console.log(assignGrade(7));

// EXERCISE: The Grade Assigner

// Check the results of assignGrade function from the conditionals exercise for every value from 60 to 100 - so your log should show 
// "For 89, you got a B. For 90, you got an A.", etc.

for (var i = 60; i <= 100; i++) {
  console.log('For ' + i + ', you got a ' + assignGrade(i));
}

