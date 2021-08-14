// Write code to create a function that accepts an array of numbers and a target number
// if the target number is present in the array, return its index
// else return -1
// You may not use the `indexOf`, `lastIndexOf` or `includes` methods

// loop through arr
// if arr[i] === targer
// return i
// else return -1

var arr = [82, 22, -4, 21, 1, 8];
var target = 8;
// should return 5

var linearSearch = function(arr, target) {
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] === target) {
            console.log(i);
            return i;
        } 
    }
    console.log(-1);
    return -1
};

linearSearch(arr, target);