// var num1 = prompt("First Number : ");
// var num2 = prompt ("Enter 2nd Number : ");

// num1 = parseFloat(num1, 10);
// num2 = parseFloat(num2, 10);

// var sum, sub;

// sum = num1 + num2;
// document.write("sum = " + sum + "<br>");1

// sub = num1 - num2;
// document.write("sub = " + sub)




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

