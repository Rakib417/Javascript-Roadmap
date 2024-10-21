// const posts = [{
//         title: "title 001",
//         body: "Discription All info 001"
//     },
//     {
//         title: "title 002",
//         body: "Discription All info 001"
//     },
//     {
//         title: "title 003",
//         body: "Discription All info 001"
//     },
//     {
//         title: "title 004",
//         body: "Discription All info 001"
//     },
//     {
//         title: "title 005",
//         body: "Discription All info 001"
//     },
//     {
//         title: "title 006",
//         body: "Discription All info 001"
//     },
//     {
//         title: "title 001",
//         body: "Discription All info 001"
//     },
// ];

// fatch data 
const fatchData = async(config) => {
    try {
        const res = await axios(config);
        return res.data;
    } catch (error) {
        throw new Error("Error Fatch data");

    }
};




// selection

// <div class="post">
//             <h4 class="post_title">Title 001</h4>
//             <p class="post_body">Discription All info</p>
//         </div>

const postsElement = document.querySelector(".posts");

const loadAllData = async() => {
    const posts = await fatchData("https://jsonplaceholder.typicode.com/posts");
    posts.map((post) => {

        const postElement = document.createElement("div");
        postElement.classList.add("post");
        postElement.innerHTML = `
        <h4 class="post_title">${post.title}</h4>
        <p class="post_body">${post.body}</p>
       `;
        postsElement.appendChild(postElement);
    });
}

loadAllData();