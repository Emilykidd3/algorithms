// Write a function that takes in a 2D array of meeting times, where each sub array contains 2 integers representing a meeting start and end time. Return a new 2D array such that overlapping meeting blocks are condensed into combined meeting blocks

// pseudocode
// sort sub arrs by start time
// loop through arrs
// if end time is after the next start time, replace end time with next end time and remove next arr
// if end time is before next start time go to next in loop
// after loop return arr

var arr = [[1, 3], [2, 4]];

var mergeMeetingTimes = function (arr) {
    var newArr = arr.sort((a, b) => {
        return a[0] - b[0];
    })
    for (var i = 0; i < newArr.length - 1; i++) {
        if (newArr[i][1] > newArr[i + 1][0]) {
            console.log("here")
            newArr[i][1] = newArr[i + 1][1];
        }
    }
    console.log(newArr);
};

mergeMeetingTimes(arr)