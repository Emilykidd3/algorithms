// Write a function to take a string and return true if it contains valid sets of matching brackets, else return false

// pseudocode
// split string into arr
// if arr length is odd, return false
// run remove closed pair function
// if arr length is 0 return true
// loop through arr
// if arr[i] and arr[i + 1] are equal to () or [] or {}
// remove arr[i] and arr[i+1] from arr
// else if return false

var str = "{ } [ ( [] ) ]";

var validBrackets = function(str) {
    var arr = str.split("");
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] === " ") {
            arr.splice(i, 1);
        }
    }
    removeClosedPair(arr);
};

var removeClosedPair= function(arr){
    for (var i=0; i < arr.length; i++){
        if ((arr[i] === "(" && arr[i+1] === ")" )|| (arr[i] === "{" && arr[i+1] === "}" ) || (arr[i] === "[" && arr[i+1] === "]" )){
            arr.splice(i, 2);
        }
    }
    console.log(arr);
}

validBrackets(str);