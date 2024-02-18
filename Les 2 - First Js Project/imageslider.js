var photos = ["images/001.jpg" , "images/002.jpg" ,"images/003.jpg" ,"images/004.jpg" , ]
var imgtg = document.querySelector("img");


var count = 0;

function nxt(){
    count++; 


    if(count>=photos.length){
        count = 0;
        imgtg.src = photos[count];
    }
    else{
        imgtg.src= photos[count];
        
    }
    
}


function perv(){
    count--; 


    if(count< 0){
        count = photos.length - 1;
        imgtg.src = photos[count] ;
    }else{
        imgtg.src= photos[count];
    }

}


setInterval(function() {
    nxt();
}, 3000);