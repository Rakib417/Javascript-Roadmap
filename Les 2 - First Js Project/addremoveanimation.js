for (var i = 0; i < 3; i++) {
    document.querySelectorAll(".mybtn")[i].addEventListener("click", function() {
        var text = this.innerHTML;
        console.log(text);
        audioplay(text);
        playAnimation(text);


    });
}


function audioplay(text) {
    switch (text) {
        case "a":
            var audio = new Audio('sounds/01.mp3');
            audio.play();

        case "b":
            var audio = new Audio('sounds/02.mp3');
            audio.play();

        case "c":
            var audio = new Audio('sounds/03.mp3');
            audio.play();

    }
}


document.addEventListener("keypress", function(event) {
    var text = event.key;
    audioplay(text);
    playAnimation(text);
});


function playAnimation(text) {
    var selectbtn = document.querySelector("." + text);
    selectbtn.classList.add("anim");

    setTimeout(function() {
        selectbtn.classList.remove("anim");
    }, 1000);
}