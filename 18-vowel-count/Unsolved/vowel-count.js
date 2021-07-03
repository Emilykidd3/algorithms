// Write code to return the the number of vowels in `str`

// make variable for vowelcount at 0
// loop through string? 
// if letter is === to a vowel vowelcount++
// return count when loop is over

var str = "emily"

var vowelCount = function(str) {
    var vowelCount = 0
    for (var i = 0; i < str.length; i ++) {
        if (str[i] === "a" || str[i] === "e" || str[i] === "i" || str[i] === "o" || str[i] === "u" || str[i] === "y") {
            vowelCount++
        }
    }
    console.log(vowelCount);
    return vowelCount;
};

vowelCount(str);