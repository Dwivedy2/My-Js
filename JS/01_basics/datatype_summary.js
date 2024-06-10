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

// console.log('uniqueId', uniqueId);

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

// console.log('Characters of hero', heroCharacter);

// Functions
let average = function() {
    return (5 + 6 + 4) / 3
}

// console.log('average = ', typeof average); // average = function

/* +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */

// Memory distribution
// Primitive (Stack) -- Copy of actual
// Reference (Heap) -- Actual reference

// Primitive - Stack - Copy
let username = "Omkareshwar"
let firstName = username

// change second value i.e copy of first value
firstName = "Anil"

// No effect on its original value, by change in the second value
// console.log("username: ", username) // Omkareshwar
// console.log("firstname: ", firstName) // Anil

// Reference - Heap - Actual
let house = {
    colorCode: "Yellow",
    count: 53
}

let ramanHouse = house

ramanHouse.colorCode = "Red"

// Value is changed for both the variables
// console.log('house', house) // { colorCode: 'Red', count: 53 }
// console.log('ramanHouse', ramanHouse) // { colorCode: 'Red', count: 53 }