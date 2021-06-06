// https://www.youtube.com/watch?v=CfNsy4K9atY

// let complete = true;


const prom = (complete) => {
    return new Promise((resolve, reject) => {
        console.log("Fetching data, please wait!");
        setTimeout(() => {
            if (complete === true) {
                resolve("I am successfull! ");
            } else {
                reject("I failed");
            }
        }, 1500);
    });
}


// IF PROMISE IS FULFILLED IT WILL RETURN FROM RESOLVE 
const promElement = document.getElementById('prom');
promElement.textContent = promElement.textContent + prom(true);
console.log("On peomise - ", prom(true));




console.log("-----------🤞🏿 🤟🏿 🤘🏿 🤙🏿------------");

const resultElement = document.getElementById('result');
// FUNCTION FOR SUCCESS 
let onFulfilment = (result) => {
    console.log("result: ", result);
    resultElement.textContent = resultElement.textContent + result;
}

// FUNCTION FOR FAILURE 
let onRejection = (err) => {
    console.log("Error: ", err);
    resultElement.textContent = resultElement.textContent + err;
}



prom(true).then(onFulfilment).catch(onRejection);






// ANOTHER EXAMPLE 
console.log("-----------🤞🏿 🤟🏿 🤘🏿 🤙🏿------------");
const operation = (x, y) => {
    console.log("Fetching data, please wait!");
    let c = x / y;
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (x, y) {
                resolve("Your answer is: " + c);
            } else {
                reject("failed to calculate")
            }
        }, 1500);
    });
}

const divisionSuccessElement = document.getElementById('division-success');
const divisionFailureElement = document.getElementById('division-failure');
// FOR SUCCESS 
operation(5, 2).then(result => {
    divisionSuccessElement.textContent = divisionSuccessElement.textContent + result;
    console.log(result);
}).catch(error => {
    divisionFailureElement.textContent = divisionFailureElement.textContent + error;
    console.log(error);
});

// FOR FAILURE 
operation(5, 0).then(result => {
    divisionSuccessElement.textContent = divisionSuccessElement.textContent + result;
    console.log(result);
}).catch(error => {
    divisionFailureElement.textContent = divisionFailureElement.textContent + error;
    console.log(error);
});







// ANOTHER REAL LIFE EXAMPLE USING JQUERY AND AJAX
console.log("-----------🤞🏿 🤟🏿 🤘🏿 🤙🏿------------");
const fetchDataAjax = () => {
    console.log("Fetching data, please wait!");
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let APIEndpoint = "https://jsonplaceholder.typicode.com/posts";
            $.get(APIEndpoint, (data) => {
                resolve(data);
            }).fail(err => {
                reject("Failed to fetch data");
            })
        }, 1500);
    });
}



const fetchJSONData = document.getElementById('json-response');

fetchDataAjax().then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});