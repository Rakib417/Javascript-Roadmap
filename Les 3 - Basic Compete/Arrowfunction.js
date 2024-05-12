// function add1(num1, num2) {
//     return num1 + num2;
// }

// const add2 = (num1, num2) => num1 + num2;




// console.log(add1(10, 20));
// console.log(add2(100, 20));




var student = [{
    id: 101,
    name: "Rakib ullah",
    gpa: 3.25
}, {
    id: 102,
    name: "ullah",
    gpa: 3.65
}, {
    id: 103,
    name: "Jakib",
    gpa: 2.03
}, {
    id: 104,
    name: "Habib",
    gpa: 3.35
}, {
    id: 105,
    name: "nakib ",
    gpa: 2.99
}]

// teditional function 
function studentName1() {
    return student.filter(function(x) {
        return x.gpa > 3
    }).map(function(y) {
        return y.name;
    });
}


// array function 

const studentName2 = () => student.filter((x) => x.gpa > 2.4).map((y) => (y.name))

console.log(studentName1())
console.log(studentName2())