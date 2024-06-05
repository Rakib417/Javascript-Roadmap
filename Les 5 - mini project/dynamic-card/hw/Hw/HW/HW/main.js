console.clear();

// const posts = [{
//         title: "Demo Title 1",
//         body: "desctiption all 01",
//     },
//     {
//         title: "Demo Title 2",
//         body: "desctiption all 02",
//     },
//     {
//         title: "Demo Title 3",
//         body: "desctiption all 03",
//     },
//     {
//         title: "Demo Title 4",
//         body: "desctiption all 04",
//     },
//     {
//         title: "Demo Title 5",
//         body: "desctiption all 05",
//     },
//     {
//         title: "Demo Title 6",
//         body: "desctiption all 06",
//     },
//     {
//         title: "Demo Title 7",
//         body: "desctiption all 07",
//     },
//     {
//         title: "Demo Title 8",
//         body: "desctiption all 08",
//     },
// ];

// fatchData 

const fatchData = async(config) => {
    try {
        const res = await axios(config);
        return res.data
    } catch (error) {
        throw Error("Data Missing");
    }

}



// <div class="postcard">
//     <h4 class="post-title">Title</h4>
//     <p class="post-body">Description all 001</p>
// </div> 

const postsElement = document.querySelector(".posts");

const loadAllData = async() => {
    const posts = await fatchData("https://jsonplaceholder.typicode.com/posts");
    posts.map((post => {
        const postElement = document.createElement("div");
        postElement.classList.add("postcard");
        postElement.innerHTML = `
        <h4 class="post-title">${post.title}</h4>
        <p class="post-body">${post.body}</p>
        `;
        postsElement.appendChild(postElement);
    }));

}

loadAllData();