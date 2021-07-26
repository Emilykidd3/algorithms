// Write code to create a function that accepts a number (`n`) and returns a new number that satisfies the look-and-say-sequence

// create a var for current number as 1
// loop through number?
// if number is equal to next number
// add 1 to current number var
// if not equal add current number and number to new look and say variable
//  return look and say number

var n = 5442;
// should return 152412

var lookAndSay = function(n) {
    var currentNumber = 1
    var lookAndSayNumber = []
    var nArr = n.toString();
    for (var i = 0; i < nArr.length; i++) {
        if (nArr[i] === nArr[i+1]) {
            currentNumber += 1;
            console.log("here")
        } else {
            console.log("right here")
            lookAndSayNumber.push(currentNumber);
            lookAndSayNumber.push(nArr[i]);
            currentNumber = 1;
        }
    }
    var finalNumber = lookAndSayNumber.join("");
    console.log(finalNumber)
    return finalNumber;
};

lookAndSay(n);