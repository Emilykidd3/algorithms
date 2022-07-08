// n=0; 1
// n=1; 1 1
// make alg to find n of any number for pascals triangle

// given n = 4

// pseudocode
// recursive function?
// loop through n times?
// if there is no number before or after add 0?
// if there is a number add that

var n = 2

function findRow(n) {
    var oldRow = [1, 1]
    var newRow= [1]
    if (n===0) {
        console.log(newRow)
        return newRow;
    } 
    if (n===1){
        console.log(oldRow)
        return oldRow;
    }
    for (var i = 1; i < n; i ++){
        newRow = addRow(oldRow);
    }
}

function addRow(oldRow) {
    var newRow = []
    newRow.push(1);
    for (var j = 0; j < oldRow.length - 1; j++){
        // use old row
        // take first number or 1 and push to newRow 
        // add first number and second number and push to newRow
        // keep going until length is over
        // add one to end
        newRow.push(oldRow[j] + oldRow[j+1])
    }
    newRow.push(1);
    console.log(newRow);
}

findRow(n);