console.clear();


const sliderElements = document.querySelectorAll(".sliderinner");
let countelement = 1;


setInterval(() => {
    countelement++;
    const currentElements = document.querySelector(".current");
    currentElements.classList.remove("current");

    if (countelement> sliderElements.length) {
        sliderElements[0].classList.add("current");
        countelement = 1;
    } else {
        currentElements.nextElementSibling.classList.add("current");
        
    }



}, 2000);




console.log(sliderElements);