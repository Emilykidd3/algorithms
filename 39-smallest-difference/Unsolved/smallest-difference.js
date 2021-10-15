// Write a function that takes in two sorted arrays and returns a pair of numbers (one from each array) with the smallest difference

// pseudocode
// set variable to return arr
// set var to smallest difference set as absolute value of arr1 of 1 minus arr2 of 2
// loop through first arr
// loop through second arr
// sub arr1 from arr2 and get absolute value
// if it is smaller than the var, replace var and use i and j as the new arr to return
// return arr

var arr1 = [1, 6, 7, 9];
var arr2 = [8, 9, 10, 11, 12, 13];

var smallestDifference = function (arr1, arr2) {
    var arrToReturn = [];
    var smallestDiff = Math.abs(arr1[0] - arr2[0]);
    for (var i = 0; i < arr1.length; i++) {
        for (var j = 0; j < arr2.length; j++) {
            console.log(arr1[i])
            console.log(arr2[j])
        }
    }
};

smallestDifference(arr1, arr2)