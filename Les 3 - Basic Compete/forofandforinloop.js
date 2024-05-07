// for ... of and for ...in 


// const names = ["s1", 's2', "s3"]
// for (let name of names) {
//     console.log(name)
// }


let studenrs = {
    id: 101,
    name: "Rakib Ullah",
    cgpa: 3.67
}

for (let x in studenrs) {
    console.log(`${x}: ${studenrs[x]}`)
}