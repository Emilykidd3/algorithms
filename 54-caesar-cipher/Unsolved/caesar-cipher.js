// Write a function that takes in a string and and an offset and returns a new string with each character moved by the offset

// pseudocode
// split string into arr
// while offset is greater than or equal to 26, subtract 26
// loop through arr
// a-z is 97-122
// A-Z is 65-90
// if statements for cap vs lower?
// replace letter with char code using .charCodeAt() 
// add offset to each number
// if number is greater than 122, subtract 26
// replace number with .fromCharCode
// join arr
// return

var str = "Hello World";
var offset = 1;

var caesarCipher = function(str, offset) {
    var arr = str.split("");
    var str;
    for (var i = 0; i < arr.length; i++) {
        var charCode = arr[i].charCodeAt(0);
        console.log(charCode);
        if (97 <= charCode && charCode <= 122){
            console.log("lowercase")
        } else if (charCode === 32){
            console.log("space");
        } else if (65 < charCode && charCode <= 90) {
            console.log("cap")
        }
    }
};
caesarCipher(str, offset);
