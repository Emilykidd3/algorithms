# Most Songs in PlayList

write a code to create a function that takes an array of numbers, each representing the duration of a song. You will return the maximum number of songs present in the array that can fit into a 60 minute playlist.

## Instructions

    * Return the maximum number of elements present in the array that sums to a max of 60.

    * For example, given the following array:

    ```js
    var arr = [3, 4, 7, 2]; // 4 element array
    ```

    * The sum of `3`, `4`, `7`, and `2` is `16`, which is less than 60. All elements are used, so the answer is `4`.

    * Given the following example:

    ```js
    var arr = [4, 2, 5, 3, 1, 1, 2, 3, 4, 2, 5, 6, 3, 2, 4, 7, 3, 2, 3]; // 19 element array
    ```

    * The number `18` should be returned because all of the numbers in the array except `7` sum to `55`.

### Hints

* Wouldn't it be easier if there was a way to organize the array by smallest to largest number?
