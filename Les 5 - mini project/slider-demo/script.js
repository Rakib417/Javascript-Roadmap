console.clear();

const slideshowElements = document.querySelectorAll(".slideswho-element");


let countElements = 1;
setInterval(() => {
    countElements++;
    let currentElement = document.querySelector(".current");

    currentElement.classList.remove("current");

    if(countElements > slideshowElements.length){
        slideshowElements[0].classList.add("current");
        countElements = 1;
    }else{
        currentElement.nextElementSibling.classList.add("current")
    }

    
}, 1000);
console.log(slideshowElements);
