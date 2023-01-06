//Q 1). How does async/await help with performance and scalability? 

//Ans
//Async/Await makes it simple and easy to convert your code from synchronous programming to asynchronous programming. 
//As a result, you can call an async method independently by passing it a task object, 
//then do some unrelated work, and then await that task to see if it has already finished
//Also They can make your application handle more users. Most multi-user applications, such as web sites, use a thread for each user session. The interface beocmes 
//more responsive to the user.


//Q 2). Is it possible to use async/await with promise chains? If yes, how can this be achieved? 

//Ans
//Inside an async function, you can use the await keyword before a call to a function that returns a promise. 
//This makes the code wait at that point until the promise is settled, 
//at which point the fulfilled value of the promise is treated as a return value, or the rejected value is thrown

//Q 3). Give 3 real world examples where async/await has been used? 
//Ans
// 1. The most common use of the asynchronous function is to make a call to an API.
//Real world example — Currency Converter that is receiving asynchronous data from two API’s.
//2. Used for login calls by transforming Login call to async/await.
//3.Accessing social media platforms like Twitter, facebook etc.


//Q 4). 
// async function inc(x) { 
// x = x + await 1 
// return x; 
// } 
// async function increment(x){ 
// x = x + 1 
// return x 
// } 
// inc(1).then(function(x){ 
// increment(x).then(function(x){ 
// console.log(x) 
// }) 
// }) 
//Find output. 

//Ans
//3



//Q 5). 
// let p = new Promise(function (resolve, reject) { reject(new Error("some error")); 
// setTimeout(function(){ 
// reject(new Error("some error"));
// },1000) 
// reject(new Error("some error")); }); 
// p.then(null, function (err) { console.log(1); 
// console.log(err); 
// }).catch(function (err) { 
// console.log(2); 
// console.log(err); 
// }); 
//Find output.
//Ans
//1
//Error: some error

// Q 6). 
// async function f1() { 
// console.log(1); 
// } 
// async function f1() { 
// console.log(2); 
// } 
// console.log(3); 
// f1(); 
// console.log(1); 
// f2(); 
// async function f2() { 
// console.log("Go!"); 
// } 
//Find output. 
//Ans
//3
//2
//1
//Go!


//Q 7). 
// function resolveAfterNSeconds(n,x) { return new Promise(resolve => {
// setTimeout( ( ) => { 
// resolve(x); 
// }, n); 
// }); 
// } 
// (function(){ 
// let a = resolveAfterNSeconds(1000,1) 
// a.then(async function(x){ 
// let y = await resolveAfterNSeconds(2000,2) 
// let z = await resolveAfterNSeconds(1000,3) 
// let p = resolveAfterNSeconds(2000,4) 
// let q = resolveAfterNSeconds(1000,5) 
// console.log(x+y+z+await p +await q); 
// }) 
// })() 
//Find output.

//Ans
//15

//8). Is it possible to nest async functions in JavaScript? Explain with examples. 
//Ans
//Yes. When calling another function from a function or another function in a class or by using Try/catch in the function.

//9). What is the best way to avoid deadlocks when using async/await? 
//Ans
//Some synchronization contexts are non-reentrant and single-threaded. This means only one unit of work can be executed in the context at a given time.
//An example of this is the Windows UI thread or the ASP.NET request context. In these single-threaded synchronization contexts, it’s easy to deadlock yourself. 
//If you spawn off a task from a single-threaded context, then wait for that task in the context, your waiting code may be blocking the background task.
//The solution is simple, use async all the way down. Never block on tasks yourself.


//10). In which scenarios would you use synchronous code instead of asynchronous code?
//Ans
//if you have an API which internally is implemented synchronously, you should not expose an asynchronous counterpart that simply wraps the synchronous method 