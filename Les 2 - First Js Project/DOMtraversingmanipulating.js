var photos = ["images/001.jpg" , "images/002.jpg" , "images/003.jpg" , "images/004.jpg" , "images/005.jpg" ,];
var imgtg = document.querySelector("#imgss");


var count = 0;

function forword(){
    count ++;
    

    if(count>=photos.length){
        count =  0;
        imgtg.src = photos[count];
    }
    else{
        imgtg.src = photos[count];
    }

}

function back(){
    count --;
    

    if(count < 0){
        count =  photos.length -1 ;
        imgtg.src = photos[count];
    }
    else{
        imgtg.src = photos[count];
    }
}








var photoall = ["images/001.jpg" , "images/002.jpg" , "images/003.jpg" , "images/004.jpg" , "images/005.jpg"];
var imgr = document.s







