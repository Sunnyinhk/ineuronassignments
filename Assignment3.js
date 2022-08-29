// JavaScript source code
//1. Using for loops, write a Javascript program to output the following
//pattern -
//1
//2 3
//4 5 6
//7 8 9 10


//now using loops

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for (let x in arr) {
    console.log(arr[0]);
    console.log(arr[1], arr[2]);
    console.log(arr[3], arr[4], arr[5]);
    console.log(arr[6], arr[7], arr[8], arr[9]);
    break
}


//2. Write a program to find whether a given number is armstrong number or

//not -
    //The Armstrong number is a number that is equal to the sum of cubes of

//its digits.For example 0, 1, 153, 370, 371 and 407 are the Armstrong
//numbers.Let's try to understand why 153 is an Armstrong number.
//153 = (1 * 1 * 1) + (5 * 5 * 5) + (3 * 3 * 3) where:
//(1 * 1 * 1) = 1
 //  (5 * 5 * 5) = 125
  //      (3 * 3 * 3) = 27
//So:
//1 + 125 + 27=153

// program to check an Armstrong number of three digits



function armstr(number) {
    let total = 0;
    let num = number;
    while (num > 0) {
        let digit = num % 10;

        total +=(digit * digit * digit);

        num = parseInt(num / 10);
       
    }
    if (total == number) {
        console.log(`${number} is an Armstrong number`);
    }
    else {
        console.log(`${number} is not an Armstrong number`);
    }
}
armstr(185)
armstr(153)
armstr(370)

//3. Write a program to find whether a given number is special number or
//not -
//    If the sum of the factorial of digits of a number(N) is equal to the
//number itself, the number(N) is called a special number.
//    eg - 145 is a special number
//Logic - 1! + 4! + 5 != 1 + 24 + 120 i.e 14


function specnum(number) {
    let total = 0;
    let num = number;
    while (num > 0) {
        let digit = num % 10;
        let z = 1;
        for (let i = 1; i <= digit; i++) {
            z = z * i;
        }
        total += z
        num = parseInt(num / 10);

    }
    if (total == number) {
        console.log(`${number} is a Special number`);
    }
    else {
        console.log(`${number} is not a Special number`);
    }
}
specnum(145)
specnum(153)
specnum(370)