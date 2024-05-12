// Array.find() find (callback, value) return the value of the first element that pass certain condition
// let numbers = [33, 31, 21, 11, 15, 14, 75, 44, 11];
// console.clear();

// const evenNumbers = (value) => {
//     if (value % 2 === 0)
//         return value
// }
// let firstEvenNumber = numbers.find(evenNumbers);
// console.log(firstEvenNumber);


// Array.findindex() findIndex return the index  of the first element that pass certain condition

// let firstEvenNumberIndex = numbers.findIndex(evenNumbers);
// console.log(firstEvenNumberIndex);





const student = [{
        id: 101,
        gpa: 2.5
    },
    {
        id: 102,
        gpa: 3.5
    },
    {
        id: 103,
        gpa: 3.35
    },
    {
        id: 104,
        gpa: 4.44
    },
    {
        id: 105,
        gpa: 4.54
    },
    {
        id: 106,
        gpa: 4.91
    }
]

console.log(student.find(x => x.gpa > 4))