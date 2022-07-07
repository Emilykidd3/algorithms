// n=0; 1
// n=1; 1 1
// make alg to find n of any number for pascals triangle

// given n = 4

// pseudocode
// recursive function?
// loop through n times?
// if there is no number before or after add 0?
// if there is a number add that

var n = 1

function findRow(n) {
    var oldRow = [1]
    var newRow= [1, 1]
    if (n===0) {
        console.log(oldRow)
        return oldRow;
    } 
    if (n===1){
        console.log(newRow)
        return newRow;
    }
    for (var i = 0; i < n; i ++){
        newRow = addRow(oldRow);
    }
}

function addRow(oldRow) {
    var newRow = []
    for (var j = 0; j < oldRow.length; j++){
        // take first num of oldRow arr
        // push to 
        console.log(newRow)
    }
}

findRow(n);