console.log("Hello from index.js");





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

//fatch
const fatchData = async (config) => {
    try {
        const res = await axios.get(config);
        return res.data;
    } catch (error) {
        throw error("Datain not fatch");
    }
    
};







//    <div class="post">
//      <h4 class="post_title">Title 001</h4>
//      <p class="post-body">Discription All info</p>
//    </div>


const postsElement = document.querySelector(".posts");

const loadAllData = async () => {
    const posts = await fatchData("https://webapps.globalaffairs.com.bd/wp-json/wp/v2/posts?_fields=id,title,slug,excerpt,date,featured_media");
  posts.map((post) => {
    const postElement = document.createElement("div");
    postElement.classList.add("post") ;
    postElement.innerHTML = `
    <h4 class="post_title">${post.title.rendered}</h4>
    <p class="post-body">${post.date}</p>
    <p class="post-body">${post.excerpt.rendered}</p>
    `; 
    postsElement.appendChild(postElement);
  });
  
};

loadAllData();