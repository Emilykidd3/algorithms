// Write code to create a function that accepts two strings
// Return true if the strings are anagrams of each other, otherwise return false

// if string lengths are not the same return false
// create new variables for alphabetical order strings
// create function to put string into alphabetical order
// if string are equal return true
// else return false

var strA = "nnjjdyus";
var strB = "njdnsjyu";
// should return true;

var isAnagram = function(strA, strB) {
    if (strA.length != strB.length) {
        console.log("false");
        return false;
    } else if (strA.split("").reverse().join("") != strB) {
        // redo to see if letters are the same
        console.log("false")
        return false;
    } else {
        console.log("true");
        return true;
    }
   
};

isAnagram(strA, strB);