# Left Rotation

In this activity you will be writing code to create a function that takes an array of integers and a positive integer as arguments. The function should then rotate the elements of the array to the left by the given number.

## Instructions

    * Rotate the elements in the given array to the left by the given positions number.

    * For example, given the following array and positions number:

    ```js
    var arr = [1, 2, 3];
    var positions = 2;
    ```

    * The given array should be updated to the following:

    ```js
    [3, 1, 2];
    ```

    * If an empty array is provided, the array should not be modified.

    * **Modify the original array to complete this problem. There is no need to return anything from this function.**

### Hints

- In order to "rotate" an array to the left by one position, you need to remove the first element of the array, and add it to the end of the array.
