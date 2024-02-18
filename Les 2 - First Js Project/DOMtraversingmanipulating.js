var photos = ["images/001.jpg" , "images/002.jpg" , "images/003.jpg" , "images/004.jpg" , "images/005.jpg" ,];
var imgtg = document.querySelector("img");


var counts = 0;
function forword(){
    counts++;  
    if(counts>=photos.length){
        counts = 0;
        imgtg.src = photos[counts];
    }
    else{
        imgtg.src = photos[counts];
    }

}

function back(){

}