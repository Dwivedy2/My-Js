// Js is protoyple language, it searches till the end
// Array > Object > null
// Strings > Object > null
// Functions > Objects > null

function multiplyBy5(num) {
    return num * 5;
}

// console.log(multiplyBy5(4)); // 20

// functions = object, function
multiplyBy5.power = 3

// console.log(multiplyBy5.power); // 3

// console.log(multiplyBy5.prototype); // {} -> context, properties

function createButton(value, color) {
    this.value = value;
    this.color = color;
}

// function inside function
createButton.setDefault = function() {
    this.value = 'Submit';
    this.color = 'Black'
}

const button = new createButton('Create', 'Grey');

// console.log(button); // {value: 'Create', color: 'Grey'}

const defaultBtn = new createButton.setDefault();

// console.log(defaultBtn); // {value: 'Submit', color: 'Black'}

// Importance of 'new'

createButton.prototype.setPrimary = function() {
    this.value = 'Click';
    this.color = 'Blue';
}

const parentButton = createButton('parent', '#23ffab');

// parentButton.setPrimary() // error, undefined setPrimary

const newParent = new createButton('parent', '#23ffab');

newParent.setPrimary();


/*

Here's what happens behind the scenes when the new keyword is used:

A new object is created: The new keyword initiates the creation of a new JavaScript object.

A prototype is linked: The newly created object gets linked to the prototype property of the constructor function. This means that it has access to properties and methods defined on the constructor's prototype.

The constructor is called: The constructor function is called with the specified arguments and this is bound to the newly created object. If no explicit return value is specified from the constructor, JavaScript assumes this, the newly created object, to be the intended return value.

The new object is returned: After the constructor function has been called, if it doesn't return a non-primitive value (object, array, function, etc.), the newly created object is returned.

*/
