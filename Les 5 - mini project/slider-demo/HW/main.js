console.clear();



const slideshowElements = document.querySelectorAll(".slideshow-element");

let countElements = 1;
setInterval(() => {
    countElements++;
    const currentElements = document.querySelector(".current");
    currentElements.classList.remove("current");

    if(countElements > slideshowElements.length){
        slideshowElements[0].classList.add("current");
        countElements = 1;
    }else{
        currentElements.nextElementSibling.classList.add("current");
    }
    
}, 2000);



// CHAT GPT HELP
// let countElements = 0;

// setInterval(() => {
//     const currentElement = document.querySelector(".current");
//     if (currentElement) {
//         currentElement.classList.remove("current");
//     }
//     countElements = (countElements + 1) % slideshowElements.length;
//     slideshowElements[countElements].classList.add("current");
    
// }, 2000);




console.log(slideshowElements);