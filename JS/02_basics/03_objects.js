// Singleton
// constructor
// Object.create() 

// Object literal
let userSymb = Symbol("FBCool26Sym")

const fbUser = {
    username: "FBCool26",
    "full name": "Omkareshwar Nath Dwivedy",
    [userSymb]: "Unique Symbol",
    age: 24, 
    degree: "Btech",
    isLoggedIn: true,
    lastLoggedIn: ["Monday", "Saturday"],
}

// console.log(fbUser);

// Accessesing properties of fbUser
// console.log(fbUser.username);
// console.log(fbUser["full name"]);
// console.log(fbUser[userSymb]);

// Adding properties in objects
fbUser.email = "omkareshwar.dwivedy@google.com"

// console.log(fbUser);
/**
{
  username: 'FBCool26',
  'full name': 'Omkareshwar Nath Dwivedy',
  age: 24,
  degree: 'Btech',
  isLoggedIn: true,
  lastLoggedIn: [ 'Monday', 'Saturday' ], 
  email: 'omkareshwar.dwivedy@google.com',
  [Symbol(FBCool26Sym)]: 'Unique Symbol'  
}
 */

// Object Freeze
// Object.freeze(fbUser)

// Now see, r u able to change 
fbUser.age = 25

// console.log(fbUser); // age: 24

// Adding functions in objects
fbUser.isTeenager = function() {
    // this keyword, used to access the same function properties
    return (this.age >= 13 && this.age <= 18)
}

fbUser.isAdult = function() {
    return this.age > 18 ? this["full name"] : this.age
}

console.log(fbUser.isTeenager()); // false
console.log(fbUser.isAdult()); // Omkareshwar Nath Dwivedy

