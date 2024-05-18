console.log("Welcome");

const tastOne = () => {
    return new Promise((resolve, reject) => {
        resolve("task One Complerted");
    });
};
const tastTwo = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("task 2 Complerted");
        }, 2000);
    });
};
const tastThree = () => {
    return new Promise((resolve, reject) => {
        reject("task 3 Complerted not");
    });
};
const tastFour = () => {
    return new Promise((resolve, reject) => {
        resolve("task 4 Complerted");
    });
};


// tastOne().then((res) => console.log(res))
// .then(tastTwo)
// .then((res) => console.log(res))
// .then(tastThree)
// .then((res) => console.log(res))
// .then(tastFour)
// .then((res) => console.log(res))
// .catch((err) => console.log(err));


// async function callAllTask() {
//     const t1 = await tastOne();
//     console.log(t1);
//     const t2 = await tastTwo();
//     console.log(t2);
//     const t3 = await tastThree();
//     console.log(t3);
//     const t4 = await tastFour();
//     console.log(t4);
// }


const callAllTask= async() => {
 try{
    const t1 = await tastOne();
    console.log(t1);
    const t2 = await tastTwo();
    console.log(t2);
    const t3 = await tastThree();
    console.log(t3);
    const t4 = await tastFour();
    console.log(t4);
 }catch(er){
    console.log(er);
 }
}
callAllTask();

console.log("END");