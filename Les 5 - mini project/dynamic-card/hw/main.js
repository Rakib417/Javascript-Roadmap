const posts = [{
        title: "Title 1",
        body: "Body Demo text 1",
    },
    {
        title: "Title 2",
        body: "Body Demo text 2",
    },
    {
        title: "Title 3",
        body: "Body Demo text 3",
    },
    {
        title: "Title 4",
        body: "Body Demo text 4",
    },
    {
        title: "Title 5",
        body: "Body Demo text 5",
    },
    {
        title: "Title 6",
        body: "Body Demo text 6",
    },

]

// fatch data 

const fatchData = async(config) => {
    try {
        const res = await axios(config);
        return res.data;
    } catch (error) {
        throw Error("Data Not Fatch")
    }

}




// selection  

// <div class = "postcard" >
//     <h4 class = "post-title" > Post title < /h4> 
//     <p class = "post-body" > Dummy post desc < /p> 
//     <c/div>


const postsElement = document.querySelector(".posts");
const loadAllData = async() => {
    const posts = await fatchData("https://jsonplaceholder.typicode.com/posts");
    posts.map(post => {
        const postelement = document.createElement("div");
        postelement.classList.add("postcard");
        postelement.innerHTML = `
        <h4 class = "post-title">${post.title}</h4>
        <p class = "post-body"> ${post.body}</p>
        `;

        postsElement.appendChild(postelement);
    });
};


loadAllData();