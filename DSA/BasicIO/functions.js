const readline = require("readline-sync");

function sayHello(name = "") {
    console.log(`Hello! ${name}`);
};

sayHello();

let name = readline.question();

sayHello(name);