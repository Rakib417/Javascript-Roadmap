// Synchronous Programing  

const taskOne = () => {
    console.log("Task 1");
}

const dataLoding = () => {
    console.log("Task 2. DData Load");
}
const taskTwo = () => {
    setTimeout(dataLoding, 2000);
}
const taskThree = () => {
    console.log("Task 3");
}
const taskFour = () => {
    console.log("Task 4");
}
const taskFive = () => {
    console.log("Task 5");
}


taskOne();
taskTwo();
taskThree();
taskFour();
taskFive();