# Rotation Point

Writing a code to create a function that takes in an array of strings. These strings will be in sorted order, but the array may be rotated. Return the index of the rotation or -1 if there is none.

## Instructions

    - If the sorted array has been rotated, return the index of rotation, else return -1. The rotation point will be the first word that is less than the previous word alphabetically.

    - For example, given the following array:

    ```js
    var words = ["cool", "cat"];
    ```

    - The following should be returned:

    ```js
    1;
    ```

    - Since alphabetically "cat" comes before "cool".

    - Given the following array:

    ```js
    var words = ["great", "ostrich", "panther", "ruby", "chosen", "feathers"];
    ```

    - The following should be returned:

    ```js
    4;
    ```

    - Since alphabetically, "chosen" comes before "ruby".

### Hints

- Look into how you would check if one string comes before another alphabetically. It's similar to how you'd compare the order of numbers.
