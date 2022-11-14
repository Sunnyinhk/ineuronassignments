// JavaScript source code

//1. Can we put duplicate values in the set object ?
// Response - No. Data values are unique in a set.


 // 2. Write the syntax for
//a) Creating new set object
// response - created a new set object below
let set = new Set();

//b) Adding new element to set object
//Response - Added a couple of numbers and a string below
set.add(6);
set.add(8);
set.add("Suneet");


//c) Deleting element from set object
set.delete(8);

console.log(set);
console.log(set.size);

//3. Create a set object with four random numbers from 0 to 10. Check if this
//newly created set object has 8 in it. Use set object methods.
let set1 = new Set();
let array = new Array();
for (let i = 1; i <= 10; i++) {
    let num = (Math.ceil(Math.random() * 10));
    array.push(num)
    set1.add(num);
}

console.log(set1.has(8));

console.log(set1);
console.log(array);
console.log(set1.size);

