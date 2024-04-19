var len = document.querySelectorAll(".mybutton").length;

for (var i = 0; i < len; i++) {

    document.querySelectorAll(".mybutton")[i].addEventListener("click", function() {

        var text = this.innerHTML;
        document.querySelector("h1").innerHTML = text + " is Clicked";

    });



}