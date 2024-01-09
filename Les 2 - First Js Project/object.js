//students Details.
// var name = "rakib";
// var age = 22;
// var cgpa = 3.55;
// var lang = ["Bangla","English", "Hindi"];

// console.log(age);
// How to create object
// how to print the value of an object
//Adding a constructor
// adding function inside a Constructor




function Student(name,age,cgpa,lang){
    this.name = name;
    this.age = age;
    this.cgpa = cgpa;
    this.lang = lang;

    this.display = function(){
        console.log(this.name);
        console.log(this.age);
        console.log(this.cgpa);
        console.log(this.lang);
    }
}

var student1 = new Student("Rakib Ullah",23,3.99,["Bangla","English", "Hindi"]);
var student2 = new Student("Sakib",29,3.19,["Turki","English", "Hindi"]);
var student3 = new Student("Habib",43,3.19,["Arabic","English", "Hindi"]);


student1.display();
student2.display();
student3.display();