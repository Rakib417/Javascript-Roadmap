// dummy data 


// const posts = [{
//         title: "THis is Title 1",
//         body: "This is Body 1",
//     },
//     {
//         title: "THis is Title 2",
//         body: "This is Body 2",
//     },
//     {
//         title: "THis is Title 3",
//         body: "This is Body 3",
//     },
//     {
//         title: "THis is Title 4",
//         body: "This is Body 4",
//     },
//     {
//         title: "THis is Title 5",
//         body: "This is Body 5",
//     },
//     {
//         title: "THis is Title 6",
//         body: "This is Body 6",
//     },
//     {
//         title: "THis is Title 7",
//         body: "This is Body 7",
//     },
// ]


//         <div class="post">
//             <h4 class="post-title">Post Title</h4>
//             <p class="postbody">Post Desc</p>
//         </div>

// sellection


// FATCH axios data 

const fatchData = async(config) => {
    try {
        const res = await axios(config);
        return res.data;
    } catch (error) {
        throw Error("Data is not Fatch");
    }
};



const postsElement = document.querySelector(".posts");

const loadAllData = async() => {
    const posts = await fatchData("https://jsonplaceholder.typicode.com/posts");
    posts.map((post) => {
        const postElement = document.createElement("div");
        postElement.classList.add("post");
        postElement.innerHTML = `
        <h4 class="post-title">${post.title}</h4>
        <p class="postbody">${post.body}</p>
        `;
        postsElement.appendChild(postElement);
    });

};


loadAllData();