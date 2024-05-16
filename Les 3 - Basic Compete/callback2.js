// callback and higher order function


function squre(x) {
    console.log(`squre of ${x}: ${x*x}`);
}



// const y = squre;
// y(6);



function higherOrderFunction(num, callBack) {
    callBack(num);
}

higherOrderFunction(6, squre);




const taskOne = (callBack) => {
    console.log("Task 1");
    callBack()
}


const taskTwo = (callBack) => {
    setTimeout(() => {
        console.log("Task 2. DData Load");
        callBack()
    }, 2000);
}
const taskThree = (callBack) => {
    console.log("Task 3");
    callBack()
}
const taskFour = (callBack) => {
    console.log("Task 4");
    callBack()
}
const taskFive = () => {
    console.log("Task 5");

}


taskOne(() => {
    taskTwo(() => {
        taskThree(() => {
            taskFour(() => {
                taskFive();
            })
        });
    });
});


console.log("hi");
document.querySelector("button").addEventListener('click', () => {
    console.log("Btn Is Callicked")
})

console.log("Bye");