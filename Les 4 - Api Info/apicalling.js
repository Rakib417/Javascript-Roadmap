console.clear();

// event onload(), onerror()
// property - response , responseText, responseType, responseURL, statuc, statusText
// function - open(), send(), setRequestHeader()

const makeRequest= (method, url, data)=>{
    return new Promise((resolve,reject) =>{
        const xhr = new XMLHttpRequest();
    
        xhr.open(method, url);
    
        
        xhr.setRequestHeader('Content-Type', 'application/json');
    
        xhr.onload =() =>{
            let data = xhr.response;
        
            console.log(JSON.parse(data));
    
        };
        xhr.onerror=()=>{
            console.log("Error is here");
        };
        xhr.send(JSON.stringify(data));
    });
}



const getData = () => {
    makeRequest('GET', 'https://jsonplaceholder.typicode.com/posts').then((res) = console.log(res));
}
getData();
// const sendData = () =>{
//     makeRequest('POST','https://jsonplaceholder.typicode.com/posts',{
//         title: 'foo',
//         body: 'sdfbar',
//         userId: 1,
//     });
// };
// const updateSingData = () =>{
//     makeRequest('PATCH','https://jsonplaceholder.typicode.com/posts/1',{
//         title: 'Rakib foo',

//     });
// };

// const deliteData = () =>{
//     makeRequest('DELETE','https://jsonplaceholder.typicode.com/posts/1',{
//         title: 'Rakib foo',

//     });
// };


// deliteData();