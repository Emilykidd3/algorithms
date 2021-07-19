// You may NOT use the built-in reverse method

// use while loop, while 
// element should be moved to arr.length - i
// return original array

var arr = [2, 4, 6, 8];
// should return arr = [8, 6, 4, 2]

var reverseInPlace = function(arr) {
    let i = 0
    var arr2 = [] 
    for (i = 0; i < arr.length; i++) {
        arr2[i] = arr[i];
      }
    while( i < arr.length) {
        [arr[i]] = [arr2[arr.length - (i + 1)]]
        [arr[arr.length - (i + 1)]] = [arr2[i]]
        i++
    }
    console.log(arr);
    return arr;
};

reverseInPlace(arr)