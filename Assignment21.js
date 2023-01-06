// JavaScript source code
//1. Select an <br h2 > tag with id of text and change its inner text to
//�Hello World�.


document.write("<h2 id=text>Hello World</h2></br>");

//2. Apply following style to the same h2 using Javascript DOM
//Method.
//    colour: red,
//        fontWeight: bold,
//            textTransform: uppercase

var element = document.getElementById("text");
element.style.color="red";
element.style.fontWeigth="bold";
element.style.TextTransform="uppercase";

//3. Create a simple calculator that takes the input from
//input1, input 2 and add them together.
 
function addition(input1,input2){
    let sum = input1+input2;
    return sum;
}
let output = addition(5,7);
document.write("<h3> The output of addition is : "+output+"</h3>");

//or

// document.write("<span id=one>1</span></br>");

// document.write("<span id=two>2</span></br>");

// document.write("<span id=result></span></br>");

// var num1=Number(document.querySelector("#one").innerText);
// var num2=Number(document.querySelector("#two").innerText);
// var result = num1 + num2;
// document.getElementById("result").innerHTML=`<strong>Result of addition  is ${result}</strong>`;

//4. What is the error in the following code ?

//Ans. In the <p> tag, instead of class being text, it should be id being text. Another way is to change
//document.getElementById("text") to  document.getElementsByClassName("text")

//    5. Using JS Dom select a button and set its onclick event to
//logging hello in the console.


function getHello() {
    var str1 = document.getElementById("name1").innerHTML="hello";
    console.log(str1);
    

}


//var element2 =document.querySelector('button').innerHTML = "hello";
// console.log("hello")



//6. Using alert, prevent a person from leaving the screen using JS DOM. 
//Output -  

alert("changes you made may not be saved");


//7. Select all the h2 tags on screen and change their colour to purple. 

var element5 = document.querySelectorAll("h2");
arr=Array.from(element5);
console.log(arr);
for (let i=0; i<arr.length; i++){
arr[i].style.color="purple";
}
//8. Create a new <h4> tag on the screen using JS DOM. 
// var element6 = document.create("h4");
// element6.append("How are you?");

var newh4 = document.createElement("h4");
console.log(newh4);



//9. Remove an element from the screen using js dom. 

var element1 = document.querySelector("h2");
element1.remove();


//10. Get the number of <p> tags on the screen using JS DOM. 
var element4 = document.getElementsByTagName("p").length;
console.log(element4);


//11. Fetch the value of name from the following form.

function getFormValue() {
    var str = document.getElementById("name").value;
    alert(str );
}



