// Write code to create a function that accepts two strings
// If the second string is found inside of the first string, return its starting index in the first string
// Else return `-1`

//pseudocode
// if arr2 is empty return 0
// loop through arr 1
// if arr2[0] is in arr1
// loop through arr2 and arri[i+j] to see if equal
// if equal, return i

// other notes
// check if first letter is in arr1 1st?

var str1 = "JavaScript";
var str2 = "Scr";

var strStr = function(str1, str2) {
    if (str2 === "") {
        console.log(0)
        return 0;
    }
    for (var i = 0; i < str1.length; i++){
        if (str1[i] === str2[0]){
            for (var j = 0; j < str2.length; j++){
                if (str1[i + j] !== str2[j]) {
                    console.log(-1)
                    return -1
                }
            }
        }
    }
};

strStr(str1, str2)