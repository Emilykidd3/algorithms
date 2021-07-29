// Write code to create a function that accepts a string and determines if the string is a valid number. You may not use any regex, built-in methods type conversion to accomplish this.
 
// create a var for the number of decimals at 0
// loop through string
// use an if statment to see there are any characters other than numbers return false
// if anything but the first character is + or - return false
// if a character is a decimal add to decimal var
// if decimal variable is not 0 or 1 return false
// return true after loop if no false is returned

var str = "-13.329";

var isNumeric = function(str) {
    var decimalNumber = 0;
    for (var i = 0; i < str.length; i++) {
        console.log(str[i])
        if (str[i] != 0 && str[i] != 1 && str[i] != 2 && str[i] != 3 && str[i] != 4 && str[i] != 5 && str[i] != 6 && str[i] != 7 && str[i] != 8 && str[i] != 9 && str[i] != "-" && str[i] != "+" && str[i] != ".") {
            console.log("false");
            return false;
        }
        if (str[i+1] === "-" || str[i+1] === "+"){
            console.log("false");
            return false;
        }
        if (str[i] === ".") {
            decimalNumber += 1;
            console.log(decimalNumber);
        }
    }
    console.log("true")
    return true;
};

isNumeric(str);