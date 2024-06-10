// function: set of code accessible by one reference, that can accept parameters or inputs
function sayMyName() {
    console.log("O");
    console.log("M");
    console.log("K");
    console.log("A");
    console.log("R");
}

// sayMyName // reference
// sayMyName() // execution

// function to add 2 numbers
function add2Number(num1, num2) {
    console.log(num1 + num2)
}

function addTwoNumber(num1 = 0, num2 = 0) {
    return num1 + num2
}

// add2Number(3, 5) // 8
// add2Number(3, "5") // 35

let sum = addTwoNumber()
// console.log(sum); // 0

let sum2 = addTwoNumber(3, 10)
// console.log(sum2); // 13


// Rest Operator: makes bundle of individual values
function calculateCartItemPrice(val1, val2, ...itemPrice) {
    // console.log(val1); // 120
    // console.log(val2); // 340
    return itemPrice
}

// console.log(calculateCartItemPrice(120, 340, 200, 456, 234, 500)); // [ 200, 456, 234, 500 ]
// console.log(calculateCartItemPrice(20, 30, [23, 44, 55])); // [ [ 23, 44, 55 ] ]

let course = {
    name: "JavaScript",
    price: 399
}

function printCourse(courseObj) {
    console.log(`Course name is ${courseObj.name} and price is Rs.${courseObj.price}`);
}

// printCourse(course) // Course name is JavaScript and price is Rs.399

// printCourse({ 
//     name: "ReactJs",
//     prices: 299 
// }) // Course name is ReactJs and price is Rs.undefined

let randomNumbers = [2, 4, 3, 90, 56, 45, 87, 76]

function getSecondValue(array) {
    return array[1]
}

// console.log(getSecondValue(randomNumbers)); // 4
console.log(getSecondValue([3, 5, 4, 1, 9])); // 5