// Write code to create a function that accepts a string and returns an object containing the number of times each character appears in the string

// create object to be returned as charCount
// loop through str and add each letter to object as key value pair
// key is letter value is number 1
// if letter/ value is already there, add one to value
// return charCount object

var str = "Hello World!";
// should return { H: 1, e: 1, l: 3, o: 2, ' ': 1, W: 1, r: 1, d: 1, '!': 1 }

var characterCount = function(str) {
    var charCount = {};
    charCount[str[0]] = 1;
    for (var i = 1; i < str.length; i++ ) {
        if (str[i] in charCount) {
            charCount[str[i]]++;
        } else {
            charCount[str[i]] = 1;
        }
    }
    console.log(charCount);
    return(charCount)
};

characterCount(str)