const readline = require("readline-sync");

function sayHello(name = "") {
    console.log(`Hello! ${name}`);
};

// sayHello();

// let name = readline.question();
// sayHello(name);

// max, min
// console.log((Math.max(2, 3))); // 3
// console.log(Math.min(2, 3)); // 2
console.log(maxx(2, 3))

function maxx(n1, n2) {
    if(n1 > n2) {
        return n1;
    }
    return n2;
}