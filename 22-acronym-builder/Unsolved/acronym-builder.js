// Write code to create a function that accepts a string and returns an acronym for the given string

// split str into an arr
// loop through arr
// take first letter of each word
// add letter to new str
// capitolize each letter
// return new string

var str = "For your information";
// should return "FYI"

var acronymBuilder = function(str) {
    var arr = str.split(" ");
    var acronym = ""
    for (var i = 0; i < arr.length; i++) {
        acronym += arr[i].charAt(0).toUpperCase()
    }
    console.log(acronym)
    return(acronym)
};

acronymBuilder(str)