// FocusEvent Object 
// break, Headers, title, html, iframe,  meta, param, script, base, bdo 
// 1. onblur
// 2. onfocus
// 3. onfocusin
// 4. onfocusout


var inputes = document.querySelector("input");
inputes.addEventListener('blur', function(events) {
    // console.log(events.target.value);
    inputes.value = events.target.value.toUpperCase();

});

inputes.addEventListener('focus', function(events) {
    // console.log("focus done");
    // inputes.style.backgroundColor = "Orange";
    // inputes.style.padding = "20px";


});

// inputes.addEventListener('focusin', function(events) {
//     console.log("focusin done")
// });

// inputes.addEventListener('focusout', function(events) {
//     console.log("focusout done")
// });