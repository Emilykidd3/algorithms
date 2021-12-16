// Write a function that takes in an array of sorted strings and returns the index of its rotation point if it has one, else return -1

// pseudocode
// make variable for rotation index
// loop through first letter of each string in the array
// if numerical value of string is greater than string+1 add index to variable
// return variable

var words = ["great", "ostrich", "panther", "ruby", "chosen", "feathers"];

var rotationPoint = function(words) {
    var rotationNum = 0;
    for (var i = 0; i < words.length-1; i++) {
        if (words[i][0] > words[i+1][0]){
            console.log("before")
        } else if (words[i][0]===words[i+1][0]){
            for (var j=0; j < words[i].length && i<words[i+1].length; j++){
                if (words[i][j] > words[i+1][j]){
                    console.log(i+1);
                    return i+1;
                } else if (words[i][j] < words[i+1][j]){
                    console.log(-1);
                    return -1;
                }
            }
        } else {
            console.log("here")
        }
    }
    console.log(-1);
};

rotationPoint(words);