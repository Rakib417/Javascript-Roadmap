const selectFontSize = document.getElementById("selectFontSize");

const selectBgColor = document.getElementById("selectBgColor");

const resetBtn = document.getElementById("resetBtn");

const mainElement = document.querySelector("main");

// changeFontSize 
const changeFontSize = (event) => {
    mainElement.style.fontSize = event.target.value;
};
// changeBgColor 
const changeBgColor = (event) => {
    mainElement.style.backgroundColor = event.target.value;
};

// add event listners 
selectFontSize.addEventListener("change", changeFontSize);
selectBgColor.addEventListener("change", changeBgColor);