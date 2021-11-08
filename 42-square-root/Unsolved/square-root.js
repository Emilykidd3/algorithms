// Write code to create a function that accepts a non-negative integer and returns the square root of the integer. If the square root is a decimal number, round down to the nearest whole integer
// You may not use the built-in `Math.sqrt` method

// pseudocode
// loop through numbers starting at 1
// if loop squared is less than x keep looping
// if loop squared is greater than x return i-1

var num = 25;

var sqrt = function (num) {
    for (var i = 1; i < num; i++) {
        if (num < i * i) {
            console.log(i - 1);
            return;
        }
    }
};

sqrt(num);
