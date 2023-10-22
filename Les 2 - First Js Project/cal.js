var num1 = prompt("Enter Your 1st Number : ");
var num2 = prompt("Enter Your 2nd Number : ");

num1 = parseInt(num1,10);
num2 = parseInt(num2,10);

var plus, minus,vag,gun,pers;

plus = num1 + num2;
minus = num1 - num2;
vag = num1 / num2;
gun = num1 * num2;
pers = num1 % num2;


document.write(num1 + "+" + num2 +" = " + plus + "<br>" + num1 + "-" + num2 +" = " + minus + "<br>" + num1 + "/" + num2 +" = " + vag + "<br>" + num1 + "*" + num2 +" = " + gun + "<br>" + num1 + "%" + num2 +" = " + pers + "<br>");

