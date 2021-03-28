# Multiply into 20

In this activity you will be writing code to create a function that takes an array of unique numbers. Return `true` if any two numbers can be multiplied into 20, else return `false`.

## Instructions

  * Return `true` if any two numbers in the given array multiplies into 20, else return `false`.

  * For example, given the following array:

  ```js
  var arr = [3, 4, 5, 7, 9]; // 4 * 5 === 20
  ```

  * The following should be returned:

  ```js
  true
  ```

  * Given the following array:

  ```js
  var arr = [20, -20, 18, 2, 3, 4]; // no two numbers multiply into 20
  ```

  * The following should be returned:

  ```js
  false
  ```

### Hints

* This problem can be solved using a nested for-loop, comparing every number to every other number.
