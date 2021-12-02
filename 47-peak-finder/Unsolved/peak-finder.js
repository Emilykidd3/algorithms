// Write a function that takes an array of integers containing exactly one peak. A peak is defined as a location in the array where the value is greater than every number to the left and every number to the right. Return the value found at the array's peak

// pseudocode
// sort arr from smallest to largest
// return last number 

var arr = [2, 4, 6, 8, 10];

var peakFinder = function(arr) {
    arr.sort((a, b) => {
        return a - b;
    })
    console.log(arr[arr.length-1]);
};

peakFinder(arr);