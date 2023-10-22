var firstName =prompt("Type First Name Here :");
var lastName = prompt("Type 2nd Name Here :");

var fullname = firstName.concat(lastName);
var upFullName = fullname.toUpperCase();

var nameLnt = upFullName.length;

var position = upFullName.charAt(3);
var sls = fullname.slice(3,8)


document.write("My Full Name is = " + fullname + "<br>" + "All Uppercase = " + upFullName + "<br>" + "Total Carracter is = " + nameLnt +"<br>" + "Name 2nd positon = " + position + "<br>" + "slice full name = " + sls);
