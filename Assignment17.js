// JavaScript source code

//1. Create a function to iterate over the following list["John",
//"Rohn", "Danny", "James"]

let user = ["John", "Rohn", "Danny", "James"]

let g = user[Symbol.iterator]();

console.log(g.next().value);
console.log(g.next().value);
console.log(g.next().value);
console.log(g.next().value);
console.log(g.next().done);

//2. Iterate over all the characters of the word "iNeuron".

let str1 = "iNeuron";
let itr1 = str1[Symbol.iterator]();
let res = itr1.next();


while (!res.done) {
    console.log(res.value);
    res = itr1.next();
};



//3. Create a functional iterator, with a next function.


function *display() {
    console.log("Hello");
    yield "First Pause";
    console.log("World");
    yield "Second Pause";
    console.log("How");
    yield "Third Pause";
    console.log("are");
    yield "Fourth Pause";
    console.log("you");

}
let control = display();
console.log(control.next());
console.log(control.next());
console.log(control.next());
console.log(control.next());


//4. In the following two arrays find which two elements match
//using iterators.
//    Array 1 - ["a", "b", "c", "d"]
//Array 2 - ["e", "f", "g", "h", "a", "i", "j"]

let x = ["a", "b", "c", "d"];
let y = ["e", "f", "g", "h", "a", "i", "j"];
let h = x[Symbol.iterator]();

function *matching(){
    
   
        for (j=0; j<y.length; j++){
            
            if(res == y[j]){
                yield console.log(`${res} matches`);
            } 
        }      
} 

let control1 = matching();
res = h.next().value;
control1.next();
res = h.next().value;
control1.next();
res = h.next().value;
control1.next();
res = h.next().value;
control1.next();


// 

//5. What are the different ways of iterating through an array ?
//    demonstrate them.

	let array = ["John", "Rohn", "Danny", "James"];
	
	// Accessing array elements one by one
	console.log(array[0]);
	console.log(array[1]);
	console.log(array[2]);
    console.log(array[3]);

    // for loop

    for (index = 0; index < array.length; index++)
    {
        console.log(array[index]);
    }

    // while loop
    index = 0;
    while (index < array.length) 
    {
        console.log(array[index]);
        index++;
    }

    //forEach 

    index1 = 0;
    
      
    array.forEach(myFunction);
    function myFunction(item, index1)
    {
        console.log(item);
    };

    //Using Iterators

    let itr2 = user[Symbol.iterator]();

console.log(itr2.next().value);
console.log(itr2.next().value);
console.log(itr2.next().value);
console.log(itr2.next().value);