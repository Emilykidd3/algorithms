// Write a function that takes an array and a positive integer and "rotates" the array to the left by the integer
// Modify the original array rather than returning a new one
// There is no need to return from this function

// pseudeocode
// set a temporary variable for the first digit in the array
// pop? the first digit off of the array
// push the digit to the end of the array
// loop as many times as the positions variable

var arr = [0, 1, 2, 3]

var positions = 3

var leftRotation = function(arr, positions) {
    for (var i = 0; i < positions; i++) {
        var shiftedNum = arr[0]
        arr.shift()
    }
    console.log(shiftedNum)
};

leftRotation(arr, positions);

console.log(arr)
