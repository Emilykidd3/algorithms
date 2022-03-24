// Given a string of characters as input, write a function that returns it with the characters reversed.

// given var arr = [1, 2, 3, 4]
// expected return is arr = [4, 3, 2, 1]

var arr = [1, 2, 3, 4]

//using built in js arr manipulation
function reverseArrBuiltIn(arr) {
    arr.reverse();
    console.log(arr);
}

// using no buitl in arr manipulation
function reverseArr(arr) {
    var newArr = []
    for (var i = arr.length-1; i > -1; i--){
        newArr.push(arr[i]);
    }
    arr = newArr;
    console.log(arr);
}

reverseArrBuiltIn(arr);

// reverseArr(arr)