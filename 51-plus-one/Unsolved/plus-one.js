// Write a function that takes in an array of digits representing a non negative integer and add one to it. The digits are arranged such that the most significant digits are on the left and each element in the array contains a single digit
// Return the new array
// Solve without joining the digits array and modify the original array in place

// notes
// want function to be a loop! so if arr is [9, 9, 9, 9, ..., 9] it will keep going until arr is over

// pseudocode
// loop through the array from end to start
// if arr[arr.length] is 8 or less, add one and RETURN
// if arr[arr.length] is 9, set it equal to 0, (or subtract 9?) and move on to previous number
// if there is no number before add one in using 

var digits = [1, 9, 9, 9];

var plusOne = function(digits) {
    for (var i = digits.length-1; i >= 0; i--){
        if (digits[i] < 9){
            digits[i]+=1;
            console.log(digits);
            return digits;
        } else {
            digits[i] = 0;
        }
    }
    digits.unshift(1)
    console.log(digits);
    return digits;
};

plusOne(digits);