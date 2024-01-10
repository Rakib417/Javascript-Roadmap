// Guessing Game
// Guess a Number From 1 to 5
// Generate a random number Matches Random number: then show massage won else lost 
// Run the game for 5 times
// Show the number of wons and losts



// var numbOfWin = 0;
// var numbOfLost = 0;


// for(var x = 1; x<=5; x++){
//     var guessNumb = parseInt(prompt("Enter a number From 1 to 5 : "));

//     var randomNumb = Math.floor(Math.random()*5) + 1;
//     if (guessNumb==randomNumb){
//         console.log("You have Won");
//         numbOfWin++;
//     }else{
//         console.log("You have Lost. Random number was " + randomNumb );
//         numbOfLost++;
//     }
    

// }

// document.write("Total Number of Won : " + numbOfWin + "<br>");
// document.write("Total Number of Lost : " + numbOfLost);




var winnumber = 0;
var lossnumber = 0;

for(var i=1; i<=5; i++){
    var gusnumber = parseInt(prompt("Enter number from 1 to 5"));
    var randomnumber = Math.floor(Math.random()*6)+1;


    if(gusnumber==randomnumber){
        console.log("Won Guess Number = " + randomnumber);
        winnumber++;
    }else{
        console.log("Loss Guess Number = " + randomnumber);
        lossnumber++;
    }
}

document.write("Total Number win = " + winnumber + " <br>");
document.write("Total loss Number = " + lossnumber);

