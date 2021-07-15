// Write code to create a function that accepts a string (`str`) and reverses the order of the words in the string

// split str into arr
// loop through arr backwards
// push to new arr
// join new arr and return

var str = "just keep swimming";

var reverseWords = function(str) {
    var arr = str.split(" ");
    var newArr = [];
    for (var i = arr.length; i >= 0; i--) {
        newArr.push(arr[i])
    }
    newArr = newArr.join(" ")
    console.log(newArr)
    return(newArr)
};

reverseWords(str)
