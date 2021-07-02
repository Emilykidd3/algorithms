// Write code to create a function takes a string and returns a new string with the first letters of each word capitalized

// split string into arr
// loop through arr and capitalize each word 
// join arr back into string with space
// return

var str = "a lannister always pays his debts";

var titleCase = function(str) {
    var arr = str.split(" ");
    var newArr = []
    for(var i = 0; i < arr.length; i++) {
        var firstLetter = arr[i].charAt(0).toUpperCase()
        newArr.push(firstLetter + arr[i].slice(1))
    }
    var newStr = newArr.join(" ");
    console.log(newStr);
    return newStr;
};

titleCase(str)