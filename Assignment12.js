// JavaScript source code

//1. Write a JavaScript program to map Employee Records according to Employee
//IDs.
//    Employee: { id, name, salary }

//Sample Input:
//"id": [67, 48, 29]
//"name": ["Hitanshu", “Ninad”, “Amandeep”]
//"salary": [75000, 82000, 98000]


let empRecord = [{ id: 67, name: "Hitanshu", salary: 75000 }, { id: 48, name: "Ninad", salary: 82000 }, { id: 29, name: "Amandeep", salary: 98000 }]

//a) Print an array of all employee ids


const idList = empRecord.map(({ id }) => id);

console.log(idList);

//b) Print count of employees

console.log(empRecord.length)
//c) Print the name of the employee according to their id { key: value }

const idnameList = empRecord.map(({ name }) => name);
empRecord.forEach((id) => console.log(id.id, " : ", id.name));


//d) Store the salaries of all employees in an array

const idSalary = empRecord.map(({ salary }) => salary);

console.log(idSalary);

//e) Calculate the average salary the company is paying to its employees

const avgSal = empRecord.reduce((sum, { salary }) => salary + sum, 0);

console.log(avgSal / empRecord.length);

//Output:
//[67, 48, 29]
//3
//67: Hitanshu
//48: Ninad
//29: Amandeep
//[75000, 82000, 98000]
//85000


//2. Write a program in JavaScript to map the student ids, names and scores.

//    a) Add data for 3 students(use map functions)

//Sample Input:
//    "id": [1, 2, 3]
//"name": ['Hitanshu', 'Ninad', 'Amandeep']
//"scores": [90, 88, 92]

let map1 = new Map()
map1.set("id", 1);
map1.set("name", "Hitanshu");
map1.set("scores", 90);


let map2 = new Map()
map2.set("id", 2);
map2.set("name", "Ninad");
map2.set("scores", 88);


let map3 = new Map()
map3.set("id", 3);
map3.set("name", "Amandeep");
map3.set("scores", 92);



//b) Get Student Names using map functions


const stuName = [map1.get("name"), map2.get("name"), map3.get("name")];
console.log(stuName);


//c) Delete Student Scores using map functions
//Response
//map1.delete("scores");
//map2.delete("scores");
//map3.delete("scores");


//d) Display 1 parameter(only value), 
const studId = [map1.get("id"), map2.get("id"), map3.get("id")];
const studscore = [map1.get("scores"), map2.get("scores"), map3.get("scores")];
console.log(studId);
console.log(stuName);
console.log(studscore);

//2 parameters(value + key),

console.log("id", map1.get("id"), map2.get("id"), map3.get("id"));
console.log("name", map1.get("name"), map2.get("name"), map3.get("name"));
console.log("scores", map1.get("scores"), map2.get("scores"), map3.get("scores"));
//map1.forEach((v, k) => console.log(k, v));

//and 3
//parameters(value + key + map) for the student


//const studentss = [map1.get(k, v), map2.get(k, v), map3.get(k, v)];
//console.log(studentss); 

const allmap = new Map()
allmap.set("id", studId);
allmap.set("name", stuName);
allmap.set("scores", studscore);

const allmapId = allmap.keys();
const allmapVal = allmap.values();

//allmap.forEach((v,k) => console.log(map1.get(k,v), map2.get(k,v), map3.get(k,v)));


for (let [key, value] of allmap) {

    console.log(key, value);
        console.log(allmap);
}



//Output:
//['Hitanshu', 'Ninad', 'Amandeep']
//----- one parameter-----
//    [1, 2, 3]
//    ['Hitanshu', 'Ninad', 'Amandeep']
//    [90, 88, 92]
//----- two parameter-----
//    id 1, 2, 3
//name Hitanshu, Ninad, Amandeep
//scores 90, 88, 92
//----- three parameter-----
//    id 1, 2, 3
//Map(3) {
//    'id' => [67, 48, 29],
//        'name' => ['Hitanshu', 'Ninad', 'Amandeep'],
//            'scores' => [90, 88, 92]
//}
//name Hitanshu, Ninad, Amandeep
//Map(3) {
//    'id' => [1, 2, 3],
//        'name' => ['Hitanshu', 'Ninad', 'Amandeep'],
//            'scores' => [90, 88, 92]
//}
//scores 90, 88, 92
//Map(3) {
//    'id' => [1, 2, 3],
//        'name' => ['Hitanshu', 'Ninad', 'Amandeep'],
//            'scores' => [90, 88, 92]
//}



//3. Write a JavaScript program to iterate over an array inputted by the user using
//mapping.Perform the square of all elements in the original array, store the
//squares in a new array and make a mapping for the squares and display it.
//Sample Input:
//[1, 2, 3, 4, 5]

const arr1 = [1, 2, 3, 4, 5];
const arr2 = arr1.map(x => x ** 2);
console.log(arr2);

const arr3 = arr2.map(function (element) {
     return element
}) 
    console.log(arr2, arr3);

//Explanation:
//Original Array = [1, 2, 3, 4, 5]
//New Array = [1, 4, 9, 16, 25]
//Mapping = squares => [1, 4, 9, 16, 25]
//Output:
//[1, 4, 9, 16, 25][1, 4, 9, 16, 25]