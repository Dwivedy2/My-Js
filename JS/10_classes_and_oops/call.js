// story of call and this

function setUsername(username) {
    this.username = username
}

function createUser(username, age, isLoggedIn) {
    // here username is not set, because of call stack, it dissappears when function is called
    // setUsername(username);

    setUsername.call(this, username)
    this.age = age;
    this.isLoggedIn = isLoggedIn;
}

const Omkar = new createUser('Omkar2345', 24, true);

console.log(Omkar);