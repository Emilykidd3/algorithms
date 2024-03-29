// Write a function that takes in an absolute file path and simplifies it

// key
// .. takes you back a directory
// . keeps in same directory
// / at the beginning takes you to the root directory
// / at the end does nothing?
//

// pseudocode
// if empty return "/"
// if there is /.. take out letter before it
// if there is /. take it out
// if there is a / at the end, remove it

// pseudocode
// two periods make you go back a directory
// one period keeps you in the same directory

var path = "/a/b/c/d/..";
// should return "/C"

var simplifyPath = function (path) {
  // returns a / if there is nothing in the string
  if (path === "") {
    console.log("/");
    return "/";
  }

  // removed /s at the end if there are any
  for (var i = 0; i < path.length; i++) {
    if (path[path.length - 1] === "/") {
      path = path.slice(0, path.length - 1);
    }
  }

  // removes /. in the path if there are any, but not /..
  for (var i = 0; i < path.length; i++) {
    if (path[i] === "/" && path[i + 1] === "." && path[i + 2] != ".") {
      if (path.length > 2) {
        var path1 = path.substr(0, i);
        var path2 = path.substr(i + 2, path.length);
        path = path1 + path2;
        i -= 2;
      } else {
        path = "/";
      }
    }
  }

  // removes /.. and letters before it if there are any
  for (var i = 0; i < path.length; i++) {
    // if path of i is X/..
    // for loop and get an amount to subtract
    // remove X/..
    // if path of i is //.. ./..
    // remove /..
    // if path of i is /..
    // remove ..

    if (
      path[i - 1] &&
      path[i - 1] != "/" &&
      path[i - 1] != "." &&
      path[i] === "/" &&
      path[i + 1] === "." &&
      path[i + 2] === "."
    ) {
      var amountToSubtract = 0;
      for (var j = 0; j <= path.length - i + 1; j++) {
        if (path[i - j] != "/" && path[i - j] != "." && path[i - j]) {
          amountToSubtract += 1;
        }
      }
      var path1 = path.substr(0, i - amountToSubtract);
      var path2 = path.substr(i + 3, path.length);
      path = path1 + path2;
      i = 0;
      amountToSubtract = 0;
    } else if (
      path[i] === "/" &&
      path[i + 1] === "." &&
      path[i + 2] === "." &&
      path[i + 3]
    ) {
      var path1 = path.substr(0, i + 1);
      var path2 = path.substr(i + 3, path.length);
      path = path1 + path2;
      i = 0;
    } else if (path[i] === "/" && path[i + 1] === "." && path[i + 2] === ".") {
      var path1 = path.substr(0, i + 1);
      var path2 = path.substr(i + 3, path.length);
      path = path1 + path2;
    }
  }

  // if there are two / in a row, delete the first one
  for (var i = 0; i < path.length; i++) {
    if (path[0] === "/" && path[1] === "/") {
      path = path.substr(1, path.length);
      i -= 1;
    }
  }

  // if the last character is a /, remove it
  for (var i = 0; i < path.length; i++) {
    if (path[path.length - 1] === "/" && path.length > 1) {
      path = path.substr(0, path.length - 1);
    }
  }
  console.log(path);
};

simplifyPath(path);
