// sort array
// loop through array to find missing number
// if there is no missing number, use the next number in the array
// if the array is empty return 0

var arr = [0, 1, 2, 4]

var missingNumber = function(nums) {
    if (nums.length === 0) {
        console.log(0);
        return 0;
    }

    // sort array

    // loop array
    for (var i=0; i < nums.length; i++) {
        if (i !== nums[i]) {
            console.log(i)
            return i;
        }
    }
};

missingNumber(arr);