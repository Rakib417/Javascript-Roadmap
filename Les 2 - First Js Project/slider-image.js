var photos = ["images/001.jpg" , "images/002.jpg" , "images/003.jpg" , "images/004.jpg" ,"images/005.jpg"]
var imgtag = document.querySelector("img");



count=0;
function nxt(){
    count++;

    if(count>=photos.length){
        count=0;
        imgtag.src = photos[count]
    }
    else{
        imgtag.src = photos[count];
    }
    
}


function pre(){
    count--;

    if(count < 0){
        count=photos.length - 1;
        imgtag.src = photos[count]
    }
    else{
        imgtag.src = photos[count];
    }
}