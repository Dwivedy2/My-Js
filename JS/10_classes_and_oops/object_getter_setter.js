const User = {
    _name: 'Omkar',
    _age: 25,

    get name() {
        return this._name;
    },

    set name(value) {
        this._name = value;
    }
}

const om = Object.create(User);
console.log(om.name)