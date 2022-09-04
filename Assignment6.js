// JavaScript source code

//1) Perform the following operations to provide the implementation for a
//Rectangle class.The operations are:
//1. Add an area() method to the Rectangle class.
//2. Create a Square class that satisfies the following conditions:
//○ It is a subclass of Rectangle.
//○ It contains a constructor and no other methods.
//○ It can use the Rectangle class' area method to print the area
//of a Square object.


class Rectangle {
    constructor(width, height) {
        this.width = width;
        this.height = height;

    }
    getArea() {
        let area = this.width*this.height
        console.log(` The area is ${area}`)
    }
}

class Square extends Rectangle {
    constructor(height) {
        super(height);

        this.width = height;
        this.height= height;
    }
}


let obj1 = new Rectangle(3, 7);
obj1.getArea()

let obj2 = new Square(7);
obj2.getArea()

//2) Write a javascript function find_largest to return the nth largest number

//    in an array -
//        eg - given an array of integers - [3, 45, 6, 7, 23, 5, 7, 8]

//find_largest(3) will return third largest number from the above array -
    //which is 8.

let nums = [3, 45, 6, 7, 23, 5, 7, 8];
let nums1 = nums.sort(function (a, b) {return b - a})

console.log(nums1[2])

//3) Write a JavaScript program which accept a number as input in the
//function parameter and insert dashes(-) between each two even
//numbers.
//For example if you accept 025468 as the output should be 0 - 254 - 6 - 8.
//computeDash(025468) -> 0 - 254 - 6 - 8.


function computeDash(number) {
    const str = number.toString();
    const result = [str[0]];

    for (let x = 1; x < str.length; x++) {
        if ((str[x - 1] % 2 === 0) && (str[x] % 2 === 0)) {
            result.push('-', str[x]);
        }
        else {
            result.push(str[x]);
        }
    }
    console.log(result.join(''));

}
computeDash('025468');



