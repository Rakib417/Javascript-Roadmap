var cee = document.querySelector("#myCanvas");

var ctx = cee.getContext("2d");

ctx.lineWidth = 3;
ctx.strokeStyle = "black";
ctx.strokeRect(10, 10, 380, 280)


ctx.fillStyle = "green";
ctx.fillRect(12, 12, 376, 276);



var conterX = cee.width / 2;
var contery = cee.height / 2;


ctx.beginPath();
ctx.arc(conterX, contery, 80, 0, 2 * Math.PI, false);
ctx.fillStyle = "red";
ctx.fill();
ctx.stroke();