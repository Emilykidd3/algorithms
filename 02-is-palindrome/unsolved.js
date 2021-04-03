// questions
// will there be spaces?

// split string by "" (goes into array)
// make new array
// loop through first array and push from back into new array
// compare arrays
// if they are equal return true
// if they are not equal return false



const isPalindrome = function(strng) {
    var newArr = [];
    var arr = strng.split("");
    for (let i = 0; i < arr.length; i++) {
        newArr.push(arr[i]);
    }
    if (arr.join('') === newArr.join('')) {
        console.log("true");
        return true;
    } 
    console.log("false")
    return false;
}

isPalindrome("racecar");