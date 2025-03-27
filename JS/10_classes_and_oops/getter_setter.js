class User {
    constructor(username, email) {
        this.username = username;
        this.email = email;
    }

    // RangeError: Maximum call stack size exceeded
    // the below getter and setter are trying to set the same
    // which are set in constructor

    // get email() {
    //     return this.email.toUpperCase();
    // }
    // set email(value) {
    //     this.email = value;
    // }

    // NOTE: the name 'email' must match with the field 'email' given in constructor
    // then only getter and setter will work
    get email() {
        return this._email.toUpperCase();
    }
    set email(value) {
        this._email = value;
    }
}

const om = new User("Omkar", "om@google.com");
// console.log(om.email);  // property get, set in constructor
console.log(om.email) // OM@GOOGLE.COM
