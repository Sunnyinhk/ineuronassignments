// JavaScript source code
//1. Write a JavaScript program to take an array as input from the user and calculate
//the sum of numbers in odd places and the sum of numbers at even places.
let nums = [1, 2, 3, 4, 5]
let sumodd = 0;
let sumeven = 0;
let countodd = 0;
let counteven = 0;
for (let num of nums) {
    if (num % 2 === 0) {
        sumeven = sumeven + num;
        counteven = counteven + 1
    }
    else {
        sumodd = sumodd + num; 
        countodd = countodd + 1;
    }
} 
console.log(`Sum of numbers at odd places = ${sumodd}`); // 9
console.log(`Sum of numbers at even places = ${sumeven}`); //6

//    a) Print the difference between the two sums
console.log(`Difference =  ${sumodd - sumeven}`);

//b) Print the number of elements in odd places
    console.log(`Odd Elements = ${countodd}`);

//c) Print the number of elements in even places
    console.log(`Even Elements = ${counteven}`);


//d) Print the average of all elements in the array
console.log(`Average = ${(sumodd+sumeven)/(countodd+counteven)}`)

//e) Print GCD of Sum of Numbers at Odd Places and Sum of Numbers at Even
//Places

while (sumodd != sumeven) {

    //check if sumodd > sumeven
    if (sumodd > sumeven) {
        //Subtract sumeven from sumodd
        sumodd = sumodd - sumeven;
    } else {
        //Subtract sumodd from sumeven
        sumeven = sumeven - sumodd;
    }
}

console.log (`GCD = ${sumeven}`);



//2. Write a JavaScript program to take 2 arrays from the user and check if the
//number 4 exists in any of the arrays, or both of the arrays.
let arr1 = [1, 2, 3, 4, 5];
let arr2 = [4, 6, 1, 8, 2];
if (arr1.filter(num3 => num3 == 4) && arr2.filter(num4 => num4 == 4)) {
    console.log(`4 in both arrays`);
} else if
    (arr1.filter(num3 => num3 == 4)) {
    console.log('4 is in array 1')
} else if 
    (arr2.filter(num4 => num4 == 4)) {
    console.log('4 is in array 2')
}
else console.log(`4 is not both arrays`);

//var a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
//var b = [2, 4, 5, 7, 11, 15];

//for (let i of a) {
 //   if (b.includes(i)) {
   //     console.log(i)
    //}
//}


//--------- OR--------------
//let value = 4
//var c = arr1.filter( => arr2.includes({ value }))
//console.log(c) 


//Sample Input 2:
let arr3 = [1, 2, 3, 6, 5];
let arr4 = [4, 6, 1, 8, 2];

var c = (arr3.filter(num5 => num5 == 4)) 
var d =(arr4.filter(num6 => num6 == 4))
if (c.length > 0 && d.length > 0) { 
console.log(`4 in both arrays`);
} else if
    (c.length >0) {
    console.log('4 in array 1')
} else if
    (d.length > 0) {
    console.log('4 in array 2')
}
else console.log(`4 is not both arrays`);
   

//Output:
//4 in array 2
//Sample Input 3:
let arr5 = [1, 2, 3, 4, 5];
let arr6 = [5, 6, 1, 8, 2];

var a = (arr5.filter(num5 => num5 == 4))
var b = (arr6.filter(num6 => num6 == 4))
if (a.length > 0 && b.length > 0) {
    console.log(`4 in both arrays`);
} else if
    (a.length > 0) {
    console.log('4 in array 1')
} else if
    (b.length > 0) {
    console.log('4 in array 2')
}
else console.log(`4 is not both arrays`);
//Output:
//4 in array 1
//3. Write a JavaScript program to flatten the array, ie, turns a deep array into a plain
//array.
//    Note: Do not use array.flat();
//Sample Input:
let arr7 = [1, 2, [3, 4, [5]]];
var x = arr7[0];
var y = arr7[1];
var e = arr7[2];
var f = e[0];
var g = e[1];
var h = e[2];
var j = h[0];
let arr8 = [x,y, f, g, j];
console.log(arr8);
//Output:
//[1, 2, 3, 4, 5]
//4. Write a JavaScript program to take an array as input from the user and:

//Sample Input:
let arr9 = [1, 2, 3, 2, 3, 4, 5]
let arr10 = [];
//a) Store all duplicate elements in a separate array

arr9.filter((item,index) => arr9.indexOf(item) !== index) 
    .forEach(num10 => arr10.push(num10));
console.log("Duplicate Elements =", arr10);


//b) Remove the duplicate elements from the original array


function removeDuplicates(arr9) {
    return arr9.filter((item,
        index) => arr9.indexOf(item) === index);
}

console.log(removeDuplicates(arr9));
//const toFindDuplicates = arr9 => arr9.filter((item, index) => arr.indexOf(item) !== index)
//const duplicateElementa = toFindDuplicates(arr9);
//console.log(duplicateElements);
//Output:
//Duplicate Elements = [2, 3]

//5. Debug the given JavaScript program and execute the correct code
let arr = [12, 13, 1, 10, 34, 16];
let n = arr.length;

function thirdLargest(arr, arr_size) {
    if (arr_size < 3) {
        console.log("Invalid Input");

    }
    else {
        let first = arr[0];
        for (let i = 0; i < arr_size; i++) {
            if (arr[i] > first)
               first = arr[i];
        }

        let second = 0;
        for (let i = 0; i < arr_size; i++) {
            if (arr[i] > second && arr[i] < first)
                second = arr[i];
        }

       let third = 0;
       for (let i = 0; i < arr_size; i++) {
            if (arr[i] > third && arr[i] < second)
                third = arr[i];
        }

        console.log("The third largest " + "element is ", third);
    }
}

thirdLargest(arr, n);
