//1). The time has a format: hours:minutes. Both hours and minutes have two digits, like 09:00.
//Make a regex to find time in the string: Lunch at 10:10 in the room
//123:456. In this task there’s no need to check time correctness yet,
//so 25:99 can also be a valid result. The regex should not match333:333.

const a = "Lunch at 10:10 in the room 123.456";
const regex1 = /\s[0-2]\d:[0-6]\d\s/g;
const found = a.match(regex1)
console.log(found);

//2) Create a function that finds the word "happiness" in the given string(not case sensitive)
//if found return "Hurray!" otherwise return "There is no happiness"

function findhappiness(a){
    regex2 = /happiness/i;
    if (regex2.test(a))  {
        console.log("Hurray!");
    } else {
        console.log("There is no happiness");
    }
};

findhappiness("Work makes me happy");
findhappiness("You give me the feeling of happiness");

//3). Write a regular expression that matches only a prime number.
//Numbers will be presented as strings.
//Example
//“7” ➞ true
//“134” ➞ false

function isPrime(n) {
    var re = /^1?$|^(11+?)\1+$/,
          s = (new Array(n+1)).join('1');
  
    return !re.test(s);
  }
  console.log(isPrime(7));
  console.log(isPrime(134));

//4). Create a function that will return an integer number
//corresponding to the amount of digits in the given integer num
//Examples
//num_of_digits(1000) ➞ 4

//num_of_digits(12) ➞ 2
//num_of_digits(1305981031) ➞ 10

function intNum(b){
    var regex3 = /\d+$/
    if (regex3.test(b))  {
        console.log(b.toString().length);
}
else {
    console.log("Not a number");
}
};

intNum(1000);
intNum(12);
intNum(1305981031);

//5). Create a function that takes in a number as a string n and returns
//the number without trailing and leading zeros.
//● Trailing Zeros are the zeros after a decimal point which don't
//affect the value (e.g. the last three zeros in 3.4000 and
//3.04000).
//● Leading Zeros are the zeros before a whole number which
//don't affect the value (e.g. the first three zeros in 000234 and
//000230).
//removeLeadingTrailing("230.000") ➞ "230"
//removeLeadingTrailing("00402") ➞ "402"
//Notes
//● Return a string.
//● If you get a number with .0 on the end, return the integer value
//(e.g. return "4" rather than "4.0").
//● If the number is 0, 0.0, 000, 00.00, etc... return "0".

function removeZeroes(n){
    //var d = n.toString();
    //console.log(d);
    //n= n.replace (/\.0+$/,'');
    n=n.replace(/^0+/,'');
    n = parseFloat(n);
    console.log(n);
    }
removeZeroes("230.000");
removeZeroes("00402");
removeZeroes("4.0");
removeZeroes("00.000");

//6) Create a function that takes a word and returns true if the word has two 
//consecutive identical letters
//Examples doubleLetters('loop') -> true
//doubleLetters('yummy')-> true

function doubleLetters(l){
    for(let i=0; i<=l.length; i++){
        for (let j=i+1; j <=l.length; j++){
        if(l[j] == l[i]){
            return true;
        }}
    } return false;
}
console.log(doubleLetters("loop"));
console.log(doubleLetters("yummy"));


//7). ATM machines allow 4 or 6 digit PIN codes and PIN codes
//cannot contain anything but exactly 4 digits or exactly 6 digits. Your
//task is to create a function that takes a string and returns true if the
//PIN is valid and false if it's not.
//Examples
//validatePIN("1234") ➞ true
//validatePIN("12345") ➞ false

function validatePIN(n){
    numb = parseInt(n);
    let re1 = /^[1-9][0-9]{3}$/;
    let re2= /^[1-9][0-9]{5}$/;
    if(re1.test(numb) || re2.test(numb)){
        return true;
    }
    else {
        return false;
    }    
}
console.log(validatePIN("1234"));
console.log(validatePIN("12345"));

//8). Create a function that determines whether a string is a valid hex
//code. A hex code must begin with a pound key # and is exactly 6
//characters in length. Each character must be a digit from 0-9 or an
//alphabetic character from A-F. All alphabetic characters may be
//uppercase or lowercase.
//Examples
//isValidHexCode("#CD5C5C") ➞ true
//isValidHexCode("#EAECEE") ➞ true
//isValidHexCode("#CD5C&C") ➞ false

function isValidHexCode(c){
    let re3 = /^#[0-9 a-f]{5}/i;
    if (re3.test(c)){
        return true;
    }
    else {
        return false;
    }
} 
console.log(isValidHexCode("#CD5C5C"));
console.log(isValidHexCode("#EAECEE"));
console.log(isValidHexCode("#CD5C&C"));

//9). Create a function that takes an array of numbers and returns
//"Boom!" if the digit 7 appears in the array. Otherwise, return "there is
//no 7 in the array".

//Examples
//sevenBoom([1, 2, 3, 4, 5, 6, 7]) ➞ "Boom!"
// 7 contains the number seven.

//sevenBoom([8, 6, 33, 100]) ➞ "there is no 7 in the array"
// None of the items contain 7 within them.

function sevenBoom(d){
    let re5 = d;
    let re6= re5.toString();
    let re7 = /7/;

    if (re7.test(re6)){
    
        console.log("Boom! Array contains the number seven.");
    }
    else{
        console.log("There is no 7 in the array ");
    }
}
sevenBoom([1, 2, 3, 4, 5, 6, 7]);
sevenBoom([8, 6, 33, 100]);


//10). Create a function that takes a string, checks if it has the same
//number of x's and o's and returns either true or false.

//● Return a boolean value (true or false).
//● Return true if the amount of x's and o's are the same.
//● Return false if they aren't the same amount.
//● The string can contain any character.
//● When "x" and "o" are not in the string, return true.
//Examples
//XO("ooxx") ➞ true
//XO("xooxx") ➞ false
//XO("ooxXm") ➞ true
// Case insensitive.
//Notes
//● Remember to return true if there aren't any x's or o's.
//● Must be case insensitive.

function isXO(f){
    let count =(f.match (/x/g) || []).length;
    //console.log(count);
    let count1=(f.match (/o/g)).length;
    //console.log(count1);
    if (count == count1){
        return true;
        }
    else{
        return false;
    }

}        

console.log(isXO("ooxx"));
console.log(isXO("xooxx"));
console.log(isXO("ooxXm")); 