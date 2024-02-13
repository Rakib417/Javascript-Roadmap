//create HTML elements
//Find Elements
// Add text
//post elements on top or on top tag 



var hed3 = document.createElement("h1");
var texts = document.createTextNode("demo text h3");
hed3.appendChild(texts);

var mydv = document.getElementById("mydivs");
mydv.appendChild(hed3);


var head2 = document.getElementsByTagName("h1")[1];
mydv.removeChild(head2);


var hed0 = document.createElement("h1");
var text0 = document.createTextNode("demo text 000");
hed0.appendChild(text0);

var head1 = document.getElementsByTagName("h1")[0];
mydv.insertBefore(hed0, head1);