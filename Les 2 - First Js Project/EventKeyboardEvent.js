// keyboardevent Object
// 1. Keypress - pressing a KeyboardEvent, can repeat 
// 2. keypress (may not supported by some browser )
// 3 keyup 
// Some Properties - key , keycode, code, shiftkey, ctlkey, repeat





const textareas = document.querySelector('textarea');
textareas.addEventListener("keydown", function(evnt) {
    if (evnt.repeat) {
        alert('do not repet');
    }

});
// textareas.addEventListener("keypress", function() {
//     console.log("Key Press")
// });
// textareas.addEventListener("keyup", function(events) {
//     if (events.shiftKey) {
//         console.log("Shift + " + events.key)
//     }
// });