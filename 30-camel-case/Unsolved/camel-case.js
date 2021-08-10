// Write code to create a function that accepts a string and returns the string in camelCase

// split the string into an array using the space
// add first word into new string
// loop through the rest of the words 
// capitalize the first letter of the word
// add word to new string
// return new string

var str = "let the force flow through you";
// should return "letTheForceFlowThroughYou";

var camelCase = function(str) {
    var arr = str.split(" ");
    var newStr = arr[0];
    for (var i = 1; i < arr.length; i++) {
        newStr += arr[i].charAt(0).toUpperCase();
        for (var j = 1; j < arr[i].length; j++) {
            newStr += arr[i][j]
        }
    }
    console.log(newStr);
    return newStr;
};

camelCase(str);