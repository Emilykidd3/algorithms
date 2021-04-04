// make a for loop that loops through the given array
// make another for loop withing that loop that compares the number from the first for loop to each of the other(or all) numbers in the array
// if the first loop number times the second loop number equals 20, return true
// if it doesnt, continue the second loop 
// if none of the numbers multiply to twenty the first for loop will go to the next number
// loop through all the numbers in the first loop
// if any multiply to equal 20, return true
// in none multiply to equal 20, return false

const multiplyInto20 = function(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            if (arr[i] * arr[j] === 20) {
                console.log("true");
                return true;
            }
        }
    }
    console.log('false')
    return false;
}

multiplyInto20([20, -20, 5, 2, 3, 4]);