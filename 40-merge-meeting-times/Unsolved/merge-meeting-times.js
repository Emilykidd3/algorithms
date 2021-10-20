// Write a function that takes in a 2D array of meeting times, where each sub array contains 2 integers representing a meeting start and end time. Return a new 2D array such that overlapping meeting blocks are condensed into combined meeting blocks

// pseudocode
// sort sub arrs by start time
// loop through arrs
// if end time is after the next start time, replace end time with next end time and remove next arr
// if end time is before next start time go to next in loop
// after loop return arr

var mergeMeetingTimes = function (arr) { };
