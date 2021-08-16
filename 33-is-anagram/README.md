# Is Anagram

Write a code to create a function that takes in two strings and returns `true` if one string is an [anagram](https://en.wikipedia.org/wiki/Anagram) of another string, otherwise return `false`.

## Instructions

- Return `true` if one string is an anagram of the other string. Otherwise return `false`

  - An anagram is a word or phrase made by rearranging the letters of another word or phrase.

- You can check if the strings are anagrams of each other by checking to see if any permutation (combination of letters in) of the first string is equal to the second string.

- For example, given the following strings:

```js
var strA = "nnjjdyus";
var strB = "njdnsjyu";
```

- The following should be returned:

```js
true;
```

- Given the following strings:

```js
var strA = "tacocat";
var strB = "ctatocato";
```

- The following should be returned:

```js
false;
```

- You may assume the string will contain all lower-cased letters.

* You can approach this problem by trying to find out if both strings are the same length and contain the same letters.
