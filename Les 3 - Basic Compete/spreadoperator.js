// function addnmber(x, y, z) {
//     return x + y + z;
// }
// let number1 = [1, 2, 3]
// console.log(addnmber(...number));

// // let number1 = [5, 6, ...number, 7, 8, 9]
// // console.log(number1);



// let number2 = [4, 5, 6];
// let number = [...number1, ...number2];
// console.log(number);



let p1 = {
    name: "rakib Ullah",
    age: 30
}

let p2 = {
    nationality: "Bangladesh",
    Occupation: 'teacher'
}

let p = {...p1, ...p2 };
console.log(p);