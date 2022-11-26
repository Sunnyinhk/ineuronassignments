// JavaScript source code

//1). Create a function that finds the maximum range of a triangle's
//third edge, where the side lengths are all integers.
//    Examples
//nextEdge(8, 10) ? 17
//nextEdge(5, 7) ? 11
//nextEdge(9, 2) ? 10
//Notes
//? (side1 + side2) - 1 = maximum range of third edge.
//? The side lengths of the triangle are positive integers.
//? Don't forget to return the result.

function maxRange(side1, side2) {
    let nextEdge = side1 + side2 -1 ;
    console.log(nextEdge);
}

maxRange(8, 10);
maxRange(5, 7);
maxRange(9, 2);




//2). The right shift operation is similar to floor division by powers of
//two.Write a function that mimics(without the use of >>) the right
//shift operator and returns the result from the two given integers.Try
//to solve this challenge by recursion.


var res = 0; res1 = 0;
function recur(a, b) {
    if (a == 0) {
        return 0;
    }
    else if (b == 1) {
        return 1;
    } else
    var i = -1
    var dd = Math.abs(a);
    var dv = Math.abs(b);
    var dd1 = 0;
    while (dd > dv || dd1 > dv) {
        i++;
        dd1 = dd - dv;
        dv = dv * 2;
        res = 2 ** i
    } res1 += res;
    if (dd1 > b) { i = -1; recur(dd1, b) }
    else {
        console.log(res1);
    }

};
recur(516, 28);




//3). Create a function that takes numbers b and m as arguments and
//returns the second derivative of the function f(x)=x ^ b + x * (e ^ (b * m))
//with respect to x evaluated at x = m, where b and m are constants.

const e = 2.71828; // represents the Euler's number
function secDer(b, m) {
    let x = m;
    let y = x ^ b + x * (e ^ (b * m));
    
    let firstder = (b) * (x ^(b - 1)) + (b * m)*(x * (e ^ ((b * m) - 1)));
    let secondder = (b * (b - 1)) * (x ^ (b - 2)) + ((b * m)*(b * m - 1) * (x * (e ^ ((b * m) - 2))));
    return secondder;
}


console.log(secDer(3, 2));


//4). This Triangular Number Sequence is generated from a pattern of
//dots that form a triangle.The first 5 numbers of the sequence, or
//dots, are:
//1, 3, 6, 10, 15

//This means that the first triangle has just one dot, the second one
//has three dots, the third one has 6 dots and so on.
//Write a function that returns the cumulative sum of the number of
//all the previous(including current) dots when given its
//corresponding triangle number of the sequence.

//    Figure: Triangular Number Sequence

//Examples
//triangle(1) ? 1
//triangle(6) ? 56(1 + 3 + 6 + 10 + 15 + 21)

const triNumSeq = (n) => {
    let a = 0;
    let b = 0
    for (let i = 1; i <= n; i++) {
        a += i;
        b += a;
    } return b;
};
console.log(triNumSeq(1));
console.log(triNumSeq(6));





//5). Given a total due and an array representing the amount of
//change in your pocket, determine whether or not you are able to pay
//for the item.Change will always be represented in the following
//order: quarters, dimes, nickels, pennies.
//To illustrate: changeEnough([25, 20, 5, 0], 4.25) should yield true,
//    since having 25 quarters, 20 dimes, 5 nickels and 0 pennies gives
//you 6.25 + 2 + .25 + 0 = 8.50.
//    Examples
//changeEnough([2, 100, 0, 0], 14.11) ? false

//changeEnough([0, 0, 20, 5], 0.75) ? true
//changeEnough([30, 40, 20, 5], 12.55) ? true
//Notes
//? quarter: 25 cents / $0.25
//? dime: 10 cents / $0.10
//? nickel: 5 cents / $0.05
//? penny: 1 cent / $0.01


function changeEnough(arr, pay) {
    let a = arr[0] * 25;
    let b = arr[1] * 10;
    let c = arr[2] * 5;
    let d = arr[3] * 1;
    let e = (a + b + c + d)/100;
    let f = pay;
    var result = (e >= f) ? "Enough change" : "Not Enough Change";
    console.log(result);
}

changeEnough([2, 100, 0, 0], 14.11);
changeEnough([0, 0, 20, 5], 0.75);
changeEnough([30, 40, 20, 5], 12.55);