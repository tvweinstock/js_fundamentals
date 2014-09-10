
// Exercises: Arrays

// EXERCISE: Your top choices

// Create an array to hold your top choices (colors, presidents, whatever).
// For each choice, log to the screen a string like: "My #1 choice is blue."
// Bonus: Change it to log "My 1st choice, "My 2nd choice", "My 3rd choice", picking the right suffix for the number based on what it is


var topColors = ['red', 'blue', 'aubergine', 'cyan', 'azure'];
  for (var i = 0; i < topColors.length; i++ ) {
    console.log("My #" + (i + 1) + " choice is " + topColors[i]);
  };

  for (var i = 0; i < topColors.length; i++ ) {
    var choiceNum = i + 1
    var suffix
    if (choiceNum == 1) {
      suffix = 'st';
    } else if (choiceNum == 2) {
      suffix = 'nd';
    } else if (choiceNum == 3 ){
      suffix = 'rd';
    } else {
      suffix = 'th';
    }
    console.log('My ' + choiceNum + suffix + ' favorite color is ' + topColors[i]);
  };







// console.log('My favorite color is ' + topColors[0]);
// console.log('My 2nd choice is ' + topColors[1]);
// console.log('My 3rd choice is ' + topColors[2]);
// console.log('My final favorite is ' + topColors[3]);

