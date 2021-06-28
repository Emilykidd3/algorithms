// Write code to create a function that accepts an array of integers sorted in ascending (increasing) order and returns a new array containing the squares of each number in ascending order

// loop through array
// multiply each item of array by itself and push to a new array
// sort new array

var arr = [-4, -1, 0, 3, 10];

// should return [0, 1, 9, 16, 100];

var sortedSquares = function(arr) {
    var newArr=[]
    for (var i = 0; i < arr.length; i ++) {
        var squaredNum = arr[i]*arr[i]
        newArr.push(squaredNum);
    }
    newArr.sort((a,b) => a-b)
    console.log(newArr)
    return newArr;
};

sortedSquares(arr);