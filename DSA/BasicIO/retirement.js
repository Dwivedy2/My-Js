/*
    There are some employees whose ages are below
    age < 18: not eligible for job
    age >= 18: eligible for job
    age >= 55 and age <= 57: eligible for job, but retirement soon
    age > 57: you are now retired
*/

const input = require("readline-sync");

let age = input.question();

if(age < 18) {
    console.log("not eligible for job");
} else if(age <= 57) {
    let message = "eligible for job";
    if(age >= 55) {
        message += ", but retirement soon";
    }
    console.log(message);
} else {
    console.log("you are now retired");
}

