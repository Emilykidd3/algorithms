// Write code to create a function that accepts a number and returns true if the number is a perfect square, otherwise it returns false.
// You may not use the built-in Math.sqrt method

// pseudocode
// make variable for squared num
// loop through numbers starting at 1, if squared number is equal to given number, return true
// if given num in less than squared num return false
// if given num is greater than square num
// at end return false

var num = 37;

var isPerfectSquare = function (num) {
    for (var i = 1; (i * i) <= num; i++) {
        if (i * i === num) {
            console.log("true")
            return true;
        }
    };
    console.log("false")
    return false;
};

isPerfectSquare(num);