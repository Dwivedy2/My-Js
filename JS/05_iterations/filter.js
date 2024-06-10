// return from foreach

let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9]

let greatorThanThree = nums.forEach( (n) => {
    return n > 3
})

// console.log(greatorThanThree); // undefined

// filter is function that returns the "element" of the same array
// on truthy value, or an empty array on falsy value

let even = nums.filter( (n) => n%2 == 0 )

// console.log(even); // [ 2, 4, 6, 8 ]

let evenNums = []

nums.forEach( (n) => {
    if(n % 2 == 0){
        evenNums.push(n)
    }
} )

// console.log(evenNums); // [ 2, 4, 6, 8 ]

const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

// P1. Find those books having genre 'History'

let historyBooks = books.filter( ({genre}) => genre == 'History')

// console.log(historyBooks);

// P2. Find those books which are published in and after 2000

let booksPublishedAfter2000 = books.filter( ({publish}) => publish >= 2000 )

// console.log(booksPublishedAfter2000);

// P3. Find those books which are from 'History' section and published after 1995

let sortedBooks = books.filter( ({genre, publish}) => genre == 'History' && publish >= 1995 )

console.log(sortedBooks);