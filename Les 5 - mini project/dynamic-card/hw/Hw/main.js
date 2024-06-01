console.clear();

const posts = [{
        title: "Title 001",
        body: "Lipsum all about 001",
    },
    {
        title: "Title 002",
        body: "Lipsum all about 002",
    },
    {
        title: "Title 003",
        body: "Lipsum all about 003",
    },
    {
        title: "Title 004",
        body: "Lipsum all about 004",
    },
    {
        title: "Title 005",
        body: "Lipsum all about 005",
    },
    {
        title: "Title 006",
        body: "Lipsum all about 006",
    },
    {
        title: "Title 007",
        body: "Lipsum all about 007",
    },
];

// console.log(posts);

// <div class="postcard">
//     <h4 class="post-title">Title</h4>
//     <p class="post-body">Description all 001</p>
// </div>

// fatch Data 
const fatchData = async(config) => {
    try {
        const res = await axios(config);
        return res.data;
    } catch (error) {
        throw Error("Data not fach")
    };

};




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
    });
};


loadAllData();