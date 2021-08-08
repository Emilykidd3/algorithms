// Write code to create a function that accepts an array of numbers, finds the largest two numbers, and returns the product of the two

// create variables for the two largest numbers
// create a function to find the largest number

// create var for largest num
// loop through arr
// if arr[i] is greater than largest num
// set largest num equal to arr[i]
// return largest num

// run function to find largest number assign to largest num var
// remove largest number from arr and run function again assign to second largest num var
// multiply largest numbers togther 
// return result

var arr = [10, 20, 9, 6, 3];
// largest is 20 and second largest is 10, result should be 200

var productOfLargestTwo = function(arr) {
    var largest = findLargestNumber(arr);
    // remove largest num from arr
    var newArr = []
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] != largest) {
            newArr.push(arr[i]);
        }
    }
    var secondLargest = findLargestNumber(newArr);
    var result = largest*secondLargest;
    console.log(result);
    return result;
};

var findLargestNumber = function(arr) {
    var largestNum = 0;
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] > largestNum) {
            largestNum = arr[i];
        }
    }
    return largestNum;
};

productOfLargestTwo(arr);