# Needle in the Haystack

Write a code to create a function that takes two strings and checks to see if the second string is present in the first string. If so, the starting index of the second string in the first string should be returned, else `-` should be returned.

## Instructions

- If the second string is a substring of the first string, return its starting index in the first string.

- For example, given the following strings:

```js
var str1 = "JavaScript";
var str2 = "Scr";
```

- The following number should be returned:

```js
4;
```

- Since `Scr` is found inside of the first string, starting at index `4`:

- If the second string is empty, return `0`. For example:

  ```js
  var str1 = "algorithms";
  var str2 = "";
  ```

````

* The following number should be returned:

```js
0;
````

- This is consistent with the behavior of the built-in `indexOf` method when used on strings e.g. `"algorithms".indexOf("") === 0`

- You may not use the built-in `indexOf` method.
