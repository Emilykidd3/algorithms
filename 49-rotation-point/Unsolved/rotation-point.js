// Write a function that takes in an array of sorted strings and returns the index of its rotation point if it has one, else return -1

// pseudocode
// make variable for rotation index
// loop through first letter of each string in the array
// if numerical value of string is greater than string+1 add index to variable
// return variable

var words = ["cool", "cat"];

var rotationPoint = function(words) {
    for (var i = 0; i < words.length; i++) {
        console.log(words[i][0]);
    }
};

rotationPoint(words);