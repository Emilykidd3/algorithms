// Write a function that takes in a Roman Numeral string and returns its integer form

// roman numeral key
// 1 = I
// 5 = V
// 10 = X
// 50 = L
// 100 = C
// 500 = D
// 1000 = M
// 3000 = MMM

// pseudocode
// make variable for number
// if there is an M add 1000 to var
// if there is a C before the M, subtract 100
// if there is a C after the M, add 100
// if there is a D add 500
// if there is a C before the D, subtract 100
// if there is a C after the D, add 100
// if there is a C add 100
// if there is a X before the C, subtract 10
// if there is a X after the C, add 10
// if there is a L add 50
// fi there is a X before the L, subtract 10
// if there is a X after hte L, add 10
// if there is an X add 10
// if there is an I before the X, subtract 1
// if there is an I after the X, add 1
// if there is a V add 5
// if there is an I before the V, subtract 1
// if there is an I after the V, add 1
// if there is an I add 1

var str = "VIIII";

var romanToInt = function(str) {
    var num = 0;
    for (var i = 0; i < str.length; i++) {
        if (str[i] === "I" && str[i+1] ==="V"){
            num--;
        } else if (str[i] === "V") {
            num+=5;
        } else if (str[i] === "I") {
            num++;
        }
    }
    console.log(num)
    return num;
};

romanToInt(str);
