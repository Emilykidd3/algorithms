// Write a function that takes in two arrays of non-negative integers
// Each element in the arrays contains a single digit
// Together each array represents a whole number
// Create and return a new array that is the sum of the numbers of the two provided arrays
// Solve this problem without type coercion, ie don't join the array into a string

// pseudocode
// make variable for new arr
// loop through arrs starting from end
// if arr1 and arr2 exist
// add the digit of arr1 to the last or arr2 and numToAdd
// if the total is greater than 9, unshift the second number to the new Arr and add one to arr1[i-1] 
// if arr1 exists and arr2 doesnt or opposite
// unshift number to newArr

var arr1 = [1, 0];

var arr2 = [1];

var sumArrayDigits = function(arr1, arr2) {
    var newArr = [];
};

sumArrayDigits(arr1, arr2)