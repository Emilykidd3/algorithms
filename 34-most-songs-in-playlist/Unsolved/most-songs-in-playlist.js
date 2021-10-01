// Write code to create a function that accepts an array of numbers
// Each number represents the duration of a song in minutes
// Return the maximum number of songs from the array that can fit in a 60 minute playlist

// pseudocode
// sort arr smallest to largest
// name a number of songs variable
// name a time length variable
// add 1st song time length to time length variable and add 1 to number of songs varibale
// if time is less than 60 minutes plus next song time, add next song and add one to number of songs variable
// else return time length variable.

var arr = [4, 2, 5, 3, 1, 1, 2, 3, 4, 2, 5, 6, 3, 2, 4, 7, 3, 2, 3]

var noMoreThanPrevious = function (arr) {
  var numberOfSongs = 1;
  var playlistLength = 0;
  var newArr = arr.sort((a, b) => {
    return a - b;
  })
  playlistLength += newArr[0];
  for (var i = 1; i < newArr.length; i++) {
    if (playlistLength + newArr[i] < 60) {
      playlistLength += newArr[i];
      numberOfSongs += 1;
    }
  }
  console.log(playlistLength, numberOfSongs);
};

noMoreThanPrevious(arr);