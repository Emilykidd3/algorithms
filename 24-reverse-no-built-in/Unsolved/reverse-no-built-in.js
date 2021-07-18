// Write code to return a new string with all of the characters in `str` reversed.
// You may NOT use the built-in reverse method

// create newStr variable
// loop through og str 
// add each letter to the newStr
// return newStr

var str = "just keep swimming";

var reverse = function(str) {
    var newStr = "";
    for (var i = str.length - 1; i > 0; i--) {
        newStr += str[i];
    }
    console.log(newStr);
    return newStr;
};

reverse(str);