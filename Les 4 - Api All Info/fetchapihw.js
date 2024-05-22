// 4 ways to call api - XMLHttpRequest, fetch, axios, jquery

// fetch() has replaced XMLHttpRequest
// fetch() - global method for making HTTP Request
// 2 ways to call - then, async await

// + fetch() is easy to use compare to XMLHttpRequest
// + fetch() returns a promise
// - returned promise can only handle network error
// - does not support all the older browser

// method for making HTTP Request



console.clear();

// fetch('https://jsonplaceholder.typicode.com/posts/1', {
//         method: 'DELETE',

//     })
//     .then((res) => {
//         if (!res.ok) {
//             const msg = `Error : ${res.status}`;
//             throw new Error(msg);
//         }
//         return res.json();
//     })
//     .then((res) => console.log(res))
//     .catch((err) => console.log(err));



const makeRequest = async(url, config) => {
    const res = await fetch(url, config);
    if (!res.ok) {
        const msg = `Error : ${res.status}`;
        throw new Error(msg);
    }
    const data = await res.json();
    return data;
}

// const getData = () => {
//     makeRequest('https://jsonplaceholder.typicode.com/posts')
//         .then((res) => console.log(res))
//         .catch((err) => console.log(err))
// }

// getData();


// const sendData = () => {
//     makeRequest('https://jsonplaceholder.typicode.com/posts', {
//             method: 'POST',
//             body: JSON.stringify({
//                 title: 'foo',
//                 body: 'bar',
//                 userId: 1,
//             }),
//             headers: {
//                 'Content-type': 'application/json; charset=UTF-8',
//             },
//         })
//         .then((res) => console.log(res))
//         .catch((err) => console.log(err))
// }

// sendData();


// const updateData = () => {
//     makeRequest('https://jsonplaceholder.typicode.com/posts/1', {
//             method: 'PATCH',
//             body: JSON.stringify({
                
//                 body: 'bar',
               
//             }),
//             headers: {
//                 'Content-type': 'application/json; charset=UTF-8',
//             },
//         })
//         .then((res) => console.log(res))
//         .catch((err) => console.log(err))
// }

// updateData();



const updateData = () => {
    makeRequest('https://jsonplaceholder.typicode.com/posts/1', {
            method: 'DELETE',
        })
        .then((res) => console.log(res))
        .catch((err) => console.log(err))
}

updateData();