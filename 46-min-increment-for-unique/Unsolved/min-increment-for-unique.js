// Write a function to take an array of integers and return the minimum number of increments required across the array to ensure that every number is unique

// pseudocode
// sort arr from smallest to largest
// make variable for how much is incremented
// loop through arr
// if arr[i] is equal to arr[i+1]
// sort arr
// add 1 to arr[i+1] and add 1 to variable
// return variable 

var arr = [3, 2, 1, 2, 1, 7];
var amountIncremented = 0;

var minIncrement = function(arr) {
    for (var i = 0; i < arr.length + 1; i++ ) {
        arr.sort((a,b) => a-b);
        var isDuplicate = checkDuplicate(arr);
        if (isDuplicate === true) {
            // console.log(arr)
            console.log(amountIncremented);
            return amountIncremented;
        } else {
            incrementDuplicates(arr);
        }
    }
};

var incrementDuplicates = function(arr){
    for (var i = 0; i < arr.length; i++){
        if (arr[i] === arr[i+1]){
            arr[i+1]++;
            amountIncremented++;
        }
    }
}

var checkDuplicate = function(arr) {
    for (var i = 0; i < arr.length; i++){
        if (arr[i] === arr[i+1]){
            return false;
        }
    }
    return true;
}

minIncrement(arr);