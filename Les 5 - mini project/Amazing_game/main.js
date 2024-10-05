// initializing some Values 
let totalAttempts = 5;
let attempts = 0;
let totaWons = 0;
let totalLoss = 0;


//finding Elements

const form = document.querySelector("form");
const cardBody = document.querySelector(".card-body");
const gussingNumber = form.querySelector("#gussingNumber");
const checkButton = form.querySelector("#Check");
const resultText = cardBody.querySelector(".resultText");
const lostWinMessage = document.createElement("p");
const remainingAttemp = cardBody.querySelector(".remainingAttemp");


form.addEventListener("submit", function(event) {
    event.preventDefault();

    attempts++;
    if (attempts == 5) {
        gussingNumber.disabled = true;
        checkButton.disabled = true;
    }
    if (attempts < 6) {
        let gussNumber = Number(gussingNumber.value);
        checkResult(gussNumber);
        remainingAttemp.innerHTML = `Remaining Attempts : ${totalAttempts - attempts}`;
    }
    gussingNumber.value = ""
});

function checkResult(gussingNumber) {
    const randomNumber = getRandomNumber(5);
    if (gussingNumber == randomNumber) {
        resultText.innerHTML = `You have Win`;
        totaWons++;
    } else {
        resultText.innerHTML = `You have lost; randome number was : ${randomNumber}`;
        totalLoss++;
    }
    lostWinMessage.innerHTML = `Won : ${totaWons}, Lost : ${totalLoss}`;
    lostWinMessage.classList.add("large-text");
    cardBody.appendChild(lostWinMessage);

}


function getRandomNumber(limit) {
    return Math.floor(Math.random() * limit) + 1;

}