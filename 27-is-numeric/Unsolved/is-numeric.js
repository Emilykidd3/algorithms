// Write code to create a function that accepts a string and determines if the string is a valid number. You may not use any regex, built-in methods type conversion to accomplish this.
 
// create a var for the number of decimals at 0
// loop through string
// use an if statment to see there are any characters other than numbers return false
// if anything but the first character is + or - return false
// if a character is a decimal add to decimal var
// if decimal variable is not 0 or 1 return false
// return true after loop if no false is returned

var str = "+-a13";

var isNumeric = function(str) {
    var decimalNumber = 0;
    for (var i = 0; i < str.length; i++) {
        
    }
};

isNumeric(str);