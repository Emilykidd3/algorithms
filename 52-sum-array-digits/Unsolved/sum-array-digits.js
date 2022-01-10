// Write a function that takes in two arrays of non-negative integers
// Each element in the arrays contains a single digit
// Together each array represents a whole number
// Create and return a new array that is the sum of the numbers of the two provided arrays
// Solve this problem without type coercion, ie don't join the array into a string

// pseudocode
// make variable for new arr
// loop through arrs starting from end
// if arr1 and arr2 exist
// add the digit of arr1 to the last or arr2 and numToAdd
// if the total is greater than 9, unshift the second number to the new Arr and add one to arr1[i-1] 
// if arr1 exists and arr2 doesnt or opposite
// unshift number to newArr

var arr1 = [1, 1, 8];

var arr2 = [8, 8];

var sumArrayDigits = function(arr1, arr2) {
    var newArr = [];
    if (arr1.length < arr2.length){
        var switchArr = arr1;
        arr1 = arr2;
        arr2 = switchArr;
    }
    for (var i = 1; i <= arr1.length ; i++){
        if (typeof(arr1[arr1.length - i]) === "number" && typeof(arr2[arr2.length - i]) === "number"){
            var numberToAdd = arr1[arr1.length - i] + arr2[arr2.length - i];
            if (numberToAdd <= 9){
                newArr.unshift(numberToAdd);
            } else {
                newArr.unshift(numberToAdd % 10)
                if (typeof(arr1[arr1.length - i - 1]) === "number"){
                    arr1[arr1.length - i - 1] += 1;
                } else {
                    arr1.unshift(1);
                }
            }
        } else {
            newArr.unshift(arr1[arr1.length - i]);
        }
    }
    console.log(newArr);
};

sumArrayDigits(arr1, arr2)