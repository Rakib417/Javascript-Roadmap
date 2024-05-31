console.clear();

const sliderElements = document.querySelectorAll(".slideshow-element");
let countele = 1;


setInterval(() => {
    countele++;
    const currentelement = document.querySelector(".current");
    currentelement.classList.remove("current");

    if (countele > sliderElements.length) {
        sliderElements[0].classList.add("current");
        countele = 1;
    } else {
        currentelement.nextElementSibling.classList.add("current");

    }


}, 1000);



console.log(sliderElements);