// 2D Array
// Create a function called highestRunScorer
// Receive a 2d array called playersInfo
// Based on highest ScreenOrientation, return the name of the player
// Higest Run Scorer

// function highestRunScorer(playersInfo){

//     var highestScorer = playersInfo[0][0];
//     var highestScore = playersInfo[0][1];


//     for (var x=0; x<playersInfo.length; x++){
//         if(highestScore<playersInfo[x][1]){
//             highestScore =playersInfo [x][1];
//             highestScorer = playersInfo[x][0];
//         }
//     }
//     return highestScorer
// }

// var playersInfo = [
//     ["Ashraful", 95],
//     ["Rakib", 98],
//     ["Sakib", 188],
//     ["nks", 66],
// ]

// var names = highestRunScorer(playersInfo);
// console.log(names);









// // task 10
// function highRunScore(score) { 

//     var highScores = score[0][0];
//     var highScore = score [0][1];

//     for(var i=0; i<score.length;i++){
//         if(highScore<score[i][1]){
//             highScores = score[i][0];
//             highScore = score[i][1];
            
//         }
//     }
//     return highScores;
//  }



// var score = [
//     ["Ashraful", 255],
//     ["Rakib", 198],
//     ["Sakib", 208],
//     ["nks", 166],
//     ["hks", 266],
//     ["€Kks", 366],
//     ["swks", 166],
// ]
// var nms = highRunScore(score);
// console.log(nms);







function hrscore(inf) { 
   var hscname = inf[0][0];
    var hscnum = inf[0][1];

    for(var p=0; p<inf.length; p++){
        if(hscnum<inf[p][1]){
            hscname = inf[p][0];
            hscnum = inf[p][1];
        }
    }
    return hscname;
 }





var inf = [
    ["Rakib",20],
    ["sakib",52],
    ["Kakib",99],
    ["Hakib",89],
    ["Nakib",188],
    ["Gakib",58],
    ["Pakib",49],
]
var namess = hrscore(inf);
console.log(namess);