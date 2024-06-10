// Promise - tells you about the completion of async operation

// Creating a promise
const promiseOne = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log('Value is fetched from database');
        // making connection
        resolve()
    }, 1000);
})

promiseOne.then(()=>{
    // this statement tells you about the completion,
    // but will not execute till the time connection of resolve
    // is not completed in above function
    console.log("Operation completed");
})

// another way
new Promise((resolve, reject)=>{
    setTimeout(() => {
        console.log('data from database');
        resolve()
    }, 1000);
}).then(()=>{
    console.log('Operation is compeleted');
})

const promiseThree = new Promise((resolve, resject)=>{
    setTimeout(()=>{
        console.log('Api response : 200 OK');
        resolve({'username': 'omkareshwarnathd', 'email':'omkareshwar@example.com'})
    }, 1000)
})

promiseThree.then((apiResponse)=>{
    console.log('Response: ', apiResponse);
})


const promiseFour = new Promise((resolve, reject) => {
    setTimeout(() => {
        let error = false
        if(!error) {
            resolve({username: "omkareshwar26", profile: "GitHub"})
        } else {
            reject('ERROR: 400 Bad Request')
        }
    }, 1000)
})

// when you want something to return
// use then chaining
promiseFour.then((value) => {
    console.log(value);
    return value.profile
}).then((returnedVal) => {
    console.log('returned value: ', returnedVal); // GitHub
}).catch((error) => {
    console.log(error);
})


// using async await instead of then, catch
const promiseFive = new Promise((resolve, reject) => {
    setTimeout(() => {
        let error = false
        if(!error) {
            resolve({username: "billielish23", profile: "Singer"})
        } else {
            reject('ERROR: 500 Internal Server Error')
        }
    }, 1000)
})

async function handlePromiseFive() {
    try {
        const value = await promiseFive
        console.log('Promise 5 value -', value);
    } catch (error) {
        console.log(error);
    }
}

handlePromiseFive()


async function getGithubUser() {
    try {
        const data = await fetch('https://api.github.com/users/hiteshchoudhary')
        // converting large object into json takes time
        const response = await data.json()
        console.log(response);
    } catch (error) {
        console.log('Error', error);
    }
}

getGithubUser()

fetch('https://api.github.com/users/hiteshchoudhary')
.then((res) => res.json())
.then((value) => console.log(value))
.catch((err) => console.log(error))