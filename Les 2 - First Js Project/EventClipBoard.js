// ClipboardEvent Object 
// oncopy 
// oncut
// onpaste


const inpute = document.querySelector("input");
const pra = document.querySelector("p");

inpute.addEventListener('copy', function(event) {
    pra.innerHTML = "You Have Coped ";

    // console.log("Coped Text is = " + event.target.value);
});
inpute.addEventListener('cut', function() {
    // console.log("You Have cut");
    pra.innerHTML = "You Have Cut ";
});
inpute.addEventListener('paste', function() {
    // console.log("You Have paste");
    pra.innerHTML = "You Have Paste ";
});