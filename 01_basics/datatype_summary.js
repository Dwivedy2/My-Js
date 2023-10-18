// Datatypes - 2 Types

// Primitive - 7 types : String, Number, Boolean, null, undefined, BigInt, Symbol

// Numbers : integers, decimals
let perfectScore = 100
let scoreObtained = 93.75

// Strings
let carModel = "Tesla Model X"

// Boolean
let isClassPresent = true

// null
let temprature = null

// undefined
let user = undefined

// BigInt
let mathValue = 44n

// Symbol
let uniqueId = Symbol('12')

console.log('uniqueId', uniqueId);

// Reference Data Types : Arrays, Objects, Functions

// Array
let groceryItems = ['2kg Flour', '2 Knifes', '1 broom', 'some stationary items']

// Object
let heroCharacter = {
    name: "Mr Y",
    height: 6.3,
    qualification: "Btech",
    speciality: ["Fit & Muscular", "Helping nature", "Intelligent"],
    killsInfo: {
        kills: 105,
        villans: ["Black", "Stranger", "Candy"],
        weapons: ["Brain", "Gun"]
    }
}

console.log('Characters of hero', heroCharacter);

// Functions
let average = function() {
    return (5 + 6 + 4) / 3
}

console.log('average = ', typeof average); // average = function