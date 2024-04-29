// js bom
// js timing event methods 
// setTimeout() , setInterval()



// setTimeout(() => {
//     console.log("Hi");
// }, 2000);



// setTimeout(display, 2000);

// function display() {
//     console.log("display Function")
// }



// const saveBtn = document.querySelector(".savebtn");
// const msg = document.querySelector(".msg");

// saveBtn.addEventListener("click", saveUser);

// function saveUser() {
//     msg.textContent = "user Reg Successful";
//     setTimeout(() => {
//         msg.textContent = ""
//     }, 3000);

// }





// const saveBtn = document.querySelector(".savebtn");
// const msg = document.querySelector(".msg");

// saveBtn.addEventListener("click", displaycount);

// function displaycount() {

//     let count = 1;
//     msg.textContent = count;

//     setInterval(() => {
//         count++;
//         msg.textContent = count;
//     }, 2000);
// };



const saveBtn = document.querySelector(".savebtn");
const msg = document.querySelector(".msg");

saveBtn.addEventListener('click', startClock);

function startClock() {
    let date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();

    minutes = formetime(minutes);
    seconds = formetime(seconds);


    let time = hours + ":" + minutes + ":" + seconds;

    msg.textContent = time;

    setInterval(startClock, 1000);

}

function formetime(value) {
    if (value < 10) {
        value = "0" + value;
    }
    return value;
}