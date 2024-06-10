class User {
    constructor(username, email, password) {
        this.username = username;
        this.email = email;
        this.password = password;
    }

    logUsername() {
        console.log(`Username: ${this.username}`);
    }

    // function which I dont want to expose
    static encryptPass() {
        this.password = this.password + "123";
    }
}

const bean = new User('Mr. bean', 'bean@hungama.com', "abc");

// bean.encryptPass(); // not a function

// child

class character extends User {
    constructor(username, email, pass, belongsToShow) {
        super(username, email, pass);
        this.belongsToShow = belongsToShow;
    }

    logShow() {
        console.log(`${this.username} is from show ${this.belongsToShow}`);
    }
}

const ash = new character("Ash Ketchum", "ash@ok.com", "123", "Pokemon");

ash.logShow();

ash.logUsername();

// ash.encryptPass(); // error, not a function