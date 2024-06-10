// Date data type

let date = new Date()

// console.log(date); // 2023-10-22T04:50:25.513Z

// console.log(typeof date); // as new keyword, object

// console.log(date.toDateString()); // Sun Oct 22 2023

// console.log(date.toLocaleString()); // 22/10/2023, 10:26:19 am

// let myDate = new Date(2023, 1, 22)

// let myNewDate = new Date(2023, 1, 22, 5, 37)

let myNewDate = new Date("10-23-2023")

// console.log(`my setted date is ${myDate} and new Date is ${myNewDate}`);

// console.log(`New Date is ${myNewDate.toLocaleString()}`); // New Date is 23/10/2023, 12:00:00 am

// TIMESTAMPS

let timeStamp = Date.now()

// console.log(timeStamp); // 1698036184540 ms, from 1 Jan 1970 (default start date till now)

// console.log(myNewDate.getTime()); // 1697999400000 ms

// Converting Miliseconds to Seconds

// console.log(Math.floor(timeStamp / 1000)); // 1698036441 s

// console.log(date.getMonth()); // 9, gives index start from 0

// console.log(date.getDay()); // 1, Monday

// console.log(date.getFullYear()); // 2023

// Customising Dates

date.toLocaleString('default', {
    weekday: "long",
    hour12: true
})

console.log(date.toLocaleString('default', {
    weekday: "long",
    hour12: true
})); // Monday

let todayDate = new Date()
console.log(todayDate.toLocaleString());
console.log(todayDate.getMinutes());