// JavaScript source code
//1. Input a String S, and check its length and if the length is greater than 4,
 //   truncate the input String and output the result -
 //       Input: Ice Output: Ice
//Input:Icecream Output:Icec...
let str = "Ice";
let s = "Icecream";
console.log(str.slice(0, 4))
console.log(s.slice(0,4))

//2. Input a String S with multiple words, and remove whitespaces and
//output the result -
   // Input: “Hii Boy” Output: “HiiBoy”

let s1 = "Hii Boy";
console.log(s1.replace(/\s/g,''))

//3. Input a String S with two words, and replace first word with second word
//and display the result -
//    Input: “Hii Boy” Output: “Boy Hii”
let s2 = "Hii Boy"
s3 = s2.replace("Boy", "Hii");
console.log(s3.replace("Hii", "Boy"))

//4. Input a String S with a word, and replace character “a” with “x” and
//display the result -
 //   Input: “apple” Output: “xpple”
let s4 = "apple";
console.log(s4.replace(/a/, "x"))

//5. What string method can be used to convert string into array ?
//Ans. By using the split function. See below
var s5 = "string";
console.log(s5.split(''))

    //6. What string method can be used to check the occurrence of a specified
//text in a string ?
//Ans. By using the includes function. See below

var s6 = "String method to check the occurence of a specified text";
console.log(s6.includes("check"))


 //   7. How can you break a string to a newline in Javascript ?
// By splitting and using a loop. See below
var s7 = "string";
let s8 = s7.split('');
for (let i = 0; i < s8.length; i++) {
    console.log(s8[i]);
}


        //8. Write a Javascript function to test whether the first character of a string
//is lowercase.

var s9 = "Lowercase";
let s10 = s9[0];
if (s10.toLowerCase === s10) {
    console.log(`the first character ${s10} of ${s9} is lowercase`)
}
else {
    console.log(`the first character ${s10} of ${s9} is not lowercase`)
}


//9. Give a correct verdict to users input if he enters "yes", "YES", "Yes", etc
//    (any combination) using string methods.
//How will you handle that ?

 var verdict = function correctVerdict(uinput) {
     if (uinput == "yes") {
         return "Input is correct";
     }
     else if (uinput == "YES") {
         return "Input is correct"
     }
     else if (uinput == "Yes") {
         return "Input is correct"
     }
     else {
         return "Input is wrong";
     }  
}
console.log(verdict("Yes"));
console.log(verdict("No"));

   // 10. Given a String S, achieve following tasks
//a) Convert the String into upper case.
var s11 = "SString";
let s12 = s11.toUpperCase();
console.log(s12);



//b) Convert only the first character to uppercase.
let s13 = s12[0].toUpperCase();
console.log(s13);
   //c) Convert the String into lower case.
let s14 = s11.toLowerCase();
console.log(s14);
//d) Break the string into two halves and swap them.
var str1 = s11.slice(0,3)
console.log(str1)
var str2 = s11.slice(3, 7);
console.log(str2)
var str3 = str2 + str1;
console.log(str3);
   // e) Count the repeating characters.

function findRepeat() {
    const arr = s11.split('');
    const hash = new Map();
    const result = [];
    // If repeat the value is false, if no repeat the value is true
    for (let i = 0; i < arr.length; i++) {
        if (hash.get(arr[i]) === undefined) {
            hash.set(arr[i], true);
        } else {
            const value = hash.get(arr[i]);
            if (value) {
                hash.set(arr[i], !value);
            }
        }
    }
    hash.forEach((v, k) => {
        if (!v)
            result.push(k);
    });
    return result;
}
console.log(...findRepeat());

      //  f) Reverse the string
const reverse = s11.split('').reverse().join('');

console.log(reverse); 