// We will try to solve the nesting of callbacks called as hell by promise

function bringMyPhone() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Brother take your phone');
            resolve('Vivo Y27')
        }, 2000);
    });
}

function callSharmaUncle(callback) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Hello uncle, what is yout sons percent?');
            resolve(99.99);
            // reject('Uncle son got failed') 
        }, 2000)
    })   
}

function myPunishment(callback) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Sit upside down');
            resolve('Mummy please tell papa, I will work hard')
        }, 5000)
    });
}


// using thenables
// bringMyPhone()
// .then((myPhone) => {
//     console.log(myPhone);
//     return callSharmaUncle()
// })
// .then((percent) => {
//     console.log(percent);
//     return myPunishment()
// })
// .catch((err) => {
//     console.log(err);
// })
// .finally(() => {
//     console.log('I got many surprises');
// })


// using async await
async function doAllProcess() {
    const myPhone = await bringMyPhone();
    console.log(myPhone);
    const percent = await callSharmaUncle();
    console.log(percent);
    const punish = await myPunishment();
    console.log(punish);
}

doAllProcess()