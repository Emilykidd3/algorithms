// Write a function that takes an array of integers representing the price of a stock on different days. Return the maximum profit that can be made from buying and selling a single stock

// pseudocode
// make variable for max profit
// loop through arr
// loop through array again 
// subtract 1st arr loop from second arr loop
// if number is greater than max profit var, repace it
// at end return max profit var

var arr = [1, 6, 7, 9];

var maxProfit = function (arr) {
    var greatestProfit = 0;
    for (var i = 0; i < arr.length; i++) {
        for (var j = i; j < arr.length; j++) {
            if (arr[j] - arr[i] > greatestProfit) {
                greatestProfit = arr[j] - arr[i];
            }
        }
    }
    console.log(greatestProfit);
    return greatestProfit;
};

maxProfit(arr);