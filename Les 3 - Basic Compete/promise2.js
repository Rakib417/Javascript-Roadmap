console.log("Welcome");

const tastOne = () => {
    return new Promise((resolve, reject) => {
        resolve("task One Complerted");
    })
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
        reject("task 3 Complerted NOT");
    })
};
const tastFour = () => {
    return new Promise((resolve, reject) => {
        resolve("task 4 Complerted");
    })
};


tastOne().then((res) => console.log(res))
.then(tastTwo)
.then((res) => console.log(res))
.then(tastThree)
.then((res) => console.log(res))
.then(tastFour)
.then((res) => console.log(res))
.catch((err) => console.log(err));


console.log("END");