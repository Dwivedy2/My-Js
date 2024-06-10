let userArray = []

// if (userArray) {
//     console.log("We have some users");
// } else {
//     console.log("No users could be found !");
// }

// OUTPUT: We have some users

// falsy
// 0, -0, BigInt 0n, false, "", null, undefined

// truthy
// "0", "-0", " ", "false", function(){}, -10, [], {}

// if (userArray.length) {
//     console.log(`We have ${userArray.length} users`);
// } else {
//     console.log("No users could be found !")
// }

// OUTPUT: No users could be found !

let user = {}

// if (Object.keys(user).length) {
//     console.log("User : ", user);
// } else {
//     console.log("No user found !");
// }

// OUTPUT: No user found !


// Nullish Coalescing Operator (??) null, undefined
// The nullish coalescing (??) operator is a logical operator that returns its 
// right-hand side operand when its left-hand side operand is null or undefined, 
// and otherwise returns its left-hand side operand.

let val = 5

val = 5 ?? 10 // 5

val = null ?? 15 // 5

val = undefined ?? 20 // 20

// console.log(val);

// Conditional Statement

let price = 70

price >= 80 ? console.log("Price is greator than or equal to 80") : console.log("Price is less than or equal to 80");