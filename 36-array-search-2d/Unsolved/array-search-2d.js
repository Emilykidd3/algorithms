// Write code to create a function that accepts a two-dimensional array
// Each 2D element contains either the string "X" or "O" (both capitalized)
// Return the number of times "X" appears in the 2D array

//pseudocode
// create var for number of Xs
// loop through arr
// loop through arr in arr
// if arr[i] is "X" += 1 to var
// after loops, return/ console.log var

var arr = [
    ["X", "O", "O", "O", "X", "O"],
    ["O", "X", "O", "O", "O", "O"],
    ["O", "O", "O", "O", "X", "X"],
    ["O", "O", "O", "O", "O", "O"]
]

var arraySearch2D = function (arr) {
    var numberOfXs = 0;
    for (var i = 0; i < arr.length; i++) {
        for (var j = 0; j < arr[i].length; j++) {
            if (arr[i][j] === "X") {
                numberOfXs += 1;
            }
        }
    }
    console.log(numberOfXs);
    return numberOfXs;
};

arraySearch2D(arr);