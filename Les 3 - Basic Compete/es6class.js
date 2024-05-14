// import {text as msg} from './es6new.js'



// console.log(msg)

// // setText("Good Bywe ES6")
// // console.log(text)



class student {
    constructor(id, name){
        this.id= id;
        this.name = name;
    }


    set studentName(name){
        this.name = name;
    }
    get studentInfo(){
        return this.id + " " + this.name;
    }
}

let s1 = new student(101,"Rakib");
// console.log(s1);


// s1.studentName = "lalalala";
// console.log(s1.name)
console.log(s1.studentInfo)