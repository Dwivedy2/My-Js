// reduce

let even = [2, 4, 6, 8, 10]

// In reduce, acc = initialValue, for the first time then
// acc = acc + curr
let initialValue = 0
// let sumOfEven = even.reduce( function (acc, currVal){
//     console.log(`acc: ${acc}, currVal: ${currVal}`);
//     return acc + currVal
// }, initialValue )

let sumOfEven = even.reduce( (acc, n) => acc + n, 0 )

// console.log(`sum of even ${sumOfEven}`);

// Practicle example of reduce

let shoppingCart = [
    {
        course: 'Basic + Advance JavaScript',
        price: 1999,
        tutor: 'Hitesh Choudhary',
        platform: 'Udemy'
    },
    {
        course: 'Python for beginners',
        price: 999,
        tutor: 'Hitesh Choudhary',
        platform: 'Coursera'
    },
    {
        course: 'Master in Data Science',
        price: 5999,
        tutor: 'Sudesh Choksey',
        platform: 'Coursera'
    },
    {
        course: 'Full Web Development',
        price: 7899,
        tutor: 'Anuj Sharma',
        platform: 'Coding Shuttle'
    }
]

// Finding the total price to pay

let totalPrice = shoppingCart.reduce( (acc, {price}) => acc + price, 0 )

console.log(`Total Price: $ ${totalPrice.toLocaleString('en-US')}`);