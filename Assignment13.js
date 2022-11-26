// JavaScript source code
//Write a JavaScript program to get an array from the user and return the:

let nums = [1, 2, 3, 4, 5];

//a) Sum of all elements in the array using reduce()

let res1 = nums.reduce((sum, num) => (sum = sum + num), 0);
console.log(res1)


//b) Average of all elements in the array using reduce()

let sum = nums.reduce((a, b) => a + b, 0);
let avg = (sum / nums.length);
console.log(avg);


//Sample Input:
//[1, 2, 3, 4, 5]
//Output:
//15
//3
//2. Write a JavaScript program to
let students = [
    { name: "John", marks: 92},
    { name: "Oliver", marks: 85 },
    { name: "Michael", marks: 79 },
    { name: "Dwight", marks: 95 },
    { name: "Oscar", marks: 64 },
    { name: "Kevin", marks: 48 },
];

//a) Calculate grades on basis of marks
//    > 90 = A
//        > 80 = B
//            > 70 = C
//                > 60 = D
//                    > 50 = E
//else = F




let grades = students.map(student => {
    if (student.marks <= 50) {
        return "F";
    }
    if (student.marks <= 60) {
        return "E";
    }
    if (student.marks <= 70) {
        return "D";
    }
    if (student.marks <= 80) {
        return "C";
    }
    if (student.marks <= 90) {
        return "B";
    }
    if (student.marks > 90) {
        return "A";
    }
});
console.log(grades);


//b) Map the grades of each student

students.forEach(student => {
    if (student.marks <= 50) {
        student['grade'] = "F";
    }
    if (student.marks >50 && student.marks<= 60) {
        student['grade'] = "E";
    }
    if (student.marks > 60 && student.marks  <= 70) {
        student['grade'] = "D";
    }
    if (student.marks > 70 && student.marks <= 80) {
        student['grade'] = "C";
    }
    if (student.marks > 80 && student.marks <= 90) {
        student['grade'] = "B";
    }
    if (student.marks > 90) {
        student['grade'] = "A";
    }

})
students.forEach((e) => (delete e.marks));
console.log(students);


//c) Group students according to the grades they have received and display.

let sortedStudents = students.sort((g1, g2) => (g1.grade > g2.grade) ? 1 : (g1.grade < g2.grade) ? -1 : 0);
    
console.log(sortedStudents);


function groupBy(key) {
    return function group(array) {
        return array.reduce((acc, obj) => {
            const property = obj[key];
            acc[property] = acc[property] || [];
            acc[property].push(obj); 
            return acc;
        }, {} )};
}

const groupByGrades = groupBy("grade");
console.log(groupByGrades(sortedStudents));



//const groupedData = {};
//Object.entries(response).forEach(([k, v]) => {
//    if (groupedData[v, k]) {
//        groupedData[v].push(v, k);
//    } else {
//        groupedData[v] = [v, k];
//    }
//}, {});

//console.log(groupedData);

//const output = [];
//Object.entries(groupedData).forEach(([k, v]) => {
//    output.push({grade: k, name: v})
//});

//console.log(output)
//Sample Input:
//let students = [
//    { name: "John", marks: “92” },
//    { name: "Oliver", marks: “85” },
//    { name: "Michael", marks: “79” },
//    { name: "Dwight", marks: “95” },
//    { name: "Oscar", marks: “64” },
//    { name: "Kevin", marks: “48” },
//];
//Output:

//{
//    'A': [{ name: "John", grade: “A” },
//    { name: "Dwight", grade: “A” }],
//        'B': [{ name: "Oliver", grade: “B” }],
//            'C': [{ name: "Michael", grade: “C” }],
//                'D': [{ name: "Oscar", grade: “D” }],
//                    'E': [],
//                        'F': [{ name: "Kevin", grade: “F” }],
//}
