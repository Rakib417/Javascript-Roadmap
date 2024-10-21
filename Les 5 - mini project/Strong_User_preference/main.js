const selectFontSize = document.getElementById("selectFontSize");

const selectBgColor = document.getElementById("selectBgColor");

const resetBtn = document.getElementById("resetBtn");

const mainElement = document.querySelector("main");

const setValues = (fontsize, bgcolor) => {
    selectFontSize.value = fontsize;
    selectBgColor.value = bgcolor;
    mainElement.style.backgroundColor = bgcolor;
    mainElement.style.fontSize = fontsize;
}


// loadLocalStorage Value
const initialSetup = () => {
        const bgcolor = localStorage.getItem("bgcolor");
        const fontsize = localStorage.getItem("fontsize");

        if (bgcolor && fontsize) {
            setValues(fontsize, bgcolor)

        }
        if (!bgcolor && !fontsize) {
            setValues("16px", "aqua");
        }
        if (bgcolor && !fontsize) {
            setValues("16px", bgcolor);
        }
        if (!bgcolor && fontsize) {
            setValues(fontsize, "aqua");
        }
    }
    // changeFontSize 
const changeFontSize = (event) => {
    const selectedFontSize = event.target.value;
    mainElement.style.fontSize = selectedFontSize;
    localStorage.setItem("fontsize", selectedFontSize);
};



// changeBgColor 
const changeBgColor = (event) => {
    const selectedBgColor = event.target.value;
    mainElement.style.backgroundColor = selectedBgColor;
    localStorage.setItem("bgcolor", selectedBgColor);
};
// clearLocalStorage 
const clearLocalStorage = () => {
    localStorage.removeItem("bgcolor");
    localStorage.removeItem("fontsize");
    setValues("16px", "aqua")
};

// add event listners 
selectFontSize.addEventListener("change", changeFontSize);
selectBgColor.addEventListener("change", changeBgColor);
resetBtn.addEventListener("click", clearLocalStorage);


initialSetup();