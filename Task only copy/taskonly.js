
// Task 2 
var firstName = "Rakib";
var lastName = " Ullah";
var fullName = firstName.concat(lastName);
var upFullName = fullName.toUpperCase();
var lnt = upFullName.length;
var posWord = fullName.charAt(2);
var slWord = fullName.slice(1,9)
var mainRst = "My Full name is = " + upFullName + "<br>" + "Total alphabet Count = " + lnt + "<br>" + "2nd Position from Full name is = " + posWord + "<br>" + "Slice Word = " + slWord;

document.write(mainRst);




// task 3

var firstNum = prompt("Enter First Number =");
var secNum = prompt("Enter Secend Number =");

firstNum = parseInt(firstNum,10);
secNum = parseInt(secNum,10);

var positive, negitive, vag, gun, perstig;

positive = firstNum + secNum;
negitive = firstNum - secNum;
vag = firstNum / secNum;
gun = firstNum * secNum;
perstig = firstNum % secNum;

document.write( firstNum + " + " + secNum + " = " + positive + "<br>");
document.write(firstNum + " - " + secNum + " = " + negitive + "<br>");
document.write(firstNum + " / " + secNum + " = " + vag + "<br>");
document.write(firstNum + " * " + secNum + " = " + gun + "<br>");
document.write(firstNum + " % " + secNum + " = " + perstig + "<br>");

// task 4

var grd = prompt("Enter Your SSC Marks Here : ");

if (grd >= 80) document.write("Your SSC Grade Is A+");
else if (grd >= 70) document.write("Your SSC Grade Is A");
else if (grd >= 60) document.write("Your SSC Grade Is -A");
else if (grd >= 50) document.write("Your SSC Grade Is B");
else if (grd >= 40) document.write("Your SSC Grade Is C");
else if (grd >= 33) document.write("Your SSC Grade Is D");
else document.write("We are Very Sorry You Fail");



// task 5

var lett = prompt("Enter a Latter:");
letters = lett.toLowerCase();
switch(letters){
    case "a":
    case "e":
    case "i":
    case "o":
    case "u":
    document.write("This is Vowel = " + letters.toUpperCase());
    break
    default:
    document.write("This is Consonant = " + letters.toUpperCase() );
}







// task 6
x = 1;
su = 0;

while(x <= 100){
    if(x%3==0 && x%5==0){        
        document.write(" " + x)
        su = su + x;
    }   
    x = x + 1;    
}
document.write(  " = " + su + "<h1>end</h1>");




// Task 7
function calculator(i,o) {
    var plus = i+o;
        document.write("Addition = " + plus + " <br>");
    var negt = i-o;
    document.write("Subtracdtion = " + negt + " <br>");
    var devi = i/o;
    document.write("Division = " + devi + " <br>");
    var mult = i*o;
    document.write("Multiplication = " + mult + " <br>");
    var sesh = i%o;   
    document.write("Reminder = " + sesh + " <br>"); 
}
var x = calculator(20, 23);



// task 8
var num1 = Number(prompt("Enter  number"));
var num2 = Number( prompt("Enter  number"));

(function sum(relt) {
    var relt =num1  + num2;
    document.write("The sum is " + relt)
})();





// task 9
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



// Task 10
function highRunScore(score) { 

    var highScores = score[0][0];
    var highScore = score [0][1];

    for(var i=0; i<score.length;i++){
        if(highScore<score[i][1]){
            highScores = score[i][0];
            highScore = score[i][1];
            
        }
    }
    return highScores;
 }



var score = [
    ["Ashraful", 255],
    ["Rakib", 198],
    ["Sakib", 208],
    ["nks", 166],
    ["hks", 266],
    ["€Kks", 366],
    ["swks", 166],
]
var nms = highRunScore(score);
console.log(nms);