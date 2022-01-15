// Write a function that takes in two strings and returns true if they are one edit away, else return false

// pseudocode
// if str1 and str2 are the same, return false
// make variable for amount of edits set to 0
// loop through strings
// if str1[i] is not equal to str2[2] add one to amount of edits variable
// if variable is > 1 return false
// at end if variable does not equal to 1 return false
// else return true

var str1 = "Hello";
var str2 = "Henlo";

var oneEditAway = function(str1, str2) {
    var edits = 0;
    if (str1 === str2){
        console.log(false);
        return false;
    }
    for (var i = 0; i < str1.length; i++){
        if (str1[i] != str2[i]){
            edits+=1;
        }
    }
    if (edits === 1){
        console.log(true);
        return true;
    }
};

oneEditAway(str1, str2);