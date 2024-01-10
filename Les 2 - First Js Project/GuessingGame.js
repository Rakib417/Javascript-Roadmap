// Guessing Game
// Guess a Number From 1 to 5
// Generate a random number Matches Random number: then show massage won else lost 
// Run the game for 5 times
// Show the number of wons and losts



var numbOfWin = 0;
var numbOfLost = 0;


for(var x = 1; x<=5; x++){
    var guessNumb = parseInt(prompt("Enter a number From 1 to 5 : "));

    var randomNumb = Math.floor(Math.random()*5) + 1;
    if (guessNumb==randomNumb){
        console.log("You have Won");
        numbOfWin++;
    }else{
        console.log("You have Lost. Random number was " + randomNumb );
        numbOfLost++;
    }
    

}

document.write("Total Number of Won : " + numbOfWin + "<br>");
document.write("Total Number of Lost : " + numbOfLost);

