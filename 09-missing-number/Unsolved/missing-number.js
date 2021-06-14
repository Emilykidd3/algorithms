// sort array
// loop through array to find missing number
// if there is no missing number, use the next number in the array
// if the array is empty return 0

var arr = [4, 2, 0, 3]

var missingNumber = function(nums) {
    if (nums.length === 0) {
        console.log(0);
        return 0;
    }

    // sort array
    var newArr = nums.sort((a, b) => {
        return a - b;
    })

    // loop array
    for (var i=0; i < newArr.length; i++) {
        if (i !== newArr[i]) {
            console.log(i)
            return i;
        }
    }
};

missingNumber(arr);