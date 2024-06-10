const myName = "Omkareshwar"
const myAspiration = "to become a great developer"

// console.log("Hello, my name is " 
// + myName 
// + " and I want " 
// + myAspiration); // OUTPUT: Hello, my name is Omkareshwar and I want to become a great developer


// String Interpolation
// console.log(`Hello, 
//     my name is ${myName} and I want ${myAspiration}
// `); 
/* OUTPUT: 
Hello, 
    my name is Omkareshwar and I want to become a great developer
*/

let companyName = new String("Growmore")
// console.log(companyName); // String: 'Growmore'


/** Here companyName[0] is not an array, but its an object which is having a key '0'
 * and value at key '0' is 'G'
 */
console.log(companyName[0]); // G

// String functions [Prototype]
// console.log(companyName.__proto__); // {}

/**
 * These methods on strings do not change the original string
 * as you know that string is a primitive type, that is why
 * a copy is sent to do all the operations on strings...
 */

// console.log(companyName.charAt(4)); // m
// console.log(companyName.includes("mo")); // true
// console.log(companyName.toLocaleUpperCase()); // GROWMORE
// console.log(companyName.toUpperCase()); // GROWMORE