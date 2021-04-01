// started at 6:00 
// testing at 6:05
// had trouble testing but just needed to change what was passed in?? to arr instead of givenArray

// questions
// will numbers always be whole
// will numbers alwasy be positive

// loop through array 
// check if number is even by seeing if it is divisibly by 2
// if it is, multipy it by 2
// push to new array
// if its is not even (it is odd), multipy it by 3
// push to new array

var givenArray = [1, 2, 3, 4]

var multiplyArray = function(arr) {
    var newArray = [];
    for (var i = 0; i < givenArray.length; i++) {
        if (givenArray[i]%2 === 0 ) {
            var numberToAdd = givenArray[i]*2;
            newArray.push(numberToAdd);
        } else {
            var numberToAdd = givenArray[i]*3;
            newArray.push(numberToAdd);
        }
    }
    console.log(newArray);
    return newArray;
}

multiplyArray();