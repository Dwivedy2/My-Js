// Advance loops
// for of - Array

// ["", "", ""]
// [{}, {}, {}]

const arr = [1, 2, 3, 4, 5]

for (let num of arr) {
    // console.log('arr - ', num);
    num++
}

// console.log(arr); // [1, 2, 3, 4, 5]

let name = "Omkareshwar Nath Dwivedy"

for (const character of name) {
    // console.log('Character -', character);
}

// Maps - storing unique values in key-value pairs

let countryCodes = new Map()

countryCodes.set('IN', 'India')
countryCodes.set('USA', 'United States Of America')
countryCodes.set('FR', 'France')
countryCodes.set('FR', 'France')


// console.log(countryCodes);
// OUTPUT
// {
//     'IN' => 'India',
//     'USA' => 'United States Of America',
//     'FR' => 'France'
//   }


// Can maps be iterated with for of ?

for (const key of countryCodes) {

    // console.log(key);
    // OUTPUT
    // [ 'IN', 'India' ]
    // [ 'USA', 'United States Of America' ]
    // [ 'FR', 'France' ]
}

// To remove above glitch, use destructuring of array

for (const [key, value] of countryCodes) {
    
    // console.log(key, ':-', value);
    // OUTPUT
    // IN :- India
    // USA :- United States Of America
    // FR :- France
}

// Can objects be iterated with for of ?

let games = {
    racing: 'NFS',
    action: 'Prince of Prussia'
}

// Err: games is not iterable
// for (const keys of games) {
//     // console.log(keys); 
// }

for (const [type, name] of Object.entries(games)) {
    console.log(type, ':', name);
}