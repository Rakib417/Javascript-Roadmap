// var names = ["Asraf", "Sakib", "Mushfiq", "Rakib", "zakir", "Sakib"];

// for(var i=0; i<6; i++){
//     console.log(names[i])
// }


// task 9.

// One Dmensional Array
// Create a Function call HighstScore That
// Receive a 1D Array Called scores
// Return the Highest Score



function highstScore(scores){
    let max = scores[0];
    for(var i = 1 ; i < scores.length; i++){
        if(max<scores[i]){
            max = scores[i];
        }
    }
    return max;
}


var scores = [21,22,34,54,64];

var maxscor = highstScore(scores);


console.log(maxscor);