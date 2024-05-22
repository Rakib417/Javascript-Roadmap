// 4 ways to call api - XMLHttpRequest, fetch, axios, jquery
// add jquery libraray cdn
// ajax - asynchronous javascript and xml

console.clear();

const makeRequest =async (url,method,data)=>{
  try {
    const result = await $.ajax({
        url:url,
        method: method,
        data:data,
    })
    return result;
  } catch (error) {
    console.log(error)
  }  
};




const DeleteData = () => {
    makeRequest("https://jsonplaceholder.typicode.com/posts/1" , "DELETE")
        .then((res) =>console.log(res));
    
};

DeleteData();


// const createData = () => {
//     makeRequest("https://jsonplaceholder.typicode.com/posts/1" , "PUT",
//         {
//         id:1,
//         title: 'RaKib',
//         body: 'Rocky',
//         userId: 1,
//         })
//         .then((res) =>console.log(res));
    
// };

// createData();


// const getData = () => {
//     makeRequest("https://jsonplaceholder.typicode.com/posts/1" , "GET")
//     .then((res) =>console.log(res))
//     // .catch((err) => console.log(err))
// };

// getData();