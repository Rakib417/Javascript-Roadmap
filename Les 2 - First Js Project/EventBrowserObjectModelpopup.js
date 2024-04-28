// js BOM 
// popup boxes - alert, confirm, prompt 


// function deletesome(){
//     var value = confirm("Do u want to tdelete");

//     if(value){
//         console.log("Item was deleted")
//     }else{
//         console.log("Item was Not deleted")
//     }
// }

// deletesome();

function welcomemsg(){
   var h1 =  document.createElement("h1");
   let text ;
    const names = prompt ("Enter your name = ");
    if(names==null || names ==''){
        text = "NO name Found " 
    }else{
        text = "Welcome  = " + names;
    }
var textnote = document.createTextNode(text);
h1.appendChild(textnote);
document.body.appendChild(h1);

};

welcomemsg();


