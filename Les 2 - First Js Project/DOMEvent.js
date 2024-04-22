//<input /> - text, Number, assword, Email, color, radio, checkbox, search, time, date, datetime,week, month, url, tel,file,
//<select>,
//<textarea/>




console.clear();
// const inpute = document.querySelector('input[name=name]');
// inpute.addEventListener('change', chnagehndler);





// function chnagehndler(evnt){
//     // console.log(evnt);
//     // console.log(evnt.type);

//     // console.log(evnt.target);
//     // console.log(evnt.target.className);
//     // console.log(evnt.target.id);
//     console.log(evnt.target.value);
// }




// const Programs = document.querySelectorAll("input[name = Program]");
// console.log(Programs);

// Array.from(Programs).map((Program) =>{
//     Program.addEventListener("change", programHandelar)
// });

// function programHandelar(events){
//     if(events.target.checked){
//         console.log(events.target.value);
//     }
// }


const depart = document.querySelector("#department");
// console.log(depart);

depart.addEventListener('change', hangledepartment);

function hangledepartment(evnt){
    console.log(evnt.target.value);
}