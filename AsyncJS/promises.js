// ONLY ES6 AND AFTER
// THIS IS MORE CLEANER WAY THEN CALLBACK


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
    setTimeout(() => {
        let output = '';
        posts.forEach((post, index) => {
            output += `<li>${post.title} </li>`
        });
        document.body.innerHTML = output;
    }, 1000)
}

function createPost(post) {
    // INSTAD OF CALL BACK WE CAN PROMISE IN THIS WAY
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            posts.push(post);
            const error = false;
            if (!error) {
                resolve();
            } else {
                reject('Error - something went wrong');
            }
        }, 2000);
    });
}




//SINGLE PROMISE
// I DIDN'T PASS ANY CALLBACK HERE IN SECOND PARAMETER INSTAND OF I WILL USE THAN FUNCTION
/*createPost({
        title: 'Post Three',
        body: 'this is post three'
    })
    .then(getPosts)
    .catch(err => console.log(err));*/




//ASYNC AWAIT
/*
async function init(){
   await createPost({
        title: 'Post Three',
        body: 'this is post three'
    });

    getPosts();
}
init();*/


//ASYNC AWAIT WITH FERCH
/*
async function fetchUsers() {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');

    const data = await res.json();
    console.log(data);
}
fetchUsers();*/






// /SYNC WAY
//MULTIPLE PROMISE
/*
const promise1 = Promise.resolve('Hello World');
const promise2 = 10;
const promise3 = new Promise((resolve, reject) => {
    setTimeout(resolve, 2000, 'Goodbye');
});


const promise4 = fetch('https://jsonplaceholder.typicode.com/users').then(res=>res.json);

Promise.all([promise1, promise2, promise3, promise4]).then(values => console.log(values));
*/