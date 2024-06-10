// this keyword: refer to current context.
const user = {
    username: "Omkar",
    price: 0,
    website: "Github",

    // function welcome() {
        
    // }

    welcomeUser: function() {
        // current context here is scope of user object
        console.log(`${this.username}, welcome to github website`);
        // returns whole user object, as current context
        console.log(this); 
    }
}

// user.welcomeUser()

// returns {}, but in browser it returns window object
// console.log(this);

// this keyword in functions, current context
function ITry() {
    let username = "Omkareshwar"

    // undefined, as current context is recognize in object for this.
    console.log(this.username);

    // gives lot of things
    console.log(this); 
}

// ITry()

const refFunc = function() {
    let username = "Omkareshwar"

    // undefined, as current context is recognize in object for this.
    console.log(this.username);

    // gives lot of things
    console.log(this); 
}

// same as ITry()
// refFunc()


// If we use arrow function
const arrow = () => {
    let username = "Omkareshwar"

    // undefined, as current context is recognize in object for this.
    console.log(this.username);

    // {}
    console.log(this); 
}

// so this keyword returns an empty object in arrow functions
// arrow()


// More about arrow fnc
const addTwoNums = (n1, n2) => {
    return n1 + n2
}

// console.log(addTwoNums(5, 8)); // 13

// Implicit return
const incrementNum = (n) =>  n + 1 
// OR
const incrementNums = (n) => ( n + 1 )
// const incrementNum = (n) => { n + 1 }  // for {} use return statement

// console.log(incrementNum(5));

// return obj
const one = (n) => {username: "Omkareshwar"}

// console.log(one(4)) // undefined, as with {} use explicit return

// Or

const two = (n) => ( {username: "Omkareshwar"} )

// console.log(two(4));