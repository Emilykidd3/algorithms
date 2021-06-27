// Write a function that takes two strings and determines returns true if every word found in the second string is present in the first string. You will be checking for both words and their frequency. Assume you'll need to worry about casing, but the strings won't contain any punctuation. Assume neither string will be empty

// split sentences to an array
// loop through noteArr
// compare noteArr[1] to magArr if it matches any return 
// if not return false
// after full loop return true 

var magazine = "hello world";
var note = "hello";
// should return true

var ransomNote = function(magazine, note) {
    var magArr = magazine.split(" ");
    var noteArr = note.split(" ");
    for (var i = 0; i < noteArr.length; i++) {
        for (var j = 0; j < magArr.length; j++) {
            if (noteArr[i] === magArr[j]) {
                return;
            }
            return;
        }
        console.log("true")
        return true;
    }
};

ransomNote(magazine, note)