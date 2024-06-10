// sync vs async

// sync functions - execution -> top to bottom

// console.log('Hi');
// console.log('How are you?');
// console.log('Nice to meet you!');


// async functions - execution -> depends upon the return result

// console.log('Hi');
// setTimeout(() => {
//     console.log('Ok no problem!');
// }, 2000);
// console.log('Hello will you hangout with me?');
// console.log('Oh you already have a plan!');


// Callbacks with async

// function bringMyPhone() {
//     setTimeout(() => {
//         console.log('Brother take your phone');
//         return 'Phone'
//     }, 2000);
// }

// const myPhone = bringMyPhone();
// console.log(myPhone); // undefined Brother take your phone

// To return value from async func, pass a callback that will inform you about the completion of the task
function bringMyPhone(callback) {
    setTimeout(() => {
        console.log('Brother take your phone');
        callback('Vivo Y27');
    }, 2000);
}

// bringMyPhone((myPhone) => {
//     console.log(myPhone);
// });

// OUTPUT
// Brother take your phone
// Vivo Y27

// Call back Hell - when some dependent functions are called with many callbacks

function bringMyPhone(callback) {
    setTimeout(() => {
        console.log('Brother take your phone');
        callback('Vivo Y27');
    }, 2000);
}

function callSharmaUncle(callback) {
    setTimeout(() => {
        console.log('Hello uncle, what is yout sons percent?');
        callback(99.99)      
    }, 2000)
}

function myPunishment(callback) {
    setTimeout(() => {
        console.log('Sit upside down');
        callback('Mummy please tell papa, I will work hard')
    }, 5000)
}

// nesting is occurring which is not a good practise, solve it by promise
bringMyPhone((myPhone) => {
    console.log('Got my phone: ' + myPhone);
    callSharmaUncle((uncleSonPercent) => {
        console.log('wow my percent is : ' + 33 + ' and sharma uncle son percent is: ' + uncleSonPercent);
        myPunishment((myRequest) => {
            console.log(myRequest);
        })
    })
});
