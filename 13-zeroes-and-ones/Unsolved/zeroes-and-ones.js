// Write code to create a function that accepts a string containing only 0s and 1s
// Return true if there are an equal number of 0s and 1s
// Else return false

// convert the string into an array
// count how many 0s there are in the arr and assign it to a variable
// count how many 1s there are in the arr and assign it to a variable
// if the variables are equal return true
// if they are not return false

var str = "0011011"

var zeroesAndOnes = function(str) {
    var arr = str.split("");
    var zero = 0
    var one = 0
    for (var i=0; i < arr.length; i++) {
        if (arr[i] === "0") {
            zero++
        }
        else if (arr[i] === "1") {
            one++
        }
    }
    if (one === zero) {
        console.log("true")
        return true;
    } else {
        console.log("false")
        return false;
    }
};

zeroesAndOnes(str)