// array destructure 
// let number = [10, 20, 30, 45, 60, 51];
// let [num1, num2, num3, num4, num5] = number;

// let [num1, num2, num3, ...z] = number;

// console.log(z);

// ==========================================================


// swap variables 

// let a = 10,
//     b = 20;

// [a, b] = [b, a]
// console.log(b)


// ==========================================================


// object destructure 

// const studntInfo = {
//     id: 111,
//     name: "Rakib Ullah",
//     gpa: 3.23
// }
// const { id, name, gpa } = studntInfo;


// console.log(id);
// console.log(name);
// console.log(gpa);

// ==========================================================

// nested object destructure
// const studntInfo1 = {
//     id: 111,
//     name: "Rakib Ullah",
//     gpa: 3.23,
//     langause: {
//         native: "bangla",
//         beginner: "english"
//     }
// }

// const { id, name, gpa, langause } = studntInfo1;
// const { native, beginner } = langause;
// console.log(native);

// ==========================================================

// destructuring function parameters
const studentInfo = ({ id, fuleName }) => {
    console.log(`${id}, ${fuleName}`)
}
const students = {
    id: 101,
    fuleName: "Rakib Ullah"
}

studentInfo(students);