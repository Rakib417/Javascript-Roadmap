

var names = ["rakib", "Sakib", "Akib" , "Hakib"];
console.log(names);

// Shift opposite of POP
names.shift();
console.log(names);

// unshift
names.unshift("minul");
console.log(names);

//add splice
names.splice(2, 0, "rk", "Kh");
console.log(names);

//Remove splice
names.splice(1,2);
console.log(names);

// slice

var newArray = names.slice(1);
console.log(newArray);
console.log(names);


// sorted
var sortedname = names.sort();
names.reverse();
console.log(sortedname);



var num = [20, 5, 51, 30];
num.sort(function(a,b){
    return b-a;
});
console.log(num);