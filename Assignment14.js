// JavaScript source code
//1. Write a JavaScript program to:
let employees = [
   {
        "id": 1,
        "name": "Abhinav",
        "department": "IT",
        "Salary": 75000
    },
    {
        "id": 2,
        "name": "Gaurav",
        "department": "Sales",
        "Salary": 52000
    },
    {
        "id": 3,
        "name": "Raj",
        "department": "IT",
        "Salary": 64000
    }]



//Output:
//[
//    {
//        "id": 1,
//        "name": "Abhinav",
//        "department": "IT",
//       "Salary": 75000
//    },
//    {

//        "id": 3,
//        "name": "Raj",
//        "department": "IT",
//        "Salary": 64000
//    }
//]
//[
//    {
//        "id": 2,
//        "name": "Gaurav",
//        "department": "Sales",
//        "Salary": 52000
//    },
//    {
//        "id": 3,
//        "name": "Raj",
//        "department": "IT",
//        "Salary": 64000
//    }

//]
//a) filter employees according to department = IT

const filter = { department: ["IT"] };


const res1 = employees.filter(item => (Object.entries(filter).every(([key, arr]) => arr.includes(item[key]))));
console.log(res1);

      


//b) filter employees who earn a salary < 65000

function filterBySalary(item) {
    if (item.Salary < 65000) {
        return true;
    } return false;
}
const res2 = employees.filter(filterBySalary);
           
console.log(res2);

//2. Write a JavaScript program to filter the hospitals according to:
let hospitals = [
    {
        "id": 1,
        "name": "Hospital A",
        "location": "Delhi",
        "noOfBeds": 450,
        "availability":"Yes"
},
{
        "id": 2,
        "name": "Hospital B",
        "location": "Pune",
        "noOfBeds": 150,
        "availability": "No"
},
{
        "id": 3,
        "name": "Hospital C",
        "location": "Pune",
        "noOfBeds": 350,
     "availability": "Yes"
}]

//a) Number of Beds > 200


function filterByBeds(item) {
    if (item.noOfBeds > 200) {
        return true;
    } return false;
}
const res3 = hospitals.filter(filterByBeds);

console.log(res3);

//b) Availability of Beds = Yes

function filterByAvail(item) {
    if (item.availability == "Yes") {
        return true;
    } return false;
}
const res4 = hospitals.filter(filterByAvail);

console.log(res4);
//c) Location = Pune

function filterByLoc(item) {
    if (item.location == "Pune") {
        return true;
    } return false;
}
const res5 = hospitals.filter(filterByLoc);

console.log(res5);

//Sample Input:
//let hospitals = [
//    {
//        "id": 1,
//        "name": "Hospital A",
//        "location": "Delhi",
//        "noOfBeds": 450,
//“availability”:”Yes”
//},
//{
//    "id": 2,
//        "name": "Hospital B",

//            "location": "Pune",
//                "noOfBeds": 150,
//“availability”:”No”
//},
//{
//    "id": 3,
//        "name": "Hospital
//C",
//    "location": "Pune",
//        "noOfBeds": 350.
//“availability”:”Yes”
//}]
//Output:
//[
//    {
//        "id": 1,
//        "name": "Hospital
//A",
//"location": "Delhi",
//        "noOfBeds": 450,
//“availability”:”Yes”
//    },
//    {
//        "id": 3,
//        "name": "Hospital
//C",
//"location": "Pune",
//        "noOfBeds": 350,
//“availability”:”Yes”
//    }
//]
//[
//    {
//        "id": 1,
//        "name": "Hospital
//A",
//"location": "Delhi",

//        "noOfBeds": 450,
//“availability”:”Yes”
//    },
//    {
//        "id": 3,
//        "name": "Hospital
//C",
//"location": "Pune",
//        "noOfBeds": 350,
//“availability”:”Yes”
//    }
//]
//[
//    {
//        "id": 2,
//        "name": "Hospital B",
//        "location": "Pune",
//        "noOfBeds": 150,
//“availability”:”No”
//    },
//    {
//        "id": 3,
//        "name": "Hospital
//C",
//"location": "Pune",
//        "noOfBeds": 350,
//“availability”:”Yes”
//    }
//]
