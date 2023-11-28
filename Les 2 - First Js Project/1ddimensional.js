// var names = ["Asraf", "Sakib", "Mushfiq", "Rakib", "zakir", "Sakib"];

// for(var i=0; i<6; i++){
//     console.log(names[i])
// }


// task 9.

// One Dmensional Array
// Create a Function call HighstScore That
// Receive a 1D Array Called scores
// Return the Highest Score





// task 9

console.clear();
var score = [20,22,32,33,42,22];

function highscor(score){
    var max = score[0];
    for(var i = 1; i < score.length; i++){
        if(max<score[i]){
            max = score[i];
        }
    }
    return max;
}

var maxscr = highscor(score);

console.log(maxscr);


