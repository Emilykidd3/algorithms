// Write code to return the largest number in the given array

// sort array
// return last item in array

arr = [3, 1, 17, 5, 6]

var maxNum = function(arr) {
    var newArr = arr.sort((a,b) => {
        return a-b;
    });
    console.log(newArr[newArr.length-1])
    return arr[newArr.length-1]
};

maxNum(arr);