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
                <h4 class="post_title">id</h4>
                <h4 class="post_title">name</h4>
                <h4 class="post_title">email</h4>
                <h4 class="post_title">address</h4>
                <h4 class="post_title">phone</h4>
                <h4 class="post_title">website</h4>
                <h4 class="post_title">company</h4>

            </div> */
}

// selection
const postsElement = document.querySelector(".posts");

const loadAllData = async() => {

    const posts = await fatchData("https://jsonplaceholder.typicode.com/users");
    posts.map((post) => {
        const postElement = document.createElement("div");
        postElement.classList.add("post");
        postElement.innerHTML = `
                <h4 class="post_title">${post.id}</h4>
                <h4 class="post_title">${post.name}</h4>
                <h4 class="post_title">${post.email}</h4>
                <h4 class="post_title">${post.phone}</h4>
                <h4 class="post_title">${post.website}</h4>
            
        `;
        postsElement.appendChild(postElement);

    });
};

loadAllData();