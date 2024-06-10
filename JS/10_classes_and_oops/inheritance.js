class User {
    constructor(username, email, password) {
        this.username = username;
        this.email = email;
        this.password = password;
    }

    getUsername() {
        console.log(`Username: ${this.username}`);
    }
}

class Customer extends User {
    constructor(username, email, password, cartItems) {
        super(username, email, password);
        this.cartItems = cartItems;
    }

    getCartItems() {
        console.log(`CartItems: ${this.cartItems}`);
    }
}

const anil = new Customer("anil", "anil@google.com", "123", ["nike air jordan", "adidas 3 pair socks"]);

anil.getCartItems();
anil.getUsername();
console.log(anil.username);

const om = new User("Omkar", "om@microsoft.com", "123");
om.getUsername()