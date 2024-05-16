console.log("LOL");


// how to create promise - panding , resolve, reject
const promise1 = new Promise((resolve, reject) => {
    let completedPromise = true;
    if (completedPromise) {
        resolve("Completed Promise 1")
    } else {
        reject("not Complete Promise 1")
    }
});



console.log(promise1);
// console.log("End");