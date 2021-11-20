// Write a function that takes a sorted array of numbers and removes duplicates from the array
// Do not create a new array, instead modify the original array
// There is no need to return anything from this function

// loop through arr
// if number and next number are the same
// remove first number
// console.log arr

// how to remove something from an arr
// arr.splice(i+1, 1)

var arr = [1, 1, 2, 3, 4, 4, 9, 9];
// should print [1, 2, 3, 4, 9];

var removeDuplicates = function(arr) {
    for (var i=0; i < arr.length; i++){
        if(arr[i] === arr[i+1]){
            arr.splice(i+1, 1);
        }
    }
    console.log(arr);
};

removeDuplicates(arr)