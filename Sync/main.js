// JAVASCRIPT IS SINGLE THREADED PROGRAMMING LANGUAGE - IT'S READ CODE LINE BY LINE (CAN'T DO MULTI TASK)

const message = document.getElementById('message');
const result1 = document.getElementById('res-1');
const result2 = document.getElementById('res-2');
const result3 = document.getElementById('res-3');



function otherFunc() {
  console.log("We are in another function");
  console.log("Do some stuff");
  const funcElement = document.createElement('p');
  funcElement.textContent = "Function element";
  result1.after(funcElement);
}

// SYNC CODE EXAMPLE
console.log("Start");
result1.textContent = "Start";
otherFunc();
result2.textContent = "End";
console.log("End");





// ASYNC EXAMPLE - BLOCKING THE CODE
// USING WEB API BROWSER KEEPING TRACK OF THE TIME
/*
setTimeout(()=>{
  const para= document.createElement('p');
  const hr= document.createElement('hr');
  para.textContent = "This is async code, delay the code- timeout";
  console.log("This is async code, delay the code");
  message.append(hr, para);
}, 2000);
*/


/*
console.log("--------------------👍🏿👍🏿👍🏿👍🏿-------------------");

// CALL BACKS ARE ALWAYS NECESSARILY ASYNC
const items = [1,2,3,4,5];
console.log("foreach start");
items.forEach((item, i) => {
  console.log(item);
});

console.log("foreach end");
*/




/*
console.log("--------------------👍🏿👍🏿👍🏿👍🏿-------------------");
console.log("start");

function loginUser(email, password, callback) {
  setTimeout(() => {
    const data = "<p>now we have the data " + email + " - " + password + " / getting after 3sec</p>";
    console.log(data);
    result3.innerHTML = data;
    // RATHAR THAN RUTURNING PASS THIS IN CALLBACK
    // return {userEmail: email}
    callback({
      userEmail: email
    });
  }, 3000);
}




function getUserVideos(email, callback) {
  setTimeout(() => {
    console.log("now we have the data ", email);
    const data = "<p> " + email + " / getting after 3+1=4sec</p>";
    result3.innerHTML = data;
    // RATHAR THAN RUTURNING PASS THIS IN CALLBACK
    callback(["video 1", 'video 2', 'video 3'])
  }, 1000);
}


function videoDetail(video, callback) {
  setTimeout(() => {
    console.log("now we have the data ", video);
    const data = "<p> " + video + " / getting after 3+1+1=5sec</p>";
    result3.innerHTML = data;
    // RATHAR THAN RUTURNING PASS THIS IN CALLBACK
    callback("title of the video")
  }, 1000);
}


// CALLBACK FUNCTION IS A FUNCTION THAT PASS AS PARAMETERS THAT CAN RUN LATER ON
// WE CAN NOT RUN SYNC STYLE CODE HERE SINCE WE HON'T HAVE THE DATA
const user = loginUser("mdshayon@hotmail.com", 1234, user => {
  console.log(user.userEmail);
  getUserVideos(user.userEmail, (videos) => {
    console.log(videos);
    videoDetail(videos[0], (title) => {
      console.log(title);
    });
  });

});
console.log("End");
*/








/*
// CLEAN SYNTEX OF PROMISES
console.log("--------------------👍🏿👍🏿👍🏿👍🏿-------------------");
// PROMISES IS EITHER RESULT OF ASYNC OPERATION OR FAILURE OF ASYNC OPERATION
const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("Got the user after 2sec");
    // resolve({user: "Md"});
    reject(new Error("User is not logged in"));
  }, 2000);
});

promise.then(user => {
    console.log("User : ", user);
  })
  .catch(err=>{
    console.log(err);
  });
  */






// REFACTORING CODE - BATTER WAY
console.log("--------------------👍🏿👍🏿👍🏿👍🏿-------------------");
console.log("start");

function loginUser(email, password, callback) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const data = "<p>now we have the data " + email + " - " + password + " / getting after 3sec</p>";
      console.log(data);
      result3.innerHTML = data;
      // RATHAR THAN RUTURNING PASS THIS IN CALLBACK
      // return {userEmail: email}
      resolve({
        userEmail: email
      });
    }, 3000);
  });

}




function getUserVideos(email, callback) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("now we have the data ", email);
      const data = "<p> " + email + " / getting after 3+1=4sec</p>";
      result3.innerHTML = data;
      // RATHAR THAN RUTURNING PASS THIS IN CALLBACK
      resolve(["video 1", 'video 2', 'video 3'])
    }, 1000);
  });
}


function videoDetail(video, callback) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("now we have the data ", video);
      const data = "<p> " + video + " / getting after 3+1+1=5sec</p>";
      result3.innerHTML = data;
      // RATHAR THAN RUTURNING PASS THIS IN CALLBACK
      resolve("title of the video")
    }, 1000);
  });
}



// CALLBACK FUNCTION IS A FUNCTION THAT PASS AS PARAMETERS THAT CAN RUN LATER ON
// WE CAN NOT RUN SYNC STYLE CODE HERE SINCE WE HON'T HAVE THE DATA
// loginUser('Shayon', "sam@gmail.com")
// .then(user=> getUserVideos(user.email))
// .then(videos=> videoDetail(videos[0]))
// .then(detail => console.log(detail));


// ASYNC / AWAIT
async function displayUser(){
  try {
    const loggedUser = await loginUser("shayon", 'bla bla bla');
    const videos = await getUserVideos(loggedUser.userEmail);
    const detail = await videoDetail(videos);
    console.log("Detail: ", detail);
  } catch (e) {
    console.log(e);
  } 

}
displayUser();

console.log("End");




/*
// SYNC STYLE CODE IN ASYNC USING ASYNC AWAIT
// RUN ALL OF THEM AT THE SAME TIME
// FOR EXAMPLE FETCHING MULTIPLE VIDEOS  FROM YOUTUBE - HERE I DON'T WANT FETCH ONE BY ONE
console.log("--------------------👍🏿👍🏿👍🏿👍🏿-------------------");
const yt = new Promise((resolve, reject) => {
  setTimeout(()=>{
    console.log("Getting stuff from youtube");
    resolve({
      videos: [1, 2, 3, 4, 5, 6]
    });
  }, 2000);
});

const fb = new Promise((resolve, reject) => {
  setTimeout(()=>{
    console.log("Getting stuff from fb");
    resolve({
      user: "Name"
    });
  }, 2000);
});

Promise.all([yt, fb])
.then(result=>console.log("Fetching multiple things at the same time: ",result));
*/



// I SHELL USE PROMISE ALL FOR MY NODEJS PROJECT





// end
