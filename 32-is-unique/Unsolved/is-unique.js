// Write code to create a function that accepts an array numbers
// Return `true` is no number appears in the array more than once, else return `false`

// create an object numberCount
// loop though arr and add each number as key value pair
// key is number and value is 1
// if number is already there add one to value
// loop through object and if any key is > 1 return false 
// return true

var arr = [3, 4, 5, 7, 9]; // no number is repeated
// return true

var isUnique = function(arr) {
    var numberCount = {};
    numberCount[arr[0]] = 1;
    for (var i = 1; i < arr.length; i++) {
        if (arr[i] in numberCount) {
            console.log("false")
            return false;
        } else {
            numberCount[arr[i]] = 1;
        }
    }
    console.log("true")
    return true;
};

isUnique(arr);