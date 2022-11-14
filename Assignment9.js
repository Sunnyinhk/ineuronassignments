// JavaScript source code

//1. Carefully observe this example.
   // a) Is the InnerFunction() a closure ?
// response - Yes

    //    b) What is output of this program
// Please note that I changed alert to console.log
//response - 100
function OuterFunction() {
    var outerVariable = 100;
    function InnerFunction() {
        console.log(outerVariable);
    }
    return InnerFunction;
}
var innerFunc = OuterFunction();
innerFunc();

//2. What is the difference between a closure and a scope ?
// response - Closure returns not only the the functions but also the variables which are there in the lexical scope.
// A scope in JavaScript defines what variables you have access to. There are two kinds of scope – global scope and local scope.

// 3. What is a lexical scope and how is it related to closure ?

// response - Lexical scope means things that it can access. A function with lexical scope is closure


//  4. Output of following closure ?
// -  response
// 3
// 3
// 3

for (var i = 0; i < 3; i++) {
    setTimeout(function log() {
        console.log(i); // What is logged?
    }, 1000);
}
