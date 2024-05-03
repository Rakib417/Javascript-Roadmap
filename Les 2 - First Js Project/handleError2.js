// const namess = document.querySelector("#ckbtn").addEventListener("click", function() {
//     const nmb = document.querySelector("#nametext").value;
//     console.log(nmb);
// });



const namess = document.querySelector("#ckbtn").addEventListener('click', function() {
    const nbm = document.querySelector("#nametext").value;

    try {
        if (nbm < 5) {
            throw "Input is too low"
        } else if (nbm > 10) {
            throw "Input is too High"
        } else {
            throw "Input Number Is Perfect"
        }
    } catch (err) {
        console.log(err);
    }
});