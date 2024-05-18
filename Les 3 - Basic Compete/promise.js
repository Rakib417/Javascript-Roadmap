// console.log("LOL");


// // how to create promise - panding , resolve, reject
// const promise1 = new Promise((resolve, reject) => {
//     let completedPromise = true;
//     if (completedPromise) {
//         resolve("Completed Promise 1")
//     } else {
//         reject("not Complete Promise 1")
//     }
// });



// console.log(promise1);
// // console.log("End");




console.log("welcome");

/*

const promise1 = new Promise((resolve, reject)=>{
    let completedPromise = true;
    if(completedPromise){
        resolve("Complete Promise 1")
    }else{
        reject(new Error("Not completed 1"))
    }
});

*/

const promise1 = new Promise((resolve, reject)=>{
   setTimeout(() => {
    resolve("Complete Promise 1");
   }, 2000);
});

const promise2 = new Promise((resolve, reject)=>{
   setTimeout(() => {
    resolve("Completed promise 2");
   }, 1000);
});

Promise.race([promise1,promise2]).then((res)=>console.log(res));


// console.log(promise1);

/*
promise1.then((res)=>{
    console.log(res)
}) 
.catch(err=>{
    console.log(err.message);
});



promise2.then((resp)=> console.log(resp));
*/



console.log("End");

















