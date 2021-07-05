// Write code to loop through the array of numbers
// At each iteration, if a number is evenly divisible by 3 print "Fizz"
// If a number is evenly divisible by 5 print "Buzz"
// If a number is evenly divisible by both 3 AND 5, print "Fizz Buzz"
// If a number is not divisible by 3 or 5, print the number

// loop through given arr
// if number is divisible by 3 & 5 print fizz buzz
// if number is divisible by 3 print fizz
// if number is divisible by 5 print buzz
// if else print number

var arr = [13, 14, 15, 16, 17, 18, 19, 20];

var fizzBuzz = function(arr) {
    for (var i = 0; i < arr.length; i++) {
        if (arr[i]%3 === 0 && arr[i]%5 === 0) {
            console.log("FizzBuzz")
        } else if (arr[i]%3 === 0) {
            console.log("Fizz")
        } else if (arr[i]%5 === 0) {
            console.log("Buzz")
        } else {
            console.log(arr[i])
        }
    }
};

fizzBuzz(arr);
