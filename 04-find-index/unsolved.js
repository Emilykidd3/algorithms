// easy way/ less efficient 
// make function with loop that compares given number to each number in the array

const data = [12, 23, 38, 40, 54, 62, 71, 87, 99];

const findIndex = function(givenNumber) {
    for(var i=0; i<data.length; i++) {
        if (givenNumber === data[i]) {
            console.log(i)
            return i;
        }
    }
}

// findIndex(99);

//binary search

const binarySearch = (arr, num, left, right) => {
    let middle = Math.floor((left + right) / 2);

    // range overlapped, so never found number
    if (left > right) {
        return -1;
    } else if (num === arr[middle]) {
        return middle;
    } else if (num < arr[middle]) {
        // call again with a new right value
        return binarySearch(arr, num, left, middle - 1);
    } else {
        // call again with a new left value
        return binarySearch(arr, num, middle + 1, right);
    }
};

// set initial left and right values on first call
console.log(binarySearch(data, 40, 0, data.length - 1));