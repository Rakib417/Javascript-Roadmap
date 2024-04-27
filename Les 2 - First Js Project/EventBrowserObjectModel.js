// BOM (Browser Object Model)
// window Object
// location object 
console.clear();

// // href
// console.log(location.href);


// // protocol

// console.log(location.protocol);

// // Hostname
// console.log(location.hostname);

// // port 
// console.log(location.port);

// // pathname 
// console.log(location.pathname);




const locationdv = document.querySelector(".locattion_div");

const p1 = locationdv.children[0];
p1.textContent = location.href;

const p2 = locationdv.children[1];
p2.textContent = location.hostname;

const p3 = locationdv.children[2];
p3.textContent = location.protocol;

const p4 = locationdv.children[3];
p4.textContent = location.port;

const p5 = locationdv.children[4];
p5.textContent = location.pathname;



const visitbtn = document.getElementById('visits');
visitbtn.addEventListener('click', function(enet) {
    location.assign("https://morphlink.com")
})