// var num = Number(prompt("Enter a Number "));
// if(num>0){
//     console.log("possitive");
// }

// else{
//     console.log("Negative");
// }


// var result = num > 0? "Positive" : "Negetive";

// document.write(result);



// if(num>0){
//     console.log("possitive");
// }

// else if(num < 0){
//     console.log("Negative");
// }

// else{
//     console.log("Zero");
// }


// var num = Number(prompt("Enter a Number "));
// var res = num > 0 ? "possitive" : num < 0 ? " negative": "zero"

// console.log(res);




// var number = Number(prompt("Enter Number : "));
// var rs = number > 0 ?"positive" : number < 0 ? "Negetv" : "Zero";
// console.log(rs);





// Task Ternary Operator
var num1 = Number(prompt("ENter 1st Number"));
var num2 = Number(prompt("ENter 2nd Number"));
var num3 = Number(prompt("Enter 3rd Number"));

var rsts= num1 > num2 && num1 > num3 ? num1 : num2 > num1 && num2 > num3 ? num2 : num3 ;

var resel = rsts;



if(resel)
{   
document.write(resel);
}
else{
    document.write("Only used Number")
}
