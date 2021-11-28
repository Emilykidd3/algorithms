// Write a function to take an array of integers and return the minimum number of increments required across the array to ensure that every number is unique

// pseudocode
// sort arr from smallest to largest
// make variable for how much is incremented
// loop through arr
// if arr[i] is equal to arr[i+1]
// sort arr
// add 1 to arr[i+1] and add 1 to variable
// return variable 

var arr = [1, 2, 2];

var minIncrement = function(arr) {
    var amountIncremented = 0;
    arr.sort((a,b) => a-b);
    for (var i = 0; i < arr.length; i++){
        if (arr[i] === arr[i+1]){
            arr[i+1]++;
            amountIncremented++;
        }
    }
    console.log(amountIncremented);
    console.log(arr);
};

minIncrement(arr);