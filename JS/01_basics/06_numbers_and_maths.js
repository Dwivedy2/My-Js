let score = 100 // Auto detect number type
// console.log(score); // 100

// If you want to explicitly define variable to number type
let grade = new Number(90)
// console.log(grade); // [Number: 90]

// Methods
// console.log(grade.toFixed(2)); // 90.00

let speedOfParticleInMPS = 35023222.6789

// console.log(speedOfParticleInMPS.toPrecision(8)); //35023223

// console.log(speedOfParticleInMPS.toLocaleString('en-Us')); // 35,023,222.679

// console.log(speedOfParticleInMPS.toExponential(4)); // 3.5023e+7, how many digits to show after decimal

// ++++++++++++++++++ MATHS ++++++++++++++++++

// console.log(Math); // Object

// console.log(Math.abs(-3.5)); // 3.5, gives the absolute value

// console.log(Math.max(2, 3, 0, 1, 20, 25, 15, 18, 23)); // 25

// console.log(Math.min(2, 3, 0, 1, 20, 25, 15, 18, 23)); // 0

// Method on Random in Math Object

// console.log(Math.random()) // 0 <= val <= 1

// console.log(Math.random() * 10); // 0 <= val <= 10

// console.log((Math.random() * 10) + 1); // 1 <= val <= 10

// someMin <= Val <= someMax

const MIN = 13
const MAX = 20

// console.log(Math.floor(Math.random() * (MAX - MIN + 1)) + MIN);
