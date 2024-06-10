// const myName = "Omkareshwar     ";
// const myFavLang = "JavaScript     ";

// // make trueLength
// console.log(myName.trueLength);

// array
const cars = ["bmw", "mercedez", "ferrari"];

// objects
const carSpeciality = {
    bmw: "manufacturing",
    mercedez: "technology",
    ferrari: "exclusivity"
}

// want to make my own function for array, strings, objects
Object.prototype.omkar = function() {
    console.log('Omkar is available');
}

// cars.omkar(); // Omkar is available
// carSpeciality.omkar() // Omkar is available


// REASON: happening because of inheritance
// arrays, objects, string are all objects


Array.prototype.Nath = function() {
    console.log('My middle name in array only');
}

// cars.Nath() // My middle name in array only
// carSpeciality.Nath() // error

// INHERITANCE: __proto__

const camera = {
    front: '48 mpx',
    back: '80 mpx'
}

const vivoY27 = {
    color: 'bergundi black',
    ram: '6 GB',
    storage: '128 GB',
    __proto__: camera
}

const iphone12 = {
    color: 'purple'
}

iphone12.__proto__ = camera

// mordern
Object.setPrototypeOf(vivoY27, camera);

// Challenge
// make trueLength for all strings

String.prototype.trueLength = function() {
    return this.trim().length;
}

console.log("Omkareshwar     ".trueLength());
console.log("Nath      ".trueLength());