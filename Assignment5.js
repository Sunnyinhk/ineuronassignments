// JavaScript source code

//1) Write a JavaScript program to get the volume of a Cylinder, Sphere and
//Cone with four decimal places using objects and classes.
//Create classes for volumes for each geometric shape which returns the
//output using the getVolume() method.

//    eg - to get volume of cylinder -
  //      let obj = new Cylinder(radius, height);

//obj.getVolume();

//Formulas for volumes of the shapes -
  //  1) Cylinder - Volume = πr

//2h

//where r is the radius and h is the height of the cylinder.
//2) Sphere - Volume= 4 / 3πr
//3
//where r is the radius
//3) Cone - Volume= πr
//2h / 3

//where r is the radius and h is the height of the cone.

class Cylinder {
    constructor(radius, height) {
        this.radius = radius;
        this.height = height;

    }
    getVolume() {
        let volume = (Math.PI) *(Math.pow(this.radius, 2)) * this.height
            console.log(` Volume of cylinder with radius of ${this.radius} and height of ${this.height} is ${volume}`)
    }
}

class Sphere {
    constructor(radius, height) {
        this.radius = radius;
        this.height = height;

    }
    getVolume() {
        let volume = (4 / 3) * (Math.pow(this.radius, 3));
        console.log(` Volume of sphere with radius of ${this.radius} and height of ${this.height} is ${volume}`)
    }
}


class Cone {
    constructor(radius, height) {
        this.radius = radius;
        this.height = height;

    }
    getVolume() {
        let volume = (Math.PI) * (Math.pow(this.radius, 2)) * (( this.height)/3)
        console.log(` Volume of Cone with radius of ${this.radius} and height of ${this.height} is ${volume}`)
    }
}


let obj1 = new Cylinder(5, 3);
obj1.getVolume()

let obj2 = new Sphere(5, 3);
obj2.getVolume()

let obj3 = new Cone(5, 3);
obj3.getVolume()