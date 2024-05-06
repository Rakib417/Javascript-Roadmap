//Object Literals

function studentinfo1(name, age) {
    return {
        name,
        age
    }
}



console.log(studentinfo1("Rakib Ullah", 29));


let msg = {
    'body name' () {
        return `Hi i m Object Fucntion`
    }
}

console.log(msg['body name']());