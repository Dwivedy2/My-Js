let marvel_heros = ["Ironman", "Captain America", "Hulk", "Spiderman"]
let dc_heros = ["Flash", "Superman", "Batman"]

// marvel_heros.push(dc_heros) // ["Ironman", "Captain America", "Hulk", "Spiderman", ["Flash", "Superman", "Batman"]]

// console.log(marvel_heros.length); // 5

// Use Concat instead of push
let all_heros = marvel_heros.concat(dc_heros) 
// ['Ironman', 'Captain America', 'Hulk', 'Spiderman', 'Flash', 'Superman', 'Batman']

// console.log(all_heros.length); // 7

// Use of Spread Operator, it opens all till individual elements
let all_new_heros = [...marvel_heros, ...dc_heros]
// ['Ironman', 'Captain America', 'Hulk', 'Spiderman', 'Flash', 'Superman', 'Batman']

// console.log(all_new_heros);

let interesting_array = [1, 2, 3, 4, [5, 6], 7, [6, 7, [8, 9]]]

let one_interesting_array = interesting_array.flat(Infinity)
// [1, 2, 3, 4, 5, 6, 7, 6, 7, 8, 9]

// console.log(one_interesting_array);


// Some Array Methods
// console.log(Array.from("Omkareshwar Nath Dwivedy"));
/**
[
  'O', 'm', 'k', 'a', 'r',
  'e', 's', 'h', 'w', 'a',
  'r', ' ', 'N', 'a', 't',
  'h', ' ', 'D', 'w', 'i',
  'v', 'e', 'd', 'y'      
]
 */

// console.log(Array.isArray("Hundai")); // false

console.log(Array.from({name: "Omkareshwar Nath"})) // [], dont know make array from values or keys

console.log(Array.of(1, 3, 4)) // [1, 3, 4]
