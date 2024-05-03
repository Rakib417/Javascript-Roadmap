var cee = document.querySelector("#myCanvas");

var ctx = cee.getContext("2d");

ctx.lineWidth = 3;
ctx.strokeStyle = "black";
ctx.strokeRect(10, 10, 380, 280)


ctx.fillStyle = "green";
ctx.fillRect(12, 12, 376, 276);



var conterX = cee.Width / 2;
var contery = cee.Height / 2;


ctx.begin