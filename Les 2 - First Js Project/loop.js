
// for(starting; condition; update )
// {
//     document.write("<h1>Bangladesh</h1>");
// }


// var m = parseInt(prompt("Enter the starting Number "));

// var n = parseInt (prompt("enter the last number"));
// var sum = 0;



// for(var x = m; x<=n; x= x + 1 )
// {
//     sum = sum + x
// }
// document.write("Sum = " + sum);


// for(var x= 1; x<=5; x++){
//     var num1 = parseInt(prompt("Enter 1st Number :"));
//     var num2 = parseInt(prompt ( "Enter 2nd number "));
//     var sum = num1 + num2;
//     console.log("Result = " + sum);
// }

var i = 1;

var sum = 0;

while ( i <= 50 ){

    if (i % 3==0 && i % 5 == 0){
        document.write(" " +i)
        sum = sum + i;
    }   
    i = i + 1;
}

document.write(  " = " + sum + "<h1>end</h1>")

