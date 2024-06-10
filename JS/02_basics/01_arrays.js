// Arrays are collection of data, represented through a single variable

let itemsOfStationary = ["Ball Pen", "Fountain Pen", "Pencil", "Rubber", "Sharpner", "Scale"]

// console.log(itemsOfStationary);

let oddNumbers = new Array(1, 3, 5, 7, 9)

// console.log(oddNumbers);

// Index: Position, Start from 0

// Copies operation in JS Arrays
// JS Arrays makes "Shallow Copies"

// Shallow Copies : Variables sharing the same reference
// Deep Copies : Variables having different copies or references

// Array Methods

oddNumbers.push(11) // add 11 in last
oddNumbers.push(13) // adds 13 after 11 in original array

oddNumbers.pop() // removes one element from last

oddNumbers.unshift(-1) // adds '-1' in the start of array, it leads to shifting of other
// numbers by 1, very time consuming 

oddNumbers.shift() // removes -1 from start

oddNumbers.fill(2, 1, 3) // [1, 2, 2, 7, 9, 11]

let newArr = oddNumbers.join(', ')

// console.log(newArr);

// console.log(oddNumbers);

// Slice VS Splice

let newSliceArr = oddNumbers.slice(1, 3) // return a copy, end exclusive

console.log("Slice Arr", newSliceArr); // Slice Arr [ 2, 2 ]

console.log("A", oddNumbers); // A [ 1, 2, 2, 7, 9, 11 ]

let newSpliceArr = oddNumbers.splice(1, 3) // removes elements, end inclusive

console.log("Splice Arr", newSpliceArr); // Splice Arr [ 2, 2, 7 ] 

console.log("B", oddNumbers); // B [ 1, 9, 11 ]

