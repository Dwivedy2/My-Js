let score = null

score = Number(score)

// console.log(typeof score) // number
// console.log(score) 

// Conclusion, data type will be number but values
// "33" => 33
// "33abc" => NaN
// "" => 0
// null => 0
// undefined => NaN

let isLoggedIn = undefined

isLoggedIn = Boolean(isLoggedIn)

// console.log(typeof isLoggedIn, isLoggedIn);

// Conclusion, data type will be boolean but values
// "" => false
// -10 => true
// true => true
// "ff" => true
// null => false
// undefined => false

let item = ""

item = String(item)

// console.log(typeof item, item);

// Conclusion, data type will be string but values
// 33 => 33
// null => null
// undefined => undefined
// true => true
// "" => 


/******************** OPERATIONS ***** */
// console.log(2+2); // 4
// console.log(2-2); // 0
// console.log(2*2); // 4
// console.log(2**3); // 8
// console.log(2/3); // 0.6666666666666666
// console.log(2%3); // 2

// Conversion operators
// console.log(+true); // 1
// console.log(+""); // 0
// console.log(+"helllo"); // NaN

// console.log(3 + 5 * 4 / 5); // 7

// Increment Operators
let gameCounter = 0;
gameCounter++;
// console.log('gameCounter : ' + gameCounter); // 1