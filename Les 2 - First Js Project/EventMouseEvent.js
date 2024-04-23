// mouse Event - <html> , head, meta, title, br, style, script, iframe, param, base, bdo
// 1. onclick
// 2. ondblclick
// 3. onmousedown
// 4. onmouseup
// 5. onmouseenter
// 6. onmouseleave
// 7. onmousemove
// 8. onmouseover



console.clear();


var divs = document.querySelector("div");

// divs.addEventListener('click', function(evnt){
//     console.log(evnt.target);
//     console.log(evnt.target.id);
//     console.log(evnt.target.className);
//     console.log(evnt.target.innerHTML);
//     console.log(evnt.target.textContent);
//     console.log(evnt.target.innerText);
// });

// divs.addEventListener('dblclick', function(){
//     console.log("dblclick");
// });

// divs.addEventListener('mouseup', function(){
//     console.log("mouseup");
// });

// divs.addEventListener('mousedown', function(){
//     console.log("onmousedown");
// });

// divs.addEventListener('mouseenter', function(){
//     console.log("mouseenter");
// });

// divs.addEventListener('mouseleave', function(){
//     console.log("mouseleave");
// });

// divs.addEventListener('mousemove', function(events){
    
//     console.log("Offset X = " + events.offsetX +" Offset  Y = "+  events.offsetY)
// });

// divs.addEventListener('mouseover', function(){
//     console.log("mouseover");
// });




const button = document.querySelectorAll('.btn');
console.log(button);

Array.from(button).map((button) => {
    button.addEventListener("click" , function(event){
        console.log(event.target.innerText)
    });
});