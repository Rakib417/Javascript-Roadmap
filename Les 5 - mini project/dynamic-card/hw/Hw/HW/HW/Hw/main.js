console.clear();



// const posts = [{
//         title: "Title 01",
//         body: "Description 001"
//     },
//     {
//         title: "Title 02",
//         body: "Description 02"
//     },
//     {
//         title: "Title 03",
//         body: "Description 003"
//     },
//     {
//         title: "Title 04",
//         body: "Description 004"
//     },
//     {
//         title: "Title 05",
//         body: "Description 005"
//     },
//     {
//         title: "Title 06",
//         body: "Description 006"
//     },
// ];

// fatch Data section 

const fatchData = async(config) => {
    try {
        const res = await axios(config);
        return res.data;
    } catch (error) {
        throw Error("Error Data");
    }
}






// <div class="postbody">
//     <h4 class="title"></h4>
//     <p class="pbody">description</p>
// </div>


const postelements = document.querySelector(".posts");
const loadAllData = async() => {
    const posts = await fatchData("https://jsonplaceholder.typicode.com/posts/");
    posts.map((post => {
        const postElement = document.createElement('div');
        postElement.classList.add("postbody");
        postElement.innerHTML = `
        <h4 class="title">${post.title}</h4>
        <p class="pbody">${post.body}</p>
        `;
        postelements.appendChild(postElement);
    }));
}


loadAllData();