// JavaScript source code


//1. Write a Javascript function to check whether a triangle is equilateral,
 //   isosceles or scalene

//The equilateral triangle is characterized by having all its sides with equal length.
//The isosceles triangle has two equal sides and one unequal side.
//The scalene triangle has all its sides with different lengths.



function typeoftri(alength, blength, clength) {
    if (alength === blength && alength === clength)
        console.log(`Triangle with sides ${alength},${blength},${clength} is an equilateral triangle`);
    else if (alength !== blength && alength !== clength && blength !== clength)
        console.log(`Triangle with sides ${alength},${blength},${clength} is a scalene triangle`);
    else
        console.log(`Triangle with sides ${alength},${blength},${clength} is an isosceles triangle`);
}

typeoftri(3, 4, 5)
typeoftri(4, 4, 6)
typeoftri(5, 5, 5)




//2. Write a function using switch case to find the grade of a student based
//on marks obtained
//    a. “S grade” if the marks are between 90 and 100.
//   b. “A grade” if the marks are between 80 and 90.
//    c. “B grade” if the marks are between 70 and 80.
//    d. “C grade” if the marks are between 60 and 70.
//    e. “D grade” if the marks are between 50 and 60.
//    f. “E grade” if the marks are between 40 and 50.
//    g. “Student has failed” if the marks are between 0 and 40.
//    h.Else output “Invalid marks”.


let marks = 100;

switch (true) {
    case (marks < 40 && marks >= 0):
            console.log('Student has failed');
        break;
    case (marks < 50):
            console.log('Student has got E grade');
        break;
    case (marks < 60):
            console.log('Student has got D grade');
        break;
    case (marks < 70):
            console.log('Student has got C grade');
        break;
    case (marks < 80):
            console.log('Student has got B grade');
        break;
    case (marks < 90):
            console.log('Student has got A grade');
        break;
    case (marks <= 100):
            console.log('Student has got S grade');
        break;
    default:
        console.log('Invalid marks')
}



//    3. Write a JavaScript program to find the sum of the multiples of 3 and 5
//under 1000

let sum = 0;

for (let a = 0; a <= 1000; a++) {
    if (a % 3 == 0 && a % 5 == 0)
        sum = sum + a;
}

console.log(sum)

 //   4. Write a program to find the factorial of all prime numbers between a
//given range.Range will be passed as 2 values in the function
//        parameters.eg - if it is needed to find the values for numbers 1 - 100, then
//function declaration can look like - function prime(1,100).

flag = false
var fact = 1
function prime(x, y) {
    for (let i = x; i <= y - 1; i++) {
        for (let j = 2; j <= 9; j++)
            if (i % j == 0) {
                flag = false;
                continue;
            } if (flag = true) {
                fact = fact * i;
            } 
    } console.log(fact)
}


prime(1,100)