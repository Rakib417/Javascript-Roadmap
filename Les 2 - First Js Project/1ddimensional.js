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

// console.clear();
// var score = [20,22,32,33,42,22];

// function highscor(score){
//     var max = score[0];
//     for(var i = 1; i < score.length; i++){
//         if(max<score[i]){
//             max = score[i];
//         }
//     }
//     return max;
// }

// var maxscr = highscor(score);

// console.log(maxscr);




// var score = [20,22,32,34,43,37,56,55,43];

// function highscor(score) {
//     var max = score[0];
//     for(var x = 0; x < score.length; x++){
//         if(max < score[x]){
//             max = score[x];
//         }
//     }
//     return max;
// }
// var maxsc = highscor(score);

// console.log(score + " = in betwen top number is " + maxsc);



// One Dmensional Array
// Create a Function call HighstScore That
// Receive a 1D Array Called scores
// Return the Highest Score

var scr = [10,20,22,15,56,68,95,54,45,69,98,7,8];



function highscor(scr){
    var max = scr[0];
    for (var x = 0; x <= scr.length; x++){
        if(max < scr[x]){
            max = scr[x];
        }
    }
    return max;
}

var maxs = highscor(scr);
console.log(scr + " = in betwen top number is " + maxs);














