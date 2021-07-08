// Write code to create a function takes a string and returns the string with all of the letter cases swapped

// loop through all letters
// if letter is capitalized do tolowercase
// if letter isnt do touppercase
// push to new string
// return string

var str = "Luke, I Am Your Father";

var swapCase = function(str) {
    var newStr = ""
    for (var i = 0; i < str.length; i++) {
        if(str[i] === " " || str[i] === "." || str[i] === ",") {
            newStr += str[i]
        } else if (str[i] >= "A" && str[i] <= "Z") {
            var updatedCase = str[i].toLowerCase()
            newStr += updatedCase;
        } else if (str[i] >= "a" && str[i] <= "z") {
            var updatedCase = str[i].toUpperCase()
            newStr += updatedCase;
        } 
    }
    console.log(newStr)
};

swapCase(str);