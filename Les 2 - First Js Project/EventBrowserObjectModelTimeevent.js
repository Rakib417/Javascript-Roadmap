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





const saveBtn = document.querySelector(".savebtn");
const msg = document.querySelector(".msg");

saveBtn.addEventListener("click", displaycount);

function displaycount() {

    let count = 1;
    msg.textContent = count;

    setInterval(() => {
        count++;
        msg.textContent = count;
    }, 2000);
};