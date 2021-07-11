// Write code to create a function that accepts a string (`str`) and returns the longest word in the string

// set var for longest word and var for length at 0?
// loop throgh array 
// loop through word and count how many letters
// if amount of letters is creater than the var replace both vars
// after full loop return longest word var

var str = "Which word is the longest word";

var longestWord = function(str) {
    var arr = str.split(" ")
    var longestWord = ""
    var longestWordLength = 0
    for (var i = 0; i < arr.length; i++) {
        if (arr[i].length > longestWordLength) {
            longestWord = arr[i]
            longestWordLength = arr[i].length
        }
    }
    console.log(longestWord);
    return longestWord
};

longestWord(str)