// Write a function that takes in two sorted arrays and returns a pair of numbers (one from each array) with the smallest difference

// pseudocode
// set variable to return arr
// set var to smallest difference set as absolute value of arr1 of 1 minus arr2 of 2
// loop through first arr
// loop through second arr
// sub arr1 from arr2 and get absolute value
// if it is smaller than the var, replace var and use i and j as the new arr to return
// return arr

var arr1 = [2, 4, 6, 8, 15, 20];
var arr2 = [17, 25, 30, 47];

var smallestDifference = function (arr1, arr2) {
    var arrToReturn = [];
    var smallestDiff = Math.abs(arr1[0] - arr2[0]);
    for (var i = 0; i < arr1.length; i++) {
        for (var j = 0; j < arr2.length; j++) {
            var toCompare = Math.abs(arr1[i] - arr2[j]);
            if (smallestDiff > toCompare) {
                smallestDiff = toCompare;
                arrToReturn = [arr1[i], arr2[j]];
            }
        }
    }
    console.log(arrToReturn)
    return arrToReturn;
};

smallestDifference(arr1, arr2)