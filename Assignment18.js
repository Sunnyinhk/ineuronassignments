// JavaScript source code

//What is the difference between a generator and a function?

//

// Ans - Normal function has only one return statement in the loop whereas generator function can use one or more yield statement in the loop.
//Generator Functions are memory efficient, as they save a lot of memory while using generators. A normal function will return a sequence of items, 
//but before giving the result, it creates a sequence in memory and then gives us the result, whereas the generator function produces one output at a time.
// While calling the generator functions, the normal function take pause immediately and control has been transferred to the caller.



//2. What is the syntax of a generator ?
//

// Ans - function* gen(){ yield 1; yield 2; ... ... } 



//    3. Are function generators iterable in JavaScript ?

//Ans - Yes. can be iterated using next() method

//  4. Create a generator for multiplying ?
//            Output -
//>2*2=?
//>4
//>3+3 = ?
//>6
//>true

let arr = [2,3];
let g = arr[Symbol.iterator]();


function* multiplier(){
    yield (console.log(res*res));
    yield (console.log(res+res));
    
}
let control = multiplier();
res = g.next().value;
console.log(`${res} * ${res} = ?`);
control.next();
res = g.next().value;
console.log(`${res} + ${res} = ?`);
control.next();
control.next();
console.log(res = g.next().done);






//5. Print an infinite series of natural numbers using a generator.

function* naturalnums() {
    let i = 1;
    while (true) {
      yield i++;
    }
  }
  
  for (let num of naturalnums()) {
    console.log(num);
  }

//6. Create a generator that can throw an exception.


	async function* generator() {
		throw new Error("Error thrown from an "
			+ "async generator function....!!!");
	}

	let iterator = generator();

	iterator
		.next()
		.then((result) => console.log(result.value))
		.catch((error) => console.log(error.message));




