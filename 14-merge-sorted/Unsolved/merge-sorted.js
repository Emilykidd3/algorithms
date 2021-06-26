// Write code to merge two sorted arrays into a new sorted array

// add btoh arrays to a new array and sort

// should be a method to compare arrs and push into a new arr in order

var arr1 = [4, 8, 15, 16, 23, 42];
var arr2 = [1, 2, 3, 6, 20, 21]; 

var mergeSorted = function (arr1, arr2) {
    var newArr = []
    for (var i = 0; i < arr1.length; i++) {
        newArr.push(arr1[i])
    }
    for (var i = 0; i < arr2.length; i++) {
        newArr.push(arr2[i])
    }
    newArr.sort((a,b) => a-b)
    console.log(newArr)
};

mergeSorted(arr1, arr2);
