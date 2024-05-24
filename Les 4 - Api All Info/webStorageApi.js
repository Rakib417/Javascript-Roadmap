// Web storage API - allows us to store & read data in browser
// Web storage API - localStorage, sessionStorage

// localStorage - store, read, update and remove data
// no expiry date: data never gets lost even if you close the browser


// localStorage store data as key value pair - string 



// console.log(localStorage)
// setItem(key, value)
// localStorage.setItem("userName" , "Rakib Ullah");
// localStorage.setItem("password" , "123456789");



// getItem(key)
// const userName = localStorage.getItem("userName");
// const userPassword = localStorage.getItem("password");
// console.log(userName,userPassword);

// removeItem(key);
// localStorage.removeItem("userName");
// localStorage.removeItem("password");


// setItem(key, value)
// const contries = ["Uk", "BD" , "USA", "UAE"]
// localStorage.setItem("contries" , JSON.stringify(contries));

// // getItem(key)
// const contryList = JSON.parse(localStorage.getItem("contries"));


// console.log(contryList);

// localStorage.clear();