console.clear();


const posts = [{
        title: "title 1",
        body: "Description all here 1",
    },
    {
        title: "title 2",
        body: "Description all here 2",
    },
    {
        title: "title 3",
        body: "Description all here 3",
    },
    {
        title: "title 4",
        body: "Description all here 4",
    },
    {
        title: "title 5",
        body: "Description all here 5",
    },
    {
        title: "title 6",
        body: "Description all here 6",
    },
    {
        title: "title 7",
        body: "Description all here 7",
    },
    {
        title: "title 8",
        body: "Description all here 8",
    },
    {
        title: "title 9",
        body: "Description all here 9",
    },
]

// fatch data system axios 
const fatchData = async(config) => {
    try {
        const res = await axios(config);
        return res.data;
    } catch (error) {
        throw Error = "Fatch missing"
    }

};




// <div class="postcard">
//     <h4 class="post-title">Title</h4>
//     <p class="post-body">Description all 001</p>
// </div>

const postsElement = document.querySelector(".posts");

const loadAllData = async() => {
    const posts = await fatchData("https://jsonplaceholder.typicode.com/posts");
    posts.map((post) => {
        const postElement = document.createElement("div");
        postElement.classList.add("postcard");
        postElement.innerHTML = `
        <h4 class="post-title">${post.title}</h4>
        <p class="post-body">${post.body}</p>
        `;
        postsElement.appendChild(postElement);
    })
}


loadAllData();