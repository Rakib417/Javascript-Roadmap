console.clear();

const posts = [{
        title: "title 001 ",
        body: "description 001"
    },
    {
        title: "title 002 ",
        body: "description 001"
    },
    {
        title: "title 003 ",
        body: "description 001"
    },
    {
        title: "title 004 ",
        body: "description 001"
    },
    {
        title: "title 001 ",
        body: "description 001"
    },
    {
        title: "title 001 ",
        body: "description 001"
    },
    {
        title: "title 001 ",
        body: "description 001"
    },
];


// fatchData
const fatchData = async(config) => {
    try {
        const res = await axios(config);
        return res.data;
    } catch (error) {
        throw Error("Error Data Show");
    }

}




// <div class="postbody">
// <h4 class="title"></h4>
// <p class="pbody">description</p>
// </div>


const postelements = document.querySelector(".posts");


const loadAllData = async() => {
    const posts = await fatchData('https://jsonplaceholder.typicode.com/posts/');
    posts.map((post) => {
        const postelement = document.createElement('div');
        postelement.classList.add("postbody");
        postelement.innerHTML = `
        <h4 class="title">${post.title}</h4>
        <p class="pbody">${post.body}</p>
        `
        postelements.appendChild(postelement);
    })
}



loadAllData();





// console.log(posts);