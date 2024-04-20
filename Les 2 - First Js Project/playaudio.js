for (var i = 0; i < 3; i++) {

    document.querySelectorAll(".mybtn")[i].addEventListener("click", function() {
        var text = this.innerHTML;
        // console.log(text);

        audioplay(text);


    });
}

function audioplay(text) {

    switch (text) {
        case "A":
            var audio = new Audio('sounds/01.mp3');
            audio.play();
            break;

        case "B":
            var audio = new Audio('sounds/02.mp3');
            audio.play();
            break;

        case "C":
            var audio = new Audio('sounds/03.mp3');
            audio.play();
            break;

    }
}