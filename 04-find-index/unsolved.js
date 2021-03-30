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

findIndex(99);