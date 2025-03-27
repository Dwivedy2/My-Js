function User(username, email) {
    this._username = username;
    this._email = email;

    Object.defineProperty(this, 'username', {
        get: function() {
            return this._username;
        },
        set: function(value) {
            this._username = value;
        }
    });

    Object.defineProperty(this, 'email', {
        get: function() {
            return this._email;
        },
        set: function(value) {
            this._email = value;
        }
    });

}

const om = new User("cool", 'om@google.com');
console.log(om.username) // cool