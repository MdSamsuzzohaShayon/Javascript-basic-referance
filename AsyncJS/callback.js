// THIS IS THE OLD WAY

const posts = [{
        title: 'Post one',
        body: 'This is post one'
    },
    {
        title: 'Post Two',
        body: 'This is post Two'
    }
];

function getPosts() {
    // SET TIME OUT FUNCTION BECAUSE WE ARE HYPOTHETICALLY DEALING WITH SERVER
    //IT TAKES A CALL BACK FUNCTION
    setTimeout(()=>{
        let output= '';
        posts.forEach((post, index)=>{
            output += `<li>${post.title} </li>`
        });
        document.body.innerHTML = output;
    }, 1000)
}

function createPost(post, callback){
    setTimeout(()=>{
        posts.push(post);
        // ASYNC WAY
        // IT WILL NOT WAIT 2 SECOND
        callback(); // FOR THIS CALL BACK GET POST WILL RUN RIGHT AFTER THE CALL BACK 
    }, 2000);
}

createPost({ title:"Post Three", body: "This is post three"}, getPosts);