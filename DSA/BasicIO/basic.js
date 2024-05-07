// input 
const readline = require("readline-sync");

let input = readline.question();

let numbers = input.split(' ');
numbers.map((n) => {
    console.log(n);
})