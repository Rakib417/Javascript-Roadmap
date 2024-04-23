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

divs.addEventListener('click', function(){
    console.log("click");
});

divs.addEventListener('dblclick', function(){
    console.log("dblclick");
});

divs.addEventListener('mouseup', function(){
    console.log("mouseup");
});

divs.addEventListener('mousedown', function(){
    console.log("onmousedown");
});

divs.addEventListener('mouseenter', function(){
    console.log("mouseenter");
});

divs.addEventListener('mouseleave', function(){
    console.log("mouseleave");
});

divs.addEventListener('mousemove', function(events){
    // console.log("mousemove");

    // console.log("client X = " + events.clientX +" CLient  Y = "+  events.clientY)
    console.log("Offset X = " + events.offsetX +" Offset  Y = "+  events.offsetY)
});

divs.addEventListener('mouseover', function(){
    console.log("mouseover");
});