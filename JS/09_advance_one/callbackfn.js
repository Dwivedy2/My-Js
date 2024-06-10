// callback functions -> when fn passed as an argument

function subtract(a, b) {
    return a - b
}

function operation(a, b, subtract) {
    return subtract(a, b)
}

// console.log(operation(5, 2, subtract)); // 3

// real life examples

const randomNums = [2, 2, 4, 6, 7, 13, 44, 0, 23, -76]

function firstOddNum(a) {
    return a%2
}

const num = randomNums.find(firstOddNum)

console.log(num); // 7