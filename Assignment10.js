// JavaScript source code

//1. Are Higher Order functions and Call back functions the same ? If not,briefly explain about both functions.
// response -A high-order function (HOF) is a function that returns a function, as opposed to a simple value.A callback function is a function passed into another function as an argument, which is then invoked inside the outer function to complete some kind of routine or action.
// A callback function is a function passed into another function as an argument, which is then invoked inside the outer function to complete some kind of routine or action.




//2. Is filter a Higher Order function in Javascript ? If yes, why ?
// response - Yes. It is a higher order function.
//Because it expects as an argument a function, and this function can either return false or true which can filter out the  array elements.




//3. Give an example of a Higher Order function and a call back function used in the same program.
function HigherOrderFunction(a, b, callback) {
    let res = a * b;
    callback(res);
}
    function Test() {
        console.log("This is a test");
    }

HigherOrderFunction(6,3, Test);
// Here 'HigherOrderFunction' is higher order function and 'Test' function is passed as argument


//4. Carefully check the example below:
//a) What will be the output of this program ?
// -response - output as below
//  Hello John
//  Hello Tina
//  Hello Kale
//  Hello Max


 // b) Which function is a Higher Order function here ?
// response - useFunction is the Higher Order function

const names = ['John', 'Tina', 'Kale', 'Max']
function useFunction(arr, fn) {
    for (let i = 0; i < arr.length; i++) {
        fn(arr[i]);
    }
}
function argFn(name) {
    console.log("Hello " + name);
}
useFunction(names, argFn);
