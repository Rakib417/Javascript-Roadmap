var myvar = document.querySelector("h1");
myvar.addEventListener("mouseover", function() {
    myvar.classList.add("mystyle");

});


myvar.addEventListener("mouseout", function() {
    myvar.classList.remove("mystyle");

});