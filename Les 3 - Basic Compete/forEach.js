// for vs foreach 


// var numbers = [10, 20, 30, 40, 50];

// for (var x = 0; x < numbers.length; x++) {
//     console.log(numbers[x]);

// }



var numbers = [10, 20, 30, 40, 50];


// numbers.forEach(myfunction)

// function myfunction(x) {
//     console.log(x);
// }


numbers.forEach(function(x, indexx, arr) {
    arr[indexx] = x + 5;
})

console.log(numbers);