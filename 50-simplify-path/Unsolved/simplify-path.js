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

var path = "/a/../../b/../c//.//"
// should return "/C"

var simplifyPath = function(path) {
    if (path === ""){
        console.log("/");
        return "/";
    }
    for (var i = 0; i < path.length; i++) {
        if (path[path.length-1] === "/") {
            path = path.slice(0, path.length-1);
            console.log(path)
        }
    }
    for (var i = 0; i<path.length; i++) {
        if (path[i] === "/" && path[i+1] === "." && path[i+2] === "."){
            console.log("here")
            var path1 = path.substr(0, i-1);
            var path2 = path.substr(i+3, path.length);
            path = path1+path2;
            console.log(path)
            i-=3;
        } 
    }
    // path = path.replace("/.", "");
};

simplifyPath(path);
