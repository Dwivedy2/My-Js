// Classes in JS

class User {
    constructor(uname, password, email) {
        this.username = uname;
        this.email = email;
        this.password = password;
    }

    encryptPassword() {
        return `${this.password}abc`;
    }

    resetPassword() {
        return '';
    }
}

const anil = new User('AnilCoolio', 'AnilPass', 'anil@coolio.com');

console.log(anil.encryptPassword());

console.log(`password reset to: '${anil.resetPassword()}'`);

// behind the scene

function User1(uname, password, email) {
    this.username = uname;
    this.email = email;
    this.password = password;
}

User1.prototype.encryptPassword = function() {
    return `${this.password}abc`;
}

User1.prototype.resetPassword = function() {
    return '';
}

const om = new User1('omcoolio', 'OmPass', 'om@coolio.com');

console.log(om.encryptPassword());

console.log(`password reset to: '${om.resetPassword()}'`);