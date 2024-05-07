/*
A school has following system for grading system
a. Below 25 - F
b. 25 to 44 - E
c. 45 to 49 - D
d. 50 to 59 - C
e. 60 to 79 - B
f. 80 to 100 - A
Ask the user to enter marks and print the grade
*/

// enter marks
const readline = require("readline-sync");
let marks = readline.question();

let grade = '';
// calc grade
if(marks < 25) {
    grade = 'F';
} else if(marks <= 44) {
    grade = 'E';
} else if(marks <= 49) {
    grade = 'D';
} else if(marks <= 59) {
    grade = 'C';
} else if(marks <= 79) {
    grade = 'B';
} else if(marks <= 100) {
    grade = 'A';
}

// print
console.log(grade);