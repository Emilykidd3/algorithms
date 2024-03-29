# Simplify Path

Writing a code to create a function that takes in a string representing an absolute file path and simplifies it, similar to `path.join`.

## Instructions

    - Return a simplified canonical version of the file path.

    - For example, if given the following path:

    ```js
    var path = "/home/..";
    ```

    - The following should be returned:

    ```js
    "/home";
    ```

    - Since the trailing forward slash isn't necessary.

    - Given the following path:

    ```js
    var path = "/../";
    ```

    - The following should be returned:

    ```js
    "/";
    ```

    - Since there's no way to `cd ..` from the root directory.

    - Given the following path:

    ```js
    var path = "/a/./b/../../c/";
    ```

    - The following should be returned:

    ```js
    "/c";
    ```

    - Since we start at folder `a`, cd in folder `b` which is inside of `a`. Then we come up one level, back to `a`, then come up another level, up to the root, then go into `c` which is a the root level.

    - Given the following path:

    ```js
    var path = "/a/../../b/../c//.//";
    ```

    - The following should be returned:

    ```js
    "/c";
    ```

    - Same as the previous example, but consecutive `/`s are collapsed into one `/` and a single `.` alone doesn't change directories.

    - Given the following path:

    ```js
    var path = "/a/b/c/d/..";
    ```

    - The following should be returned:

    ```js
    "/a/b/c";
    ```

    - Since we cd'd into `/a/b/c/d/` and then came up one directory.

### Hints

- Spend some time examining the examples provided here to make sure you understand file paths. Feel free to experiment in your terminal to see how changing directories will affect your folder location.
