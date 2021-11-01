// Write a function that takes in an integer and returns it as a Roman numeral string

// roman numerals
// 1 = I
// 5 = V
// 10 = X
// 50 = L
// 100 = C
// 500 = D
// 1000 = M
// 3000 = MMM

// got through number backwards? 

// pseudocode
// split number into arr
// if arr is 4 numbers
// if arr[0] is 1-3 use M, MM, MMM
// if arr[1] is 1-3 use C, CC, CCC
// if arr[1] is 4 use CD, 5 use D, 6 use DC
// if arr[1] is 7-9, use DCC, DCCC, CM
// if arr[2] is 1-3 use X, XX, XXX
// if arr[2] is 4-6, use XL, L, LX
// if arr[2] is 7-9 use LXX, LXXX, XC
// if arr[3] is 1-3 use I, II, III
// if arr[3] is 4-6 use IV, V, VI
// if arr[4] is 7-9 use VII, VIII, XI
// add letter to var
// console.log/return var 

var num = 9;

var intToRoman = function (num) {
    var str = num.toString();
    var romanNumeralFinal = ""
    var arr = str.split("");
    if (arr.length === 1) {
        oneDigit(arr[0]);
        romanNumeralFinal += romanNumeral
    }
    console.log(romanNumeralFinal)
};

var oneDigit = function (num) {
    romanNumeral = "";
    if (num ===
        "1" || num === "2" || num === "3") {
        for (var j = 0; j < parseInt(num); j++) {
            romanNumeral += "I"
        }
    }
    if (num === "4") {
        romanNumeral += "IV"
    }
    if (num === "5" || num === "6" || num === "7" || num === "8") {
        romanNumeral += "V"
        for (var j = 0; j < parseInt(num - 5); j++) {
            romanNumeral += "I"
        }
    }
    if (num === "9") {
        romanNumeral += "IX"
    }
    return romanNumeral;
}

intToRoman(num);