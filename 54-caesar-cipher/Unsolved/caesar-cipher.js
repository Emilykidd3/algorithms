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

var str = "Goodbye";
var offset = 28;

var caesarCipher = function(str, offset) {
    while (offset >= 26){
        offset-=26;
    }
    var newStr = ""
    for (var i = 0; i < str.length; i++) {
        var charCode = str[i].charCodeAt(0);
        var newCharCode;
        if (97 <= charCode && charCode <= 122){
            newCharCode = charCode + offset;
            if (newCharCode > 122){
                newCharCode-=26;
            } else if (newCharCode < 97){
                newCharCode+=26;
            }
            newStr=newStr+=String.fromCharCode(newCharCode);
        } else if (charCode === 32){
            newStr=newStr+" ";
        } else if (65 <= charCode && charCode <= 90) {
            newCharCode = charCode + offset;
            if (newCharCode > 90){
                newCharCode-=26;
            } else if (newCharCode < 65){
                newCharCode+=26;
            }
            newStr=newStr+=String.fromCharCode(newCharCode);
        }
    }
    console.log(newStr);
    return newStr;
};
caesarCipher(str, offset);
