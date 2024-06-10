const user = {
    username: "hitesh",
    loginCount: 8,
    signedIn: true,

    getUserDetails: function(){
        //console.log("Got user details from database");
        // console.log(`Username: ${this.username}`);
        console.log(this);
    }

}



//console.log(user.username)
//console.log(user.getUserDetails());
// console.log(this);

// Constructor function, this = {}
function User(username, loginCount, isLoggedIn){
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn

    this.greeting = function(){
        console.log(`Welcome ${this.username}`);

    }
    // since this is an {} in global context so we can add
    // by using a dot notation
    return this
}

// const userOne = User("Omkareshwar Nath", 12, true)
// const userOne = User("MeraCode", 12, true)

// if not using a new operator, the line 36 will override
// console.log(userOne) // { "username": "MeraCode" ....}

const userOne = new User("Omkareshwar Nath", 12, true)
const userTwo = new User("MeraCode", 11, false)
console.log(userOne.constructor); // [Function: User]
//console.log(userTwo);

// instanceof
console.log(userOne instanceof User); // true
console.log(userOne instanceof Object); // true

// reason
console.log(Object.getPrototypeOf(userOne) === User.prototype); // true

