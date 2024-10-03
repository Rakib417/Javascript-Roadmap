// dummy data 
// const posts = [{
//         title: "this is Title 1",
//         body: "This is Body 1"
//     },
//     {
//         title: "this is Title 2",
//         body: "This is Body 2"
//     },
//     {
//         title: "this is Title 3",
//         body: "This is Body 3"
//     },
//     {
//         title: "this is Title 4",
//         body: "This is Body 4"
//     },
//     {
//         title: "this is Title 5",
//         body: "This is Body 5"
//     },
// ];

// fatch Data 
const fatchData = async(config) => {
    try {
        const response = await axios(config);
        return response.data;
    } catch (error) {
        throw new Error("Data Not Fatch");

    }
};




{
    /* <div class="post">
    <h4 class="post_title">Post Title</h4>
    <p class="post_body">
        Post Desc
    </p>
    </div> */
}

// selection
const postsElement = document.querySelector(".posts");

const loadAllData = async() => {

    const posts = await fatchData("https://jsonplaceholder.typicode.com/photos");
    posts.map((post) => {
        const postElement = document.createElement("div");
        postElement.classList.add("post");
        postElement.innerHTML = `
            <img src="${post.thumbnailUrl}"/>
            <h5>${post.albumId}</h5>
            <h4 class="post_title">${post.title}</h4>
            <p class="post_body">${post.url}</p>
            
        `;
        postsElement.appendChild(postElement);

    });
};

loadAllData();