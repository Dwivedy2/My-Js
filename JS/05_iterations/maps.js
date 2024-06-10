const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// maps: iterates on each value and on condition match returns value or undefined

let updateNums = myNums.map( (n) => n+10 )

// console.log(updateNums);

// OUTPUT
// [
//     11, 12, 13, 14, 15,
//     16, 17, 18, 19, 20
//   ]

// maps, filter chaining

let calculatedScores = myNums
                        .map( (n) => n*3 )
                        .map( (n) => n+2 )
                        .filter( (n) => n%2 )

// console.log(calculatedScores); // [ 5, 11, 17, 23, 29 ]