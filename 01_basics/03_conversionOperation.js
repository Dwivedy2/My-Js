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

console.log(typeof item, item);

// Conclusion, data type will be string but values
// 33 => 33
// null => null
// undefined => undefined
// true => true
// "" => 

