// JavaScript source code

//1. Write a program to find whether a given year is a leap year or not.

function chklpyr(year) {
    if (year % 4 === 0) {
        console.log(`The year ${year} is a leap year`);
    }
     else {
        console.log(`The year ${year} is not a leap year`)
    };
};

chklpyr(2015) //input prompt was showing as not defined so made input as part of the argument for the parameter



//2. Write a JavaScript program to convert temperatures to and from Celsius,
   // Fahrenheit.
//[Formula : c / 5 = (f - 32) / 9[where c = temperature in Celsius and f = temperature in
   // Fahrenheit ]
//Expected Output:
//60°C is 140 °F
//45°F is 7.222222222222222°C

function tempcel(temp) {
//60 is 140 °F
        var fah = 32 + 9*(temp / 5);
        console.log(`${temp}°C   is ${fah} °F`)
    }


function tempfah(temp1) { 
            var cel = ((temp1 - 32) * 5)/9;
            console.log(`${temp1}°F is ${cel} °C`)
  
}
tempcel(60);
tempfah(45)


//3. Write a program to find the factorial of a number.

var x = 12;
var z = 1;
for (let i = 1; i <= x; i++) {
    z = z * i;
}
 
console.log(`The factorial of ${x} is ${z}`)
